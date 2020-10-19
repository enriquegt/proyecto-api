export default class Perfil {
    addPerfil(user) {
        const container = document.getElementById('user-perfil');
        container.innerHTML += `
        <img class="card-img-top" src="img/1.png" alt="profile photo">
          <div class="card-body">
            <h3 class="card-title">${user}</h3>
            <p><a href="./edit-user.html" class="btn btn-primary">Edit User</a></p>
        `;
    }
    editUser(){
        const editContainer = document.getElementById('user-perfil');
        editContainer.innerHTML += `
        <form onsubmit="event.preventDefault(), submit()" id="edit-user-form">
              <div class="form-edit">
                <label for="user">User</label>
                <input type="text" class="form-control" id="user" placeholder="User">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary">Confirm</button>
            </form>
            `
    }
}