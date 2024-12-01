import mongoose,{Schema} from "mongoose";


const userSchema =new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },

})


export const user = mongoose.model('user',userSchema)