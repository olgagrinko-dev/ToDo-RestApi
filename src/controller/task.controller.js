const express = require('express');
const route = express.Router();
const { getAllTask, getTaskById, createTask, updataTask, deleteTaskById } = require('../service/task.service');

route.get('/', async (req, res) => {
    try {
        res.send(await getAllTask());
    } catch (error) {
        res.send(error.message);
    }
})

route.get('/:_id', async (req, res) => {
    try {      
        res.send(await getTaskById(req.params._id));
    } catch (er) {
        res.send(er.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const task = req.body;
        res.send(await createTask(task));
    } catch (error) {
        res.send(error.message);
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const task = req.body;
        res.send(await updataTask(_id, task));
    } catch (error) {
        res.send(error.message);
    }
});

route.delete('/:_id', async (req, res) => {
    try {
        res.send(await deleteTaskById(req.params._id));
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = route;