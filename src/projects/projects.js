


class Project {
    constructor (title) {
        this.title = title
        this.todosList = [];
    }


    editTitle(newTitle) {
        this.title = newTitle
    }

    addTodo(todo) {
        this.todosList.push(todo)
    }
}





export default Project