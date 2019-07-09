

class TodoComponent {
    constructor(componentElement) {
        // Assign outer TodoComponent Element. We should do all of our searching within here, not `document`.
        this.componentElement = componentElement;
        // Get the todos container element
        this.todosElement = this.componentElement.querySelector('.todos-container');
        // instantiate the Todos class with it
        this.todos = new Todos(this.todosElement); 

        // Do the same with form Element
        this.formElement = this.componentElement.querySelector('.todo-form');

        // I've given you a hint here. Look at the TodoForm constructor.
        this.form = new TodoForm(this.formElement, this.todos);

    }
}

class Todos {
    constructor(containerElement) {
        this.containerElement = containerElement;

    }
    addTodo(text) {
        // Add a todo element to the container, and instantiate its class
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(text);
        newDiv.appendChild(newText);

        const item = new Todo(newDiv);
        this.containerElement.append(item.todoElement);
    }
}

class Todo {
    constructor(todoElement) {
        this.todoElement = todoElement;
        this.todoElement.addEventListener('click', e => {
            this.toggle();
        })
        // What do we need to add to make our element to make `this.toggle` work?
    }
    toggle() {
        // Toggle the element being 'done'
        this.todoElement.classList.toggle('done');
        console.log('hello');
        // .done
    }
}

class TodoForm {
    // Note the second argument, `todos`. It is an instance of the `Todos` class
    constructor(formElement, todos) {
        this.formElement = formElement;
        this.todos = todos;
        this.input = this.formElement.querySelector('input');
        this.addButton = this.formElement.querySelector('.add');

        this.addButton.addEventListener('click', e => {
            e.preventDefault();
            this.submitTodo();
        });

        // stretch - make a button clear all completed todos
        // this.clearButton;

        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    }
    submitTodo() {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
        // see 'value'. 
        
        this.todos.addTodo(this.input.value);


        // We need to actually add a todo to the page. If only we had access to
        // a class that has a member function that does just that.
    }
}

// Instantiate TodoComponent Classes
let toDos = document.querySelectorAll('.todo-component');
toDos.forEach(todoElem => new TodoComponent(todoElem));

