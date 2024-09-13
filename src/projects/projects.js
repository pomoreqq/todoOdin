


class Project {
    constructor (title) {
        this.title = title
        this.todosInProject = [];
    }


    editTitle(newTitle) {
        this.title = newTitle
    }

    addTodo(todo) {
        this.todosInProject.push(todo)
    }


    removeTodo(index) {
        this.todosInProject =  this.todosInProject.filter((todoIn, i) => i !== index)
      }
  
}


    



export default Project