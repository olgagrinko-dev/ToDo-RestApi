const express = require('express');
const route = express.Router();
const { getAllTask, getTaskById, createTask, updataTask, deleteTaskById } = require('../service/task.service');
const { buildResponse } = require('../helper/buildResponse');

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, err.message, 404)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getTaskById(req.params._id);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, err.message, 404)
    }
})

route.post('/', async (req, res) => {
    try {
        const task = req.body;
        const data = await createTask(task);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, err.message, 404)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const task = req.body;
        const data = await updataTask(_id, task)
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, err.message, 404)
    }
});

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteTaskById(req.params._id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, err.message, 404)
    }
});

module.exports = route;