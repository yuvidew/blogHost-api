const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
    },
    date : {
        type : String,
    },
    content : {
        type : String,
        require : true
    },
    image : {
        type : String
    }
})

const blogSchemaModel = mongoose.model('blogs' , blogSchema)

module.exports = blogSchemaModel