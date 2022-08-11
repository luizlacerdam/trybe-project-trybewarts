const INPUT_EMAIL = document.getElementById('email');
const INPUT_PASSWORD = document.getElementById('password');
const BUTTON_LOGIN = document.getElementById('btn-login');

function login() {
  BUTTON_LOGIN.addEventListener('click', function () {
    if (INPUT_EMAIL.value === 'tryber@teste.com' && INPUT_PASSWORD.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
}
login();
