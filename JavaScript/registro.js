let correoInput = document.getElementById('correo');
let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let mensaje = document.getElementById('mensaje');
enviar.addEventListener('click', function(){
      
    // Llamar a las funciones de validación
    validarCorreo();
    validarUsuario();
    repetirContraseña();

    // Verificar si todos los campos son válidos antes de permitir el registro
    // Verificar si todos los campos son válidos antes de permitir el registro
      if (
        correoInput.style.borderColor !== 'red' &&
        usuario.style.borderColor !== 'red' &&
        repetirInput.style.borderColor !== 'red'
    ) {
        // Verificar si la contraseña está presente y es válida
        if (contraseñaInput.style.borderColor !== 'red' && mensaje.textContent !== 'Muy débil' || mensaje.textContent !== 'Débil' || mensaje.textContent !== 'Media') {
            // window.location.href = '../inicioSesion.html';  
            
        } else {
            alert('Por favor, corrige los errores en el formulario');
        }
    } else {
        alert('Por favor, corrige los errores en el formulario');
    }
});


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
    }

    if(contraseña.match(/[A-Z]+/)){
        validacion++;
    }

    if(contraseña.match(/[0-9]+/)){
        validacion++;
    }

    if(contraseña.match(/[$@#%&/*]+/)){
        validacion++;
    }

    if(contraseña.length >= 8){
        validacion++;
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

    if(validacion <= 3){
        contraseñaInput.style.borderColor = 'red';
    }else{
        contraseñaInput.style.borderColor = '#80ff00';
    }

    
})

let repetirInput = document.getElementById('repetir');

function repetirContraseña(){
    let repetir = repetirInput.value;

    if(contraseñaInput.value == repetir){
        repetirInput.style.borderColor = '#80ff00';
    }else{
        repetirInput.style.borderColor = 'red';
    }
}
let telefono = document.getElementById('telefono');
let empresa  = document.getElementById('empresa_label');
let phone = document.getElementById('telefono_label');
let club = document.getElementById('club');

let si = document.getElementById('organizador')
let no = document.getElementById('organizador2');

si.addEventListener('change', function(){
    if(si.checked){
        phone.style.display = 'block';
        club.style.display = 'block';
        telefono.style.display ='block';
        empresa.style.display = 'block';
    }else{
        phone.style.display = 'none';
        club.style.display = 'none'
        telefono.style.display = 'none';
        empresa.style.display = 'none';
    }
});

no.addEventListener('change', function(){
    if(no.checked){
        phone.style.display = 'none';
        club.style.display = 'none';
        telefono.style.display = 'none';
        empresa.style.display = 'none';
    }else{
        phone.style.display = 'block';
        phone.style.display = 'block';
        telefono.style.display = 'block';
        empresa.style.display = 'block';
    }
})





fetch("../provincias.json")
.then((response) => response.json())
.then((data) => {
  let datalist = document.getElementById("localidades");

  data.forEach((provincia) => {
    let option = document.createElement("option");
    option.value = provincia.label;
    datalist.appendChild(option);
  });
})
.catch((error) =>
  console.error("Error al cargar las provincias:", error)
);

