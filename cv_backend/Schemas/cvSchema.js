const mongoose = require('mongoose')

const formschema = new mongoose.Schema({

    name: String,
    email: String,
    phoneNO: Number,
    addr: String,
    linkedin: String,
    github : String,
    majorSkill: String,
    summary: String,
    post: String,
    company: String,
    startingDate: String,
    endingDate: String,
    description: String,
    degree: String,
    MajorCourse: String,
    school: String,
    degreeCompl: Number,
    skills: Array,
    
})

const formModel = mongoose.model("CVData", formschema)
module.exports = formModel