let correoInput = document.getElementById('correo');
let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let mensaje = document.getElementById('mensaje');
enviar.addEventListener('click', validarCorreo);

function validarCorreo() {
    let correoValue = correoInput.value;

    if (!correoRegex.test(correoValue)) {
        correoInput.style.borderColor = 'red';
    } else {
        correoInput.style.borderColor = '';  // Restablecer el color del borde si es válido
    }
}

let usuario = document.getElementById('usuario');
let usuarioRegex = /^(?![_-])[a-zA-Z0-9_-]{4,20}(?![_-])$/;

enviar.addEventListener('click', validarUsuario);

function validarUsuario() {
    let usuarioValue = usuario.value;

    if (!usuarioRegex.test(usuarioValue)) {
        usuario.style.borderColor = 'red';
    } else {
        usuario.style.borderColor = '';
    }
}

let contraseñaInput = document.getElementById('contraseña');

contraseña.addEventListener('input', ()=>{
    let contraseña = contraseñaInput.value;
    let validacion = 0;

    if(contraseña.match(/[a-z]+/)){
        validacion++;
    }else{
        contraseñaInput.style.borderColor = 'red';
    }

    if(contraseña.match(/[A-Z]+/)){
        validacion++;
    }else{
        contraseñaInput.style.borderColor = 'red';
    }

    if(contraseña.match(/[0-9]+/)){
        validacion++;
    }else{
        contraseñaInput.style.borderColor = 'red';
    }

    if(contraseña.match(/[$@#%&/*]+/)){
        validacion++;
    }else{
        contraseñaInput.style.borderColor = 'red';
    }

    if(contraseña.length >= 8){
        validacion++;
    }else{
        contraseñaInput.style.borderColor = 'red';
    }

    switch (validacion) {
        case 2:
            mensaje.textContent = 'Débil';
            mensaje.style.color = '#ff6c00';
            break;
        case 3:
            mensaje.textContent = 'Media';
            mensaje.style.color = '#ffe000';
            break;
        case 4:
            mensaje.textContent = 'Fuerte';
            mensaje.style.color = '#20c500';
            break;
        case 5:
            mensaje.textContent = 'Muy Fuerte';
            mensaje.style.color = '#157e00';
            break;
        default:
            mensaje.textContent = 'Muy débil';
            mensaje.style.color = '#ff0000';
    }
})




