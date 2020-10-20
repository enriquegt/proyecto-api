import StartCard from './card.js'
import Perfil from './perfil.js'
import API from './api.js'
import User from './user.js'

const user = localStorage.getItem('email')
const log = new User(user);
name = log.searchUser(log)

if (!user){
    window.location.href = "./index.html"
}

//Agrega nombre de usuario en Nav
document.getElementById('user').innerHTML = user;

const feedbackRecived = new API();
feedbackRecived.conexion()

if (!name==null){
//Card con informacion del usurio
const initCard = new StartCard();
initCard.addCard(name)

//card perfil
const perfilCard = new Perfil();
perfilCard.addPerfil(name)
}else {
    //Card con informacion del usurio
const initCard = new StartCard();
initCard.addCard(user)

//card perfil
const perfilCard = new Perfil();
perfilCard.addPerfil(user)

}
