export default class AU {
    addUser(user) {
        const container = document.getElementById('users-container');
        container.innerHTML += `<div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                        ${user.name}
                                        </div>
                                    </div>
                                </div>`;
    }
    resetForm() {
        document.getElementById('new-user-form').reset();
    }
}