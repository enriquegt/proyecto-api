import StartCard from './card.js'
import Perfil from './perfil.js'
import API from './api.js'


const user = localStorage.getItem('email')

if (!user){
    window.location.href = "./index.html"
}

//Agrega nombre de usuario en Nav
document.getElementById('user').innerHTML = user;

//Card con informacion del usurio
const initCard = new StartCard();
initCard.addCard(user)

//card perfil
const perfilCard = new Perfil();
perfilCard.addPerfil(user)

const feedbackRecived = new API();
feedbackRecived.conexion()
