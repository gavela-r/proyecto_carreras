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
  function guardarToken(token){
    localStorage.setItem('elToken', token)
  }

   
    fetch('http://localhost:3000/PHP/iniciarSesion.php', option)
    .then(res => {
        if(res.status == 200){
             return res.json();

        }
        console.log(res);
    })
    .then(data => {
        
        if (data.token){
            guardarToken(data.token);
            console.log(data);
            window.location.href = '../principal.html';
        }else{
            console.log('Error', data.error);
        }
        
        
        
    })

    .catch(error =>{
        console.log('Error', error);
    })
})

