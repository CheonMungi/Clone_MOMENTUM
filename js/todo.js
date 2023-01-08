const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const DELETE_BTN_CLASSNAME = "dleteBtn";
const TODOLIST_KEY = "todos";

const toDos = [];

function saveToDos()
{
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

// Delete TODOList
function deleteToDo(event)
{
    const li = event.target.parentElement;
    const todoList = localStorage.getItem(TODOLIST_KEY);
    // const todo = li.getElementsByTagName("span")[0].innerText
    li.remove();
}

function paintTodo(newTodo)
{
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.classList.add(DELETE_BTN_CLASSNAME);
    button.innerText= "❌"
    button.addEventListener("click", deleteToDo);

    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

// add TODOList
function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

// show the already have todo list
function paintAlreadyToDos(item)
{
    paintTodo(item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// If already have a TODOList.
const savedToDos = localStorage.getItem(TODOLIST_KEY);
if(saveToDos != null)
{
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintAlreadyToDos);
}

