
const todosList = document.querySelector('.todos');
const todoInput = document.querySelector('#todoInput');
const submitBtn = document.querySelector('#submitTodo');


submitBtn.addEventListener('click', function(){
    const ntodo = {
        todo: todoInput.value,
    }

    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ntodo)
    })
        .then(res => res.json())
        .then(newTodo => {
            todoInput.value = '';
            const newTodoLi = document.createElement('li');
            newTodoLi.textContent = newTodo.todo;
            todosList.appendChild(newTodoLi);
        })
})

// GET localhost:3001/api/todos
fetch('/api/todos')
    .then(res => res.json())
    .then(todos => renderTodos(todos));


const renderTodos = (todos) => {
    todosList.innerHTML = '';

    todos.forEach(todo => {
        console.log(todo);
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.todo;
        todosList.appendChild(todoItem);
    });
}