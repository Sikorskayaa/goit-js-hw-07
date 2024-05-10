const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const formTarget = evt.target;
  const email = formTarget.elements.email.value;
  const password = formTarget.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: `${email}`,
      password: `${password}`,
    };
    console.log(formData);
  }
  formTarget.reset();
}
