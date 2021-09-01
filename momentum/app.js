document.addEventListener('DOMContentLoaded', () => {
  const $loginForm = document.querySelector('.login-form');
  const $loginInput = $loginForm.querySelector('input');
  const $greeting = document.querySelector('.greeting');
  const $alertTxt = document.querySelector('.alert-txt');
  const $logoutBtn = document.querySelector('.logout');
  const HIDDEN_CLASS = 'hidden';
  const USERNAME_KEY = 'userName';

  function onLogIn(event) {
    event.preventDefault();
    const userName = $loginInput.value;
    if (userName === '') {
      $alertTxt.innerText = 'Please write your name !';
      $alertTxt.classList.remove(HIDDEN_CLASS);
      return;
    }
    if (userName.length > 15) {
      $alertTxt.innerText = 'Your name is too long !';
      $alertTxt.classList.remove(HIDDEN_CLASS);
      return;
    }
    $loginForm.classList.add(HIDDEN_CLASS);
    $alertTxt.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, userName);
    greeting(userName);
  }
  function greeting(username) {
    $greeting.textContent = `Hello ${username}`;
    $greeting.classList.remove(HIDDEN_CLASS);
    $logoutBtn.classList.remove(HIDDEN_CLASS);
  }
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (!savedUsername) {
    // show the form
    $loginForm.classList.remove(HIDDEN_CLASS);
    $loginForm.addEventListener('submit', onLogIn);
  } else {
    // show the greeting
    greeting(savedUsername);
  }
  function onLogOut() {
    localStorage.removeItem(USERNAME_KEY);
    $loginForm.classList.remove(HIDDEN_CLASS);
    $greeting.classList.add(HIDDEN_CLASS);
    $logoutBtn.classList.add(HIDDEN_CLASS);
    $loginInput.value = '';
    $loginInput.focus();
  }
  $logoutBtn.addEventListener('click', onLogOut);
});
