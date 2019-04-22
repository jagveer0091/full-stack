const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDatabase',{useNewUrlParser: true})

mongoose.connection.once('open',()=>{
    console.log('Mongoose Connection is successfull')
}).on('error',(error)=>{
    console.log('Connection error : '+error)
})
