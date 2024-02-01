let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    
    let correo = document.getElementById('email');
    let contraseña = document.getElementById('contrasena');


    let usuarioNuevo = {
 
        'email': correo.value.trim(),
        'contrasena':contraseña.value.trim(),

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

