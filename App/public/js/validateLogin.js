function validateLogin() {
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    if (email == '') {
        document.getElementById('failure').innerHTML = 'Email empty. Try again'
        return
    }
    if (pass == '') {
        document.getElementById('failure').innerHTML = 'Password empty. Try again'
        return
    }
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
        } else {
            document.getElementById('failure').innerHTML = 'Login Failed. Try again'
        }
    })
}

function registerUser() {
    let email = document.getElementById('email').value
    if (email == '') {
        document.getElementById('failure').innerHTML = 'Email empty. Try again'
        return
    }
    let pass = document.getElementById('password').value
    if (pass == '') {
        document.getElementById('failure').innerHTML = 'Password empty. Try again'
        return
    }
    let bday = document.getElementById('birthday').value
    if (bday == '') {
        document.getElementById('failure').innerHTML = 'Birthday empty. Try again'
        return
    }
    let address = document.getElementById('address').value
    if (address == '') {
        document.getElementById('failure').innerHTML = 'Address empty. Try again'
        return
    }
    let data = {
        name: email,
        password: pass,
        birthday: bday,
        address: address
    }
    fetch('/insertUser', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((obj) => {
            if (obj[0].id) {
                window.location.href = '/'
            } else
                document.getElementById('failure').innerHTML = 'Registration Failed. Try again'
        })
}