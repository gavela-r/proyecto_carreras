let formulario = document.querySelector('form');
let correo = document.getElementById('email');





formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let correo = document.getElementById('email');
    let contraseña = document.getElementById('contrasena');
    
    let usuarioNuevo = {
        'email': correo.value.trim(),
        'contrasena':contraseña.value.trim(),
    }

    // Función para guardar el token en el almacenamiento local
function guardarToken(token){
    localStorage.setItem('elToken', token);
    localStorage.setItem('correo', correo.value.trim());
}


    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(usuarioNuevo)
    };

    fetch('http://localhost:3000/PHP/iniciarSesion.php', option)
    .then(res => {
        if(res.status == 200){
            return res.json();
        } else {
            correo.style.border = "2px solid red";
            contraseña.style.border = "2px solid red";
            throw new Error('Error en la autenticación');
        }
    })
    .then(data => {
        console.log(data);
        guardarToken(data.jwt); // Guardar el token solo si la autenticación es exitosa
        window.location.href = '../principal.html'; // Redirigir al usuario después de guardar el token
    })
    .catch(error =>{
        console.log('Error', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    })
})

