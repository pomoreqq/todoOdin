
import Project from "./projects.js"

class ProjectsList {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(index) {
       this.projects =  this.projects.filter((project,i) => i !== index)
            
    }
}
