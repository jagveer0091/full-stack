const mongoose = require('mongoose')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const dataSchema = require('./model/model.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/expressDatabase',{useNewUrlParser: true})

//Mongo Db Connection
mongoose.connection.once('open',()=>{
    console.log('Mongoose Connection is successfull')
}).on('error',(error)=>{
    console.log('Connection error : '+error)
})

app.get('/', (request,response)=>{
    response.send('Hello World')
})

//Save data to Database
app.post('/save_data',(request,response)=>{
    const data = new dataSchema({
        name:request.body.name,
        phone_number: request.body.phone_number,
        emailID: request.body.emailID,
        student: request.body.student
    })
    data.save().then(doc=>{
        console.log(doc)
    }).catch(err =>{
        console.log(err)
    })
    response.send('hello')
})

//Show Data from Database
app.get('/show_data',(request,response)=>{
    dataSchema.find().then(doc =>{
        console.log(doc)
        return response.data
    })
    .catch(err =>{
        console.log(err)
    })
})

//Update Data of Database
app.put('/update_data',(request,response)=>{
    dataSchema.findOneAndUpdate({
        emailID: request.body.emailID
    },
    {
        emailID: 'himanshu@gmail.com'
    },
    {
        new: true,
        runValidators: true
    }).then(doc =>{
        console.log(doc)
        response.send('Update Successfull')
    })
    .catch(err=>{
        console.log(err)
    })
})

//Delete data from database
app.delete('/delete_data',(request,response)=>{
    dataSchema.findOneAndRemove({
        name: request.body.name
    })
    .then(doc =>{
        console.log(doc)
        response.send('Deletion Successfull')
    })
    .catch(err=>{
        console.log(err)
    })
})

//Server Connection
app.listen(3232, ()=>{
    console.log('Connected to server 3232')
})
