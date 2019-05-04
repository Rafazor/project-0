const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const todoContainer = document.createElement('div');

    checkBox.type = 'checkbox';
    checkBox.value = 'new ToDo';
    checkBox.classList.add(classNames.TODO_CHECKBOX);
    checkBox.addEventListener("click", uncheckCount);

    todoContainer.appendChild(checkBox);
    todoContainer.appendChild(label);
    todoContainer.classList.add(classNames.TODO_ITEM);

    label.appendChild(document.createTextNode('New ToDo'));
    label.classList.add(classNames.TODO_TEXT);

    list.appendChild(todoContainer);

    itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
}

function uncheckCount(e) {
    if (e.target.checked === true) {
        uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;
    } else {
        uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
    }
}