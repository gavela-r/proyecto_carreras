let correoInput = document.getElementById('correo');
let correoValue = correoInput.value;
let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



enviar.addEventListener('click', validarCorreo, valiContraseña);




function validarCorreo() {
   

    if (!correoRegex.test(correoValue)) {
        correoInput.style.borderColor = 'red';
    } else {
        correoInput.style.borderColor = '';  // Restablecer el color del borde si es válido
        
    }
}

// function validarContraseña(){
    
// }