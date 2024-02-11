let formulario = document.querySelector('form');
let correo = document.getElementById('email');





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

   
    fetch('http://222.222.222.234/PHP/iniciarSesion.php', option)
    .then(res => {
        if(res.status == 200){
             return res.json();

        }else{
            correo.style.border = "2px solid red";
            contraseña.style.border = "2px solid red";
           
        }
        console.log(correo);
    })
    .then(data => {
        
        if (data.token){
            guardarToken(data.token);
            console.log(data);
            window.location.href = '../principal.html';
        }else{
            alert('El correo o la contraseña son incorrectos');
            console.log('Error', data.error);
        }
        
        
        
    })

    .catch(error =>{
        console.log('Error', error);
    })
})

