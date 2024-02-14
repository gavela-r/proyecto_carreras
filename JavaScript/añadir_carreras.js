// Obtener datos desde ccaa.json
fetch("../provincias.json")
.then((response) => response.json())
.then((data) => {
  let datalist = document.getElementById("localidades");

  data.forEach((provincia) => {
    let option = document.createElement("option");
    option.value = provincia.label;
    datalist.appendChild(option);
  });
})
.catch((error) =>
  console.error("Error al cargar las provincias:", error)
);

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




let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let nombreCarrera = document.getElementById('nombre_carrera');
    let fecha = document.getElementById('fecha');
    let distancia = document.getElementById('distancia');
    let localidad = document.getElementById('localidad');
    let numeroParticipantes = document.getElementById('numero');

    let usuarioNuevo = {
        'nombre':nombreCarrera.value.trim(),
        'fecha': fecha.value.trim(),
        'distancia': distancia.value.trim(),
        'localidad': localidad.value.trim(),
        'numero': numeroParticipantes.value.trim()
    }

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(usuarioNuevo)
    };

    

    fetch('http://localhost:3000/PHP/anadirCarrera.php', option)
    .then(res => {
        if (!res.ok) {
            throw new Error('Hubo un problema con la solicitud.');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        if (data.error) {
            throw new Error(data.error);
        } else {
            // Redirigir a la página misCarreras.html
            window.location.href = "misCarreras.html";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

