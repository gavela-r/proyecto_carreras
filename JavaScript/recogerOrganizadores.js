// let registro = document.querySelector('form');

// registro.addEventListener('submit', (event)=>{
//     event.preventDefault();
    
//     let nombreUsuario = document.getElementById('usuario');
//     let correo = document.getElementById('correo');
//     let contraseña = document.getElementById('contraseña');
//     let localidad = document.getElementById('localidad');
//     let telefono = document.getElementById('telefono');
//     let club = document.getElementById('club');


//     let usuarioNuevo = {
//         'nombre':nombreUsuario.value.trim(),
//         'correo': correo.value.trim(),
//         'contraseña':contraseña.value.trim(),
//         'localidad': localidad.value.trim(),
//         'telefono': telefono.value.trim(),
//         'club': club.value.trim()
//     }

//     let option = {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             'Content-Type': 'application/json'   
//         },
//         body: JSON.stringify(usuarioNuevo)
//     };

    

//     fetch('http://localhost:3000/PHP/organizador.php', option)
//     .then(res => {
//         if(res.status == 200){
//              return res.json();

//         }
//         console.log(res);
//     })
//     .then(data => {
//         if (data.error) {
//             console.error('Error:', data.error);
//         } else {
//             console.log(data);
//         }
        
//     })
    
   
    

//     .catch(error =>{
//         console.log('Error', error);
//     })
// })

