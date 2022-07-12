const router = require('express').Router();

const {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodoById,
    updateTodoById,
} = require('../../../controllers/todoController');

// every route that we declare inside this file will have /api/todos prepended before it

router.route('/')
    .get(getAllTodos)
    .post(createTodo);

router.route('/:todoId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById)

module.exports = router;

