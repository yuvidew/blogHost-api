const express = require('express')
const blogSchemaModel = require('../models/blogSchema')
const route = express.Router()

route.post('/post' , async (req , res) => {
    const {body} = req
    try {
        const result = await blogSchemaModel.create(body)
        if(!result) return res.status(500).json({msg : 'server issue'})
        return res.status(200).json({msg : 'ok'})
    } catch (error) {
        return res.status(404).json({msg : 'somthinng is wrong'})
    }
})

route.get('/get/:id' , async (req , res) => {
    const {id} = req.params
    const data = await blogSchemaModel.findById(id)
    return res.status(200).json(data)
})

route.get('/get' , async (req , res) => {
    const data = await blogSchemaModel.find(req.query)
    return res.status(200).json(data)
})

route.get('/get' , async(req , res) => {
    const data = await blogSchemaModel.find()
    return res.status(200).json(data)
})

module.exports = route