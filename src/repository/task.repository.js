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
    const data = await Table.find({ _id: new ObjectId(_id) });
    return data;
}

async function deleteTaskByIdDb(_id) {
    return await Table.deleteOne({ _id: new ObjectId(_id) });
}

module.exports = { getAllTaskDb, getTaskByIdDb, createTaskDb, updataTaskDb, deleteTaskByIdDb };