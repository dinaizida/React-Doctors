const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    title: {
        type: String,
        unique: false,
        required: true
    },
    specialties: {
       type: String,
       unique: false,
       required: false
    },
    practiceaddresss1: {
        type: String,
        unique: false,
       required: false
    },
    practiceaddresss2: {
        type: String,
        unique: false,
       required: false
    },
    practiceaddresss3: {
        type: String,
        unique: false,
       required: false
    },
    practiceaddresss4: {
        type: String,
        unique: false,
       required: false
    },
    practiceaddresss5: {
        type: String,
        unique: false,
       required: false
    },
    phone: {
        type: String,
        unique: false,
        required: false
    },
    imageurl: {
        type: String,
        unique: false,
        required: false
    },
    saved:{
        type: String
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;

