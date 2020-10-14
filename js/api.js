export default class API {
    conexion() {
        fetch(`https://opentdb.com/api.php?amount=5`)
        .then(response => response.json())
        .then(data => printCards(data.results))
    }
    
}
//feedback-recived
function printCards(questions){
    const container = document.getElementById('feedback-recived');
    container.innerHTML = '';
    questions.forEach(question => {
        const card = returnCardHTML(question);
        container.innerHTML += card;
    });
}

function returnCardHTML(q) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>           
                    </div>
                </div>`
    return card;
}
