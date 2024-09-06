import Todos from "./todos.js"


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

const list = new TodoList()

const todo1 = new Todos('Buy groceries', 'Buy milk, eggs, and bread', 'aa', 5, false);
const todo2 = new Todos('Complete project', 'Finish the JavaScript ToDo project', 'aa', 8, true);
const todo3 = new Todos('Read book', 'Read 50 pages of the new book', 'aa',2)


list.addTodo(todo1)
list.addTodo(todo2)
list.addTodo(todo3)


// console.log(list)
list.removeTodo(1)
console.log(list)
