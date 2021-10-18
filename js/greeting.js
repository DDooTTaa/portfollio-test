const loginForm = document.querySelector(".visiterName");
const loginInput = document.querySelector(".visiter input");
const loginText = document.querySelector(".visiter p");
const loginSubText = document.querySelector(".sub-form");
const greeting = document.querySelector("#greeting");
const profile = document.querySelector(".profileContainer");
const myreward = document.querySelector(".myreward");

//const gradient = document.querySelector(".gradient_HTML");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);


  // const templateParams = {
  //   //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
  //   name: ('input[name=name]').val()
  // };


  // emailjs.send('gmail', 'template_vsuan9m', templateParams)
  //   //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
  //   .then(function (response) {
  //     console.log('SUCCESS!', response.status, response.text);
  //   }, function (error) {
  //     console.log('FAILED...', error);
  //   });

  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  profile.classList.remove(HIDDEN_CLASSNAME);
  myreward.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `${username}`;
  //  gradient.style = `content : ${username}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

