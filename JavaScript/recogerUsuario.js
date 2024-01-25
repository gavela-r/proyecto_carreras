let nombreUsuario = document.getElementById('usuario');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let localidad = document.getElementById('localidad');

let usuarioNuevo = {
    'nombre':nombreUsuario.value.trim(),
    'correo': correo.value.trim(),
    'contraseña':contraseña.value.trim(),
    'localidad': localidad.value.trim(),
}

let option = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'   
    },
    body: JSON.stringify(usuarioNuevo)
};

fetch('http://localhost:3000/PHP/usuarios.php', option)
.then(res => {
    if(res.status == 200){
        return res.json;
    }

})
.then(data => {
    console.log(data);
})

.catch(error =>{
    console.log('Error', error);
})