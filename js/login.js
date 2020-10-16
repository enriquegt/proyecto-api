import User from './user.js'
import Log from './log.js'

//console.log(login);
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    // const pass = document.getElementById('pwd').value;
    const log = new User(user, email);
    //login 
    const logUser = new Log();
    logUser.loggingUser(log)
    logUser.resetForm();
})

