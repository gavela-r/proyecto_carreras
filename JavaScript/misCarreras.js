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


    
    // let nombreCarrera = document.getElementById('nombre_carrera');
    // let fecha = document.getElementById('fecha');
    // let distancia = document.getElementById('distancia');
    // let numeroParticipantes = document.getElementById('numero');

    let usuarioNuevo = {
        nombre:'nombreCarrera',
        fecha: 'fecha',
        distancia: 'distancia',
        numero: 'numeroParticipantes'
        
    }

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(usuarioNuevo=1)
    };

    

    fetch('http://localhost:3000/PHP/mostrarCarreras.php', option)
    .then(res => {
        if (!res.ok) {
            throw new Error('Hubo un problema con la solicitud.');
        }
        return res.json();
    })
    .then(data => {
        let contenedorCarreras = document.getElementById('carrerasContainer');
        let carrerasHTML = '';
        console.log(contenedorCarreras);
        data.forEach(carreras => {
            
            carrerasHTML +=`<div class="carrera1">
                    <img src="${carreras.fotos}" alt="aqui hay una foto" class="foto1">
                    <p class="nombre">Nombre: ${carreras.nombre_carrera}</p>
                    <p class="fecha"><i class="fa-solid fa-calendar" id="calendario"></i>Fecha de ralizacion: ${carreras.fecha}</p>
                    <p class="km"><i class="fa-solid fa-person-running" id="run"></i>KM: ${carreras.distancia}</p>
                </div>`
            
        });
        contenedorCarreras.innerHTML += carrerasHTML;

    })
    .catch(error => {
        console.error('Error:', error);
    });

