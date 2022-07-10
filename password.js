const password = 'Sabrina2017'


if(password.length >= 10 && /^[A-Za-z0-9]*$/.test(password)) {
    console.log('Login successful')
} else {
    console.log('Login failed')
}

