const loginForm = document.querySelector("#login-form"); // document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // const loginInput = document.querySelector("#login-form input");
const greetingForm = document.querySelector("#greeting-form");
const greeting = greetingForm.querySelector(".greetingSpan");

const HIDDEN_CLASSNAME = "hidden";
const OPEN_INPUTFORM_CLASSNAME = "inputform"
const OPEN_GREETINGS_CLASSNAME = "greetings";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{ 
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.remove(OPEN_INPUTFORM_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();   
}

function onLogoutSubmit(event)
{
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greetingForm.classList.remove(OPEN_GREETINGS_CLASSNAME);
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(OPEN_INPUTFORM_CLASSNAME);
}


function paintGreetings()
{
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome ${userName}`; // greeting.innerText = "Hello " + userName;
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    greetingForm.classList.add(OPEN_GREETINGS_CLASSNAME);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingForm.addEventListener("submit", onLogoutSubmit);
    
}

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
}
else
{
    // show the greetings.
    paintGreetings();
}