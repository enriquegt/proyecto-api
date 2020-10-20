export default class AU {
    addUser(user) {
        const container = document.getElementById('users-container');
        container.innerHTML += `<div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                        ${user.name}
                                        </div>
                                    </div>
                                </div>`;
    }
    resetForm() {
        document.getElementById('new-user-form').reset();
    }
    addApi(user){
        var url = 'https://matter-app.herokuapp.com/api/v1/users';
        var data = {name: user.name,
                    email: user.email,
                    password: user.password
                    };
    
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => alert('Error try again, (use another email)'))
        .then(response => alert('User register, please loggion session'));
        }
}