import * as Greetings from './greetings.js';

const OPEN_TODOFORM_CLASSNAME = "todo-form";
const OPEN_TODO_UL_ID = "todo-ul";
const DELETE_BTN_CLASSNAME = "delete-btn";
const TODO_LI = "todo-li";
const TODOS_SPAN = "todos-span";
const TODOLIST_KEY = "todos";
const toDoForm = document.getElementById(OPEN_TODOFORM_CLASSNAME);
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById(OPEN_TODO_UL_ID);

let toDos = [];

/**
 * todo list저장
 */
function saveToDos()
{
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

/**
 * todo list삭제
 * @param {*} event 
 */
function deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != li.id);
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

/**
 * todo리스트 표시
 * @param {*} newTodoObj 
 */
function paintTodo(newTodoObj)
{
    toDoList.childElementCount;

    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const span = document.createElement("span");
    list.classList.add(TODO_LI);
    // list.innerText = newTodoObj.text;
    span.classList.add(TODOS_SPAN);
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.classList.add(DELETE_BTN_CLASSNAME);
    button.innerText= "❎"
    button.addEventListener("click", deleteToDo);

    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

/**
 * todo list 추가
 * @param {*} event 
 */
function handleToDoSubmit(event)
{
    // childCnt = curCnt + newChild(1)
    const childCnt = toDoList.childElementCount + 1;
    if(childCnt <= 6)
    {
        event.preventDefault();
        const newTodo = todoInput.value;
        todoInput.value="";
        const newTodoObj = {
        text:newTodo,
        id: Date.now(),
        };
        toDos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveToDos();
    }
    else
    {
        alert("TODO List is 6 pieces maximum.")
    }
    
}

/**
 * todo form 표시/비표시
 * @param {*} flg 
 */
export function paintTodoForm(flg)
{
    if(flg)
    {
        toDoForm.classList.remove(Greetings.HIDDEN_CLASSNAME);
        toDoForm.classList.add(OPEN_TODOFORM_CLASSNAME);
        toDoForm.addEventListener("submit", handleToDoSubmit);

        toDoList.classList.remove(Greetings.HIDDEN_CLASSNAME);
        toDoList.classList.add(OPEN_TODO_UL_ID);
        // If already have a TODOList.
        const savedToDos = localStorage.getItem(TODOLIST_KEY);
        if(savedToDos !== null)
        {
            // show the already have todo list
            const parsedToDos = JSON.parse(savedToDos);
            toDos = parsedToDos;
            parsedToDos.forEach(paintTodo);
        }
    }
    else
    {
        toDoForm.classList.add(Greetings.HIDDEN_CLASSNAME);
        toDoForm.classList.remove(OPEN_TODOFORM_CLASSNAME);
        toDoList.classList.add(Greetings.HIDDEN_CLASSNAME);
        toDoList.classList.remove(OPEN_TODO_UL_ID);
    }
}