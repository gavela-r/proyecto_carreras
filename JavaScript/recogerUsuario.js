let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombreUsuario = document.getElementById('usuario');
    let correo = document.getElementById('correo');
    let contraseña = document.getElementById('contraseña');
    let localidad = document.getElementById('localidad');
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let telefono = document.getElementById('telefono');
    let club = document.getElementById('club');
    let organizador = document.getElementById('organizador').checked ? 'SI' : 'NO';

    let usuarioNuevo = {
        'nombre': nombreUsuario.value.trim(),
        'correo': correo.value.trim(),
        'contraseña': contraseña.value.trim(),
        'localidad': localidad.value.trim(),
        'peso': peso.value.trim(),
        'altura': altura.value.trim(),
        'organizador': organizador

    };

    // Si es organizador, añade los campos adicionales
    if (organizador === 'SI') {
        usuarioNuevo.telefono = telefono.value.trim();
        usuarioNuevo.club = club.value.trim();
    }

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioNuevo)
    };

    fetch('http://localhost:3000/PHP/usuarios.php', option)
        .then(res => {
            if (res.status == 200) {
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


        .catch(error => {
            console.log('Error', error);
        })
});

