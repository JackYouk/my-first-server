module.exports = {
    getAllTodos: (req, res) => res.json('Getting all todos'),
    getTodoById: (req, res) => res.json('Getting todo by id'),
    createTodo: (req, res) => res.json('Creating a todo'),
    deleteTodoById: (req, res) => res.json('Deleting todo by id'),
    updateTodoById: (req, res) => res.json('Updating todo by id'),
}