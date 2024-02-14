let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombreCarrera = document.getElementById('nombre_carrera');
    let fecha = document.getElementById('fecha');
    let distancia = document.getElementById('distancia');
    let localidad = document.getElementById('localidad');
    let numeroParticipantes = document.getElementById('numero');
    let foto = document.getElementById('foto')

    let carreraModificada = {
        'nombre_carrera': nombreCarrera.value.trim(),
        'fecha': fecha.value.trim(),
        'distancia': distancia.value.trim(),
        'localidad': localidad.value.trim(),
        'numero': numeroParticipantes.value.trim(),
        'foto': foto.value.trim(),
        

    };

    

    let option = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carreraModificada)
    };

    fetch('http://localhost:3000/PHP/editarCarrera.php', option)
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
                window.location.href = './principal.html';
            }

        })


        .catch(error => {
            console.log('Error', error);
        })
});

