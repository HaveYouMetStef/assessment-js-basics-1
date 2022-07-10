const password = 'Sabrina2017'
const forbiddenPasswords = ['password', 'letmein']

if(password.length >= 10 && /^[A-Za-z0-9 -]*$/.test(password)) {
    console.log('Login successful')
} else {
    console.log('Login failed')
}

// Additional checks
// if(!/[A-Z]/.test(password) || password.length > 20 || /[ -]/.test(password)){
//     console.log('Your password is either too long, does not contain an upper case letter, or there is a space in your password');
// } else {
//     console.log('Login successful');
// }

// forbidden passwords challenge
// for(let i = 0; i < forbiddenPasswords.length; i++){
//     if(forbiddenPasswords[i] === password) {
//         console.log('You cannot use that password, please change');
//     } else if(password !== forbiddenPasswords[i]){
//         console.log('login successful');
//     }
// }

