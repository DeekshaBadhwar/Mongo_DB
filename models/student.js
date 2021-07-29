const mongoose=require('mongoose')
const validator=require("validator")

const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exist"],
        validate(value)
        {
            if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        
        unique:true
    },
    address:{
        type:String,
        requied:true
    }
})

// creation a new collection

const Student=new mongoose.model("student",StudentSchema)

module.exports=Student