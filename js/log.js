//usuarios
const users = [
    {
        name: 'enrique',
        password: '1234' 
    },
    {
        name: 'neto',
        password: '4321' 
    },

]


export default class Log {
    loggingUser(log) {
        const search = users.find(user => user.name === log.name)    
 //console.log(search)
        if (search){
            if (log.name === search.name && log.password === search.password ) {
                localStorage.setItem('name', search.name)
                location.href ="./home.html";
            }else{
                alert('error user or password')
            }
        }else {
            alert('error user or password')
        }
    }
    resetForm() {
        document.getElementById('login-form').reset();
    }
}




 