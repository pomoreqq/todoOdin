import Todo from "./todos.js"


class TodoList {
    constructor() {
        this.todos = []
    }


    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(index) {
        if(index >= 0 && index < this.todos.length) {
            this.todos.splice(index,1)
        } else {
            throw new Error('invalid index')
        }
    }


}

