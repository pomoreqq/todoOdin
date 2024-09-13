
import Project from "./projects.js"

class ProjectsList {
    constructor() {
        this.projects = this.loadFromLocalStorage() || [];
        const defaultProject = new Project('Default Project')
        this.addProject(defaultProject)
    }

    addProject(project) {
        this.projects.push(project)
        this.saveToLocalStorage()
    }

    removeProject(index) {
       this.projects =  this.projects.filter((project,i) => i !== index)
       this.saveToLocalStorage()
            
    }

    saveToLocalStorage(){
        localStorage.setItem('projects',JSON.stringify(this.projects))
    }

    loadFromLocalStorage() {
        const projects = localStorage.getItem('projects')
        if (projects) {
            return JSON.parse(projects).map(projectData => {
                const project = new Project(projectData.title)
                project.todosInProject = project.todosInProject.map(todoData => {
                    return new todoData(
                        todoData.title,
                        todoData.description,
                        todoData.dueDate,
                        todoData.priority,
                        todoData.completion
                    )
                })
                return project
            })
        }
        return null
    }
}
