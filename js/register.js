import User from './user.js'
import AU from './au.js'

//registro de usuario
document.getElementById('new-user-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('pass').value;
    const user = new User(name, password);
    console.log(user);
    
    //agregar nuevo usuario
    const start = new AU();
    start.addUser(user)
    start.resetForm();

})
