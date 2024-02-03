const { getAllTaskDb, getTaskByIdDb, createTaskDb, updataTaskDb, deleteTaskByIdDb } = require('../repository/task.repository');

async function getAllTask() {
    return await getAllTaskDb();
}

async function getTaskById(_id) {
    return await getTaskByIdDb(_id);
}

async function createTask(task) {
    return await createTaskDb(task);
}

async function updataTask(_id, task) {
    return await updataTaskDb(_id, task);

}

async function deleteTaskById(_id) {
    return await deleteTaskByIdDb(_id);
}

module.exports = { getAllTask, getTaskById, createTask, updataTask, deleteTaskById }