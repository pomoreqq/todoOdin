import Todo from "./todo.js"


class TodoList {
    constructor() {
        this.todos = this.loadFromLocalStorage() || []   
     }


    addTodo(todo) {
        this.todos.push(todo)
        this.saveToLocalStorage()
    }

    removeTodo(index) {
        if(index >= 0 && index < this.todos.length) {
            this.todos.splice(index,1)
            this.saveToLocalStorage()
        } else {
            throw new Error('invalid index')
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    loadFromLocalStorage() {
        const todos = localStorage.getItem('todos')
        if (todos) {
            return JSON.parse(todos).map(todoData => {
                return new Todo(
                    todoData.title,
                    todoData.description,
                    todoData.dueDate,
                    todoData.priority,
                    todoData.completion
                )
            })
        }
        return null
    }
   

}

export default TodoList