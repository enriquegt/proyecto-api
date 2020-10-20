import User from './user.js'
import AU from './au.js'

//register user
document.getElementById('new-user-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const user = new User(email, password, name);
    
    //add new user
    const start = new AU();
    start.addUser(user);
    start.resetForm();
})

