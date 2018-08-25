const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    specialties: {
       type: String,
       unique: true,
       required: false
    },
    practiceaddresss1: {
        type: String,
        unique: true,
       required: false
    },
    practiceaddresss2: {
        type: String,
        unique: true,
       required: false
    },
    practiceaddresss3: {
        type: String,
        unique: true,
       required: false
    },
    practiceaddresss4: {
        type: String,
        unique: true,
       required: false
    },
    practiceaddresss5: {
        type: String,
        unique: true,
       required: false
    },
    phone: {
        type: String,
        unique: true,
        required: false
    },
    imageurl: {
        type: String,
        unique: true,
        required: false
    },
    saved: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;

