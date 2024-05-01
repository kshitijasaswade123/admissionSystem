const mongoose = require('mongoose');
const AdmissionSchema = new mongoose.Schema({
   fullName:{
        type:String,
        required:true
    },
    birthDate:{
        type:Date,
        required:true  
    },

    phoneNo:{
        type:Number,
        required:true  
    },
    email:{
        type:String,
        required:true 
    },
    city:{
        type:String,
        required:true  
    },
    address:{
        type:String,
        required:true
    },
    admissionFor:{
        type:String,
        required:true
    },
    admissionDate:{
        type:Date,
        default:Date.now()
    },
    fees:{
        type:Number,
        required:true  
    },
    photo:{
        type:String
    }
})

module.exports = mongoose.model('admission' ,AdmissionSchema)