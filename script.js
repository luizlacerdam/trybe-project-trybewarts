// tive que declarar funçoes com nome curto
// e constantes desnecessarias
// devido ao limite de 100 char do linter

function getById(element) {
  return document.getElementById(element);
}

function qS(element) {
  return document.querySelector(element);
}

const INPUT_EMAIL = getById('email');
const INPUT_PASSWORD = getById('password');
const BUTTON_LOGIN = getById('btn-login');
const BUTTON_SUBMIT = getById('submit-btn');
const SUBMIT_CHECKBOX = getById('agreement');
const COMMENT = getById('textarea');
const COUNTER = getById('counter');
const EVAL_FORM = getById('evaluation-form');
const FORM_DATA = getById('form-data');
const NOME = getById('input-name');
const SOBRENOME = getById('input-lastname');
const ELEMENTS = [
  'user-name',
  'user-email',
  'user-house',
  'user-family',
  'user-subjects',
  'user-rating',
  'user-comments',
];
const FORM_ELEMENTS = {};

function addElement(element) {
  FORM_ELEMENTS[element] = getById(element);
}

ELEMENTS.forEach(addElement);

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

COMMENT.addEventListener('keyup', () => {
  COUNTER.innerText = 500 - COMMENT.value.length;
});

EVAL_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  FORM_ELEMENTS['user-name'].innerText = `Nome: ${NOME.value} ${SOBRENOME.value}`;
  FORM_ELEMENTS['user-email'].innerText = `Email: ${getById('input-email').value}`;
  FORM_ELEMENTS['user-house'].innerText = `Casa: ${getById('house').value}`;
  const FAMILIA = qS('input[name="family"]:checked');
  FORM_ELEMENTS['user-family'].innerText = `Família: ${FAMILIA.value}`;
  const SUBJECTS = Array.from(document.getElementsByClassName('subject'));
  let SUBJECTS_LIST = 'Matérias: ';
  SUBJECTS.forEach((S) => {
    if (S.checked) {
      SUBJECTS_LIST = `${SUBJECTS_LIST + S.value}, `;
    }
  });
  FORM_ELEMENTS['user-subjects'].innerText = SUBJECTS_LIST.slice(0, SUBJECTS_LIST.length - 2);
  FORM_ELEMENTS['user-rating'].innerText = `Avaliação: ${qS('input[name="rate"]:checked').value}`;
  FORM_ELEMENTS['user-comments'].innerText = `Observações: ${getById('textarea').value}`;
  EVAL_FORM.style.display = 'none';
  FORM_DATA.style.display = 'flex';
});
