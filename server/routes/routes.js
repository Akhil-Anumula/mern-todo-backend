const router = require('express').Router();

const todoItemsModel = require('../models/model');

router.post('/', async(req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item : req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json(`item added successfully.`)
    }
    catch(err){
        res.json(err)
    }
})

router.get('/', async(req,res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({})
        res.status(200).json(allTodoItems)
    }
    catch(err){
        res.json(err)
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set: req.body});
        res.status(200).json(`item updated`)
    }
    catch(err){
        res.json(err)
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('item deleted');
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router;