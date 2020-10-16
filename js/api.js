export default class API {
    conexion() {
        fetch(`https://matter-app.herokuapp.com/api/v1/skills`)
        .then(response => response.json() ) 
        .then (json => printCards(json)) 
    }
    
}
//feedback-recived
function printCards(skills){
    const container = document.getElementById('feedback-recived');
    container.innerHTML = '';
    skills.forEach(skill => {
        const card = returnCardHTML(skill);
        container.innerHTML += card;
    });
}

function returnCardHTML(skill) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Id: ${skill.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${skill.name}</h6>           
                    </div>
                </div>`
    return card;
}
