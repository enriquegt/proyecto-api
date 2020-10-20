export default class User {
    constructor(email, password, name){
        this.name = name
        this.email = email
        this.password = password
    }
    searchUser(log){
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json() ) 
        .then (json => searchUser(json))

        //search if the email is not used in the API
        function searchUser(users){
        const search = users.find(user=>user.email === log.email)
        name = search.name;
        return name
        }
        return name
    }
}
