/* eslint-disable no-restricted-globals, prefer-destructuring */
const API_URL = 'https://script.google.com/macros/s/AKfycby7VX0c9yiQnBQG1e2K-O6vCsxehpcLMQTbS1KDMyhWTAWBGXo/exec';
const inputName = document.querySelector('input[type=text]');
const inputPhone = document.querySelector('input[type=number]');
const inputEmail = document.querySelector('input[type=email]');
const textareaMessage = document.querySelector('textarea');

function sendMessageAPI(name, phone, email, message, cb) {
  $.ajax({
    url: API_URL,
    data: {
      name: name,
      phone: phone,
      email: email,
      message: message,
    },
    success: function(result) {
      cb(result);
    }
  });
}

function clearInput() {
  inputName.value = '';
  inputPhone.value = '';
  inputEmail.value = '';
  textareaMessage.value = '';
}


const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputName.value;
  const phone = inputPhone.value;
  const email = inputEmail.value;
  const message = textareaMessage.value;

  sendMessageAPI(name, phone, email, message, (result) => {
    if (result === '成功') {
      clearInput();
      alert('已收到您的諮詢，我們會盡快回覆！')
    }
  })
});

