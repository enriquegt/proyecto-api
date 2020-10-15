export default class Log {
    loggingUser(log) {
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json() ) 
        .then (json => searchUser(json))

        function searchUser(users){
            const search = users.find(user=>user.email === log.email)
            //console.log(search)
        if (search){
            if (log.name === search.name && log.email === search.email ) {
                localStorage.setItem('name', search.name)
                location.href ="./home.html";
            }else{
                alert('error user or password')
            }
        }else {
            alert('error user or password')
            }
        }       
    }
    resetForm() {
        document.getElementById('login-form').reset();
    }
}




 