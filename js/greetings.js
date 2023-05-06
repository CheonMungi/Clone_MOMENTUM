import * as Todo from './todo.js';

const loginForm = document.querySelector("#login-form"); // document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // const loginInput = document.querySelector("#login-form input");
const greetingForm = document.querySelector("#greeting-form");
const greeting = greetingForm.querySelector(".greeting-span");

export const HIDDEN_CLASSNAME = "hidden";
const OPEN_INPUTFORM_CLASSNAME = "input-form"
const OPEN_GREETINGS_CLASSNAME = "greeting";
const USERNAME_KEY = "username";

/**
 * 로그인
 * @param {*} event 
 */
function onLoginSubmit(event)
{ 
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.remove(OPEN_INPUTFORM_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
    Todo.paintTodoForm(true);
}

/**
 * 로그아웃
 * @param {*} event 
 */
function onLogoutSubmit(event)
{
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greetingForm.classList.remove(OPEN_GREETINGS_CLASSNAME);
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(OPEN_INPUTFORM_CLASSNAME);
    Todo.paintTodoForm(false);
}

/**
 * 로그인 환영 인사 표시
 */
function paintGreetings()
{
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome ${userName}`; // greeting.innerText = "Hello " + userName;
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    greetingForm.classList.add(OPEN_GREETINGS_CLASSNAME);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingForm.addEventListener("submit", onLogoutSubmit);
    
}

/**
 * 로그인 form 표시
 */
function paintLogin()
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(OPEN_INPUTFORM_CLASSNAME);
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null)
{
    // show the form.
    paintLogin();
    Todo.paintTodoForm(false);
}
else
{
    // show the greetings.
    paintGreetings();
    Todo.paintTodoForm(true);
}