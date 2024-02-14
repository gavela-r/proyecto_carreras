// let formulario = document.querySelector('form');

// formulario.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     let nombreUsuario = document.getElementById('usuario');
//     let correo = document.getElementById('correo')
//     let contraseña = document.getElementById('contraseña');
//     let peso = document.getElementById('peso');
//     let altura = document.getElementById('altura');

//     let token = localStorage.getItem('elToken');
//     console.log(token);
    
//     let usuarioNuevo = {
//         'nombre': nombreUsuario.value.trim(),
//         'correo': correo.value.trim(),
//         'contraseña': contraseña.value.trim(),
//         'peso':peso.value.trim(),
//         'altura':altura.value.trim(),
        
//     };

  
    

//     let option = {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(usuarioNuevo)
//     };

//     fetch('http://localhost:3000/PHP/editarPerfil.php', option)
//         .then(res => {
//             if (res.status == 200) {
//                 return res.json();
//             }
//             console.log(res);
//         })
//         .then(data => {
//             console.log(data);
//             if (data.error) {
//                 console.error('Error:', data.error);
//             } else {
//                 console.log(data);
//             }

//         })


//         .catch(error => {
//             console.log('Error', error);
//         })
// });
let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let nombreUsuario = document.getElementById('usuario');
    let correo = document.getElementById('correo');
    let contraseña = document.getElementById('contraseña');
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    let token = localStorage.getItem('elToken');
    console.log(token);
    
    let usuarioNuevo = {
        'nombre': nombreUsuario.value.trim(),
        'correo': localStorage.getItem('correo'),
        'contraseña': contraseña.value.trim(),
        'peso': peso.value.trim(),
        'altura': altura.value.trim(),
    };

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Incluir el token JWT en el encabezado Authorization
        },
        body: JSON.stringify(usuarioNuevo)
    };
    
    fetch('http://localhost:3000/PHP/editarPerfil.php', option)
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error('Error al actualizar el perfil');
            }
        })
        // .then(data => {

        //     console.log(data);
        //     alert('Perfil actualizado correctamente');
        //     // Aquí puedes redirigir a otra página o realizar cualquier otra acción después de actualizar el perfil
        // })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al actualizar el perfil');
        });
});

