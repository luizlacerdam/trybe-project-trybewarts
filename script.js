const INPUT_EMAIL = document.getElementById('email');
const INPUT_PASSWORD = document.getElementById('password');
const BUTTON_LOGIN = document.getElementById('btn-login');
const BUTTON_SUBMIT = document.getElementById('submit-btn');
const SUBMIT_CHECKBOX = document.getElementById('agreement');

function login() {
  BUTTON_LOGIN.addEventListener('click', () => {
    if (INPUT_EMAIL.value === 'tryber@teste.com' && INPUT_PASSWORD.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
}
login();

SUBMIT_CHECKBOX.addEventListener('change', () => {
  if (SUBMIT_CHECKBOX.checked) {
    BUTTON_SUBMIT.disabled = false;
  } else {
    BUTTON_SUBMIT.disabled = true;
  }
});
