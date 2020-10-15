export default class API {
    conexion() {
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json() ) 
        .then (json => printCards(json)) 
    }
    
}
//feedback-recived
function printCards(emails){
    const container = document.getElementById('feedback-recived');
    container.innerHTML = '';
    emails.forEach(email => {
        const card = returnCardHTML(email);
        container.innerHTML += card;
    });
}

function returnCardHTML(q) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Id - user: ${q.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.email}</h6>           
                    </div>
                </div>`
    return card;
}
