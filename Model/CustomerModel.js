const mongoose = require('mongoose')
const { type } = require('os')
const CustomerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    cityName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    totalBill:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('CostomerData',CustomerSchema)