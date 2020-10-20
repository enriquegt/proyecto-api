import User from './user.js'
import AU from './au.js'

//Objeto user
document.getElementById('new-user-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let password = document.getElementById('pass').value;
    const email = localStorage.getItem('email');
    if (name && password){
        const user = new User(email, password, name);
        edit(user)
    } else if (name){
        let password = 'false';
        const user = new User(email, password, name);
        edit(user)
    } else {
        let name = 'false'
        const user = new User(email, password, name);
        edit(user)
    }

    function edit(user){
        const edit = new AU();
        edit.editUser(user);
        edit.resetForm();
    }
})
