let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let nombreUsuario = document.getElementById('usuario');
    let correo = document.getElementById('correo');
    let contraseña = document.getElementById('contraseña');
    let localidad = document.getElementById('localidad');
    let tipoUsuario = document.querySelector('input[name="organizador"]:checked').value;

      

    let usuarioNuevo = {
        'nombre':nombreUsuario.value.trim(),
        'correo': correo.value.trim(),
        'contraseña':contraseña.value.trim(),
        'localidad': localidad.value.trim(),

    }

    if (tipoUsuario === 'organizador'){
        let telefono = document.getElementById('telefono');
        let club = docuemnt.getElementById('club');
        usuarioNuevo.telefono = telefono.value.trim();
        usuarioNuevo.club = club.value.trim();
    }

    let endPoint = tipoUsuario === 'organizador' ?  'http://localhost:3000/PHP/organizador.php' : 'http://localhost:3000/PHP/usuarios.php';

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(usuarioNuevo)
    };

    

    fetch(endPoint, option)
    .then(res => {
        if(res.status == 200){
             return res.json();

        }
        console.log(res);
    })
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
        } else {
            console.log(data);
        }
        
    })
    
   
    

    .catch(error =>{
        console.log('Error', error);
    })
})

