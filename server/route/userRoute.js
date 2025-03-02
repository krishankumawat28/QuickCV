import { Router } from 'express'
import {  logoutController,registerUserController,loginController,verifyEmailController} from '../controllers/userController.js'
import auth from '../middlewares/auth.js'
import { updateUserDetails,forgotPasswordController,verifyForgotPasswordOtp,resetpassword,refreshToken,userDetails } from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetpassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)

export default userRouter