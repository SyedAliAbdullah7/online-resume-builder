const mongoose = require('mongoose')

const SignUpschema = new mongoose.Schema({

    signupEmail: String,
    signupUsername: String,
    signupPassword: String   
})

const SignUPModel = mongoose.model("Registrations", SignUpschema)
module.exports = SignUPModel