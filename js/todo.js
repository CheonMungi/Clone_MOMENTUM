const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo)
{
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.appendChild(span);
    span.innerText = newTodo;
    
    toDoList.appendChild(list);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    paintTodo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);