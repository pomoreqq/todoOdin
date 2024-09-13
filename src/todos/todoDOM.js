
import Todo from "./todo.js"
import TodoList from "./todosList.js"

const list = new TodoList()
const todosList = document.getElementById('todos')

const showForm = () => {
    const popUp = document.querySelector('.popup')
    const closeButton = document.querySelector('.close-btn')
    if (popUp) {
        popUp.style.display = 'block'

        closeButton.addEventListener('click', () => {
            popUp.style.display = 'none'
        })
    } else {
        console.log('something went wrong')
    }
}




const submitTodo = (e) => {
    e.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const dueDate = document.getElementById('dueDate').value
    const priortyNot = document.getElementById('priority').value
    const priortyParsed = parseInt(priortyNot)
    const completion = document.getElementById('completion').checked


    const newTodo = new Todo(title,description,dueDate,priortyParsed,completion)

    list.addTodo(newTodo)
    appendList()

    document.getElementById('todoForm').reset()
    document.querySelector('.popup').style.display = 'none'
    
}
   

const appendList = () => {
    todosList.innerHTML = ''

    list.todos.forEach(item => {
        const todos = document.getElementById('todos')
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todoDiv')
        const titleP = document.createElement('p')
        titleP.classList.add('titleTodo')
        titleP.textContent = item.title
        const descriptionP = document.createElement('p')
        descriptionP.classList.add('descriptionTodo')
        descriptionP.textContent = item.description
        const dateP = document.createElement('p')
        dateP.classList.add('dateTodo')
        dateP.textContent = item.dueDate
        const priorityP = document.createElement('p')
        priorityP.textContent = item.priority
        priorityP.classList.add('priorityTodo')
        const completionP = document.createElement('p')
        completionP.textContent = item.completion
        completionP.classList.add('completionTodo')
        const buttonRemove = document.createElement('button')
        buttonRemove.textContent = 'remove'
        buttonRemove.classList.add('removeTodo')
        const buttonEdit = document.createElement('button')
        buttonEdit.textContent = 'Edit'
        buttonEdit.classList.add('removeTodo')
        const buttonToggle = document.createElement('button')
        buttonToggle.textContent = 'toggleTodo'
        buttonToggle.classList.add('toggleTodo')

        todoDiv.appendChild(titleP)
        todoDiv.appendChild(descriptionP)
        todoDiv.appendChild(dateP)
        todoDiv.appendChild(priorityP)
        todoDiv.appendChild(completionP)
        todoDiv.appendChild(buttonRemove)
        todoDiv.appendChild(buttonEdit)
        todoDiv.appendChild(buttonToggle)
        todos.appendChild(todoDiv)
    })
}


export {showForm, submitTodo}