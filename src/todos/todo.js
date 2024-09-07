class Todo  {
    constructor (title,description,dueDate,priority,completion = false) {
        

        if (typeof description !== 'string' || typeof title !== 'string') {
            throw new Error('Title and description must be strings');
        }
        if (typeof dueDate !== 'string') {
            throw new Error('dueDate must be a string');
        }
        if (typeof priority !== 'number' || (priority < 1 || priority > 10)) {
            throw new Error('Priority must be a number');
        }
        if (typeof completion !== 'boolean') {
            throw new Error('Completion must be a boolean');
        }
        
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completion = completion
    }


    toggleCompletion() {
       return this.completion = !this.completion
    }


    editTodo(updates) {
        
        if (updates.title) {
            if (typeof updates.title !== 'string') {
                throw new Error('Title must be a non-empty string');
            }
            this.title = updates.title;
        }

        
        if (updates.description) {
            if (typeof updates.description !== 'string') {
                throw new Error('Description must be a string');
            }
            this.description = updates.description;
        }

        
        if (updates.dueDate) {
            if (updates.dueDate  !== 'string') {
                throw new Error('dueDate must be a valid Date object');
            }
            this.dueDate = updates.dueDate;
        }

        
        if (updates.priority) {
            if (typeof updates.priority !== 'number' || updates.priority < 1 || updates.priority > 10) {
                throw new Error('Priority must be a number between 0 and 10');
            }
            this.priority = updates.priority;
        }
    }
}


export default Todo