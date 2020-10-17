export default class Log {
    loggingUser(log) {
      
        var url = 'https://matter-app.herokuapp.com/api/v1/auth/login';
        var data = {email: log.email,
                    password: log.password};
    
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.status)
        //get status and user to searchUser
        .then(response => searchUser(response, log));

        //if the user is corret
        function searchUser(status, log){
            if (status == '200'){
                localStorage.setItem('email', log.email)
                location.href ="./home.html";
                } else if (status == '401'){
                    alert('error user or password')
                }
            }
               
        }
    resetForm() {
        document.getElementById('login-form').reset();
    }
}



 
