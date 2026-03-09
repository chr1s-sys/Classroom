const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Classroom.findAll();
}

async function getById(id) {
    return await getClassroom(id);
}

async function create(params) {
    const classroom = new db.Classroom(params);
    await classroom.save();
}

async function update(id, params) {
    const classroom = await getClassroom(id);
    Object.assign(classroom, params);
    await classroom.save();
}

async function _delete(id) {
    const classroom = await getClassroom(id);
    await classroom.destroy();
}

async function getClassroom(id) {
    const classroom = await db.Classroom.findByPk(id);
    if (!classroom) throw 'Classroom not found';
    return classroom;
}