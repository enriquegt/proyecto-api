export default class StartCard {
    addCard(user) {
        const container = document.getElementById('initCard');
        container.innerHTML += `
        <h3 class="card-title">Hello ${user}</h3>
            <p>Lorem ipsum dolor sit amet,</p>
        `;
    }
}