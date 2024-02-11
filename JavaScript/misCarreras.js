document.addEventListener("DOMContentLoaded", function() {
    let perfilIcono = document.getElementById("perfil");
    let user = document.getElementById('user');
    let icono = document.getElementById('aside');
    
    perfilIcono.addEventListener("click", function() {
        document.getElementById("izq").style.display = "flex";
    });

    icono.addEventListener("click", function(){
        document.getElementById("izq").style.display = "none";
        
    })

    

});
