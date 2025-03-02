import UserModel from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import sendEmail from '../config/sendEmail.js'
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'
 import generatedAccessToken from '../utils/generatedAccessToken.js'
 import genertedRefreshToken from '../utils/generatedRefreshToken.js'
import dotenv from 'dotenv'
import generateOtp from '../utils/generateOtp.js'
import jwt from 'jsonwebtoken'
import forgotPasswordTemplate from '../utils/forgotPasswordTemplate.js'

export async function registerUserController(request,response){
    try{
        const {name , email ,password} = request.body

        if(!name || !email || !password){
            return response.status(400).json({
                message : "provide email or name or password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({email})

        if(user){
            return response.json({
                message : "already registered email",
                error : true ,
                success : false
            })
        }


        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }


        const newUser = new UserModel(payload)
        const save =  await newUser.save()

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({

        sendTo : email ,
        subject : "Verify email from QuickCV",
        html : verifyEmailTemplate({
            name : name ,
            url : VerifyEmailUrl
        })
    })


    return response.json({
        message : "User register successfully ",
        message : "Please verify your email ID" ,
        error : false,
        success : true,
        data : save
    })


    


}
catch (error) {
    return response.status(500).json({
        message : error.message || error,
        error : true,
        success : false
    })
    }
}
export async function verifyEmailController(request,response){
        try {
            const { code } = request.body
    
            const user = await UserModel.findOne({ _id : code})
    
            if(!user){
                return response.status(400).json({
                    message : "Invalid code",
                    error : true,
                    success : false
                })
            }
    
            const updateUser = await UserModel.updateOne({ _id : code },{
                verify_email : true
            })
    
            return response.json({
                message : "Email Verified Successfully",
                success : true,
                error : false
            })
        } catch (error) {
            return response.status(500).json({
                message : error.message || error,
                error : true,
                success : true
            })
        }
    }
    
    export async function loginController(request,response){
        try {
            const { email , password } = request.body
    
    
            if(!email || !password){
                return response.status(400).json({
                    message : "provide email, password",
                    error : true,
                    success : false
                })
            }
    
            const user = await UserModel.findOne({ email })
    
            if(!user){
                return response.status(400).json({
                    message : "User not register",
                    error : true,
                    success : false
                })
            }
    
           
    
            const checkPassword = await bcryptjs.compare(password,user.password)
    
            if(!checkPassword){
                return response.status(400).json({
                    message : "Check your password",
                    error : true,
                    success : false
                })
            }
    
            const accesstoken = await generatedAccessToken(user._id)
            const refreshToken = await genertedRefreshToken(user._id)
    
            const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
                last_login_date : new Date()
            })
    
            const cookiesOption = {
                httpOnly : true,
                secure : true,
                sameSite : "None"
            }
            response.cookie('accessToken',accesstoken,cookiesOption)
            response.cookie('refreshToken',refreshToken,cookiesOption)
    
            return response.json({
                message : "User Logged in  successfully",
                error : false,
                success : true,
                data : {
                    accesstoken,
                    refreshToken
                }
            })
    
        } catch (error) {
            return response.status(500).json({
                message : error.message || error,
                error : true,
                success : false
            })
        }
    
    }
    export async function logoutController(request,response){
        try {
            const userid = request.userId //middleware
    
            const cookiesOption = {
                httpOnly : true,
                secure : true,
                sameSite : "None"
            }
    
            response.clearCookie("accessToken",cookiesOption)
            response.clearCookie("refreshToken",cookiesOption)
    
            const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
                refresh_token : ""
            })
    
            return response.json({
                message : "Logout successfully",
                error : false,
                success : true
            })
        } catch (error) {
            return response.status(500).json({
                message : error.message || error,
                error : true,
                success : false
            })
        }
    }

    // update user details
export async function updateUserDetails(request,response){
    try {
        const userId = request.userId         //auth middleware
        const { name, email, mobile, password } = request.body 

        let hashPassword = ""

        if(password){
            const salt = await bcryptjs.genSalt(10)
            hashPassword = await bcryptjs.hash(password,salt)
        }

        const updateUser = await UserModel.updateOne({ _id : userId},{
            ...(name && { name : name }),
            ...(email && { email : email }),
            ...(mobile && { mobile : mobile }),
            ...(password && { password : hashPassword })
        })

        return response.json({
            message : "User Updated successfully",
            error : false,
            success : true,
            data : updateUser
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//forgot password  for not login
export async function forgotPasswordController(request,response) {
    try {
        const { email } = request.body 

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email is not available",
                error : true,
                success : false
            })
        }

        const otp = generateOtp()
        const expireTime = new Date() + 60 * 60 * 1000 // 1hr

        const update = await UserModel.findByIdAndUpdate(user._id,{
            forgot_password_otp : otp,
            forgot_password_expiry : new Date(expireTime).toISOString()
        })

        await sendEmail({
            sendTo : email,
            subject : "Forgot password from QuickCV",
            html : forgotPasswordTemplate({
                name : user.name,
                otp : otp
            })
        })

        return response.json({
            message : "otp sent to your email",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//verify forgot password otp
export async function verifyForgotPasswordOtp(request,response){
    try {
        const { email , otp }  = request.body

        if(!email || !otp){
            return response.status(400).json({
                message : "Provide required field email or otp.",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email is not available",
                error : true,
                success : false
            })
        }

        const currentTime = new Date().toISOString()

        if(user.forgot_password_expiry < currentTime  ){
            return response.status(400).json({
                message : "Otp is expired",
                error : true,
                success : false
            })
        }

        if(otp !== user.forgot_password_otp){
            return response.status(400).json({
                message : "Invalid otp",
                error : true,
                success : false
            })
        }

        //if otp is not expired
        //otp === user.forgot_password_otp

        const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
            forgot_password_otp : "",
            forgot_password_expiry : ""
        })
        
        return response.json({
            message : "Otp Verified successfully",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//reset the password
export async function resetpassword(request,response){
    try {
        const { email , newPassword, confirmPassword } = request.body 

        if(!email || !newPassword || !confirmPassword){
            return response.status(400).json({
                message : "provide required fields email, newPassword, confirmPassword"
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email is not available",
                error : true,
                success : false
            })
        }

        if(newPassword !== confirmPassword){
            return response.status(400).json({
                message : "newPassword and confirmPassword must be same.",
                error : true,
                success : false,
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(newPassword,salt)

        const update = await UserModel.findOneAndUpdate(user._id,{
            password : hashPassword
        })

        return response.json({
            message : "Password updated successfully.",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


//refresh token controller
export async function refreshToken(request,response){
    try {
        const refreshToken = request.cookies.refreshToken || request?.headers?.authorization?.split(" ")[1]  /// [ Bearer token]

        if(!refreshToken){
            return response.status(401).json({
                message : "Invalid token",
                error  : true,
                success : false
            })
        }

        const verifyToken = await jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH_TOKEN)

        if(!verifyToken){
            return response.status(401).json({
                message : "token is expired",
                error : true,
                success : false
            })
        }

        const userId = verifyToken?._id

        const newAccessToken = await generatedAccessToken(userId)

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.cookie('accessToken',newAccessToken,cookiesOption)

        return response.json({
            message : "New Access token generated",
            error : false,
            success : true,
            data : {
                accessToken : newAccessToken
            }
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//get login user details
export async function userDetails(request,response){
    try {
        const userId  = request.userId

        console.log(userId)

        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return response.json({
            message : 'user details',
            data : user,
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : "Something is wrong",
            error : true,
            success : false
        })
    }
}