// ('use strict');
{
  console.log('2-form.js - loaded');

  let form = document.querySelector('.feedback-form');
  form.addEventListener('submit', handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    //   console.log(form.elements);
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === '' || message === '') {
      return alert('Please fill in all the fields!');
    }

    const out = {
      email: email,
      message: message,
    };
    console.log(out);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }

  form.addEventListener('input', saveFormData);
  function saveFormData() {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function populateFormFields() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
      form.email.value = savedData.email;
      form.message.value = savedData.message;
    }
  }
  populateFormFields();
}
