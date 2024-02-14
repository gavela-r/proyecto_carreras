
    let boton = document.getElementById('boton');

    boton.addEventListener('click', function(){
        let filtro = document.getElementById('filtro').value.toLowerCase();
        console.log(filtro);
        let busqueda = document.getElementById('buscar').value.toLowerCase();
        console.log(busqueda);

        // Construir el objeto con los datos de búsqueda
        let data = {
            filtro: filtro,
            busqueda: busqueda
        };
        console.log(data);
        // Configurar la opción de la solicitud fetch
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        console.log(options);

        // Realizar la solicitud fetch al servidor
        fetch('http://localhost:3000/PHP/filtrarCarreras.php', options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Hubo un problema con la solicitud.');
                }
                return res.json();
            })
            .then(data => {
                // Limpiar el contenedor de carreras
                let contenedorCarreras = document.getElementById('carrerasContainer');
                contenedorCarreras.innerHTML = '';

                // Generar el HTML de las carreras filtradas
                let carrerasHTML = '';
                data.forEach(carrera => {
                    carrerasHTML += `
                        <div class="carrera1">
                            <img src="${carrera.fotos}" alt="aqui hay una foto" class="foto1">
                            <p class="nombre">Nombre: ${carrera.nombre_carrera}</p>
                            <p class="fecha"><i class="fa-solid fa-calendar" id="calendario"></i>Fecha de realización: ${carrera.fecha}</p>
                            <p class="km"><i class="fa-solid fa-person-running" id="run"></i>KM: ${carrera.distancia}</p>
                        </div>
                    `;
                });
                
                // Agregar el HTML de las carreras al contenedor
                contenedorCarreras.innerHTML = carrerasHTML;
                console.log(contenedorCarreras);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

