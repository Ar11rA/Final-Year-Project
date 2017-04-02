function validateLogin() {
  let email = document.getElementById('email').value
  let pass = document.getElementById('password').value
  let data = {
    email: email,
    password: pass
  }
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((result) => {
    return result.text()
  }).then((data) => {
    if (data === 'Done') {
      window.location.href = '/home'
    }
  })
}
