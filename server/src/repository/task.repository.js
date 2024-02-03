const { Table, ObjectId } = require('../db');

async function getAllTaskDb() {
    return await Table.find();
}

async function getTaskByIdDb(_id) {
    return await Table.find({ _id: new ObjectId(_id) });
}

async function createTaskDb(task) {
    await Table.create(task);
    return await Table.find();
}

async function updataTaskDb(_id, task) {
    await Table.updateOne({ _id: new ObjectId(_id) }, { $set: task });  
    return await Table.find({ _id: new ObjectId(_id) });
}

async function deleteTaskByIdDb(_id) {
    await Table.deleteOne({ _id: new ObjectId(_id)});  
    return await Table.find();
}

module.exports = { getAllTaskDb, getTaskByIdDb, createTaskDb, updataTaskDb, deleteTaskByIdDb };