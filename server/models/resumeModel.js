import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"provide name"]
    },
    email : {
        type : String,
        required : [true,"provide email"],
        unique : true,
    },
    JobTitle : {
        type : mongoose.Schema.ObjectId,
        default:"" ,
       
    },
    LinkedIn : {
        type : String,
        default:"" ,
        unique : true ,
    },
    Experience : {
      title :{
        type : mongoose.Schema.ObjectId, 
        default : "" ,
      },
      companyName :{
        type : mongoose.Schema.ObjectId, 
        default : "" ,
      },
      desc :{
        type : String ,
        default : "" ,
      },
      formDate :{
        type : Date ,
        default : "" ,
      },
      ToDate :{
        type : Date ,
        default : "" ,
      }
    },
    avatar : {
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    },
   
    Location: [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'address'
        }
    ],
    Education : {
degree : {
    type : String ,
    default : ""
} ,
school : {
    type : String ,
    default : "" ,
} ,
formDate :{
    type : Date ,
    default : "" ,
  },
  ToDate :{
    type : Date ,
    default : "" ,
  }
        
    } ,
 keyAchievements : {
    type : String ,
    default : "" ,
 } ,
 skills : {
    type : String ,
    default : "" ,
 } ,
 certification : {
    type : String ,
    default : "" ,
 } ,
projects : {
    projectName : {
        type : String ,
        default : ""
    },
   formDate : {
        type : Date ,
        default : ""
    } ,
    todate : {
        type : Date ,
        default : ""
    } ,
    summary : {
        type : string ,
        default : ""
    },
    
}
 
},
  {
    timestamps : true
})

const UserModel = mongoose.model("User",userSchema)

export default UserModel
