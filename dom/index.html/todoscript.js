// select dom elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
//add task function
addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('please enter a task');
        return;
    }

// Check for duplicate tasks
const existingTasks = Array.from(todoList.querySelectorAll('li span')).map(
    (span) => span.textContent
);
if (existingTasks.includes(todoText)) {
    alert('This task already exists!');
    const duplicateTask = Array.from(todoList.querySelectorAll('li span')).find(
        (span) => span.textContent === todoText
    );
    duplicateTask.parentElement.classList.add('highlight');
    setTimeout(() => duplicateTask.parentElement.classList.remove('highlight'), 1000);
    return;
}

const updateEmptyMessage = () => {
    if (todoList.children.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.id = 'empty-message';
        emptyMessage.textContent = 'Your to-do list is empty!';
        todoList.appendChild(emptyMessage);
    } else {
        const emptyMessage = document.getElementById('empty-message');
        if (emptyMessage) emptyMessage.remove();
    }
};

    //create Todo Item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
    <span>${todoText}</span>
    <button class="delete-btn"aria-label="Delete Task">Delete</button>
    `;

    //add task to list
    todoList.appendChild(todoItem);

    //clear Input Field
    todoInput.value = '';

     // Update Empty Message
     updateEmptyMessage();

    //Add delete functionality
    const deleteBtn = todoItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoItem.classList.add('fade-out');
        setTimeout(() => todoItem.remove(), 500); // Wait for animation to complete
    });
});

// Add Enter Key Support
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && todoInput === document.activeElement) {
        addTodoBtn.click();
    }
});

// Initial Check for Empty List
updateEmptyMessage();
