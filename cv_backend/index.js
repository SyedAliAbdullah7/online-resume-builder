const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const formModel = require('./Schemas/cvSchema')
const SignUPModel = require('./Schemas/signupSchema')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/formDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('/signup', (req, res) => {
    SignUPModel.create(req.body)
        .then(user => res.json(user))
        .catch(error => res.json(error))
})

app.post('/login', (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    SignUPModel.findOne({ signupEmail: loginEmail })
        .then(user => {
            if (user) {
                if (user.signupPassword === loginPassword) {
                    res.json("Success")
                }
                else {
                    res.json("Password is incorrect")
                }
            }
            else {
                res.json("No user found")
            }
        })
})

app.get('/users', (req, res) => {
    SignUPModel.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post('/formdata', (req, res) => {
    formModel.create(req.body)
        .then(emp => res.json(emp))
        .catch(err => res.json(err))
})

// New endpoint to fetch data
app.get('/data', (req, res) => {
    formModel.findOne().sort({ _id: -1 })
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/cvdata', (req, res) => {
    formModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log('server is running')
})