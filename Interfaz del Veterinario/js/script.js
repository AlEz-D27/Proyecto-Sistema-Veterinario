document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('#formulario');
    const listadoPacientes = document.querySelector('#listado-pacientes');
    const alertaDiv = document.getElementById('alerta');
    const modal = document.getElementById('modal-nuevo-tratamiento');
    const closeModalBtn = document.querySelector('.close-btn');
    const btnNuevoTratamiento = document.getElementById('btn-nuevo-tratamiento');
    const formNuevoTratamiento = document.getElementById('form-nuevo-tratamiento');
    const tratamientoSelect = document.getElementById('tratamiento');

    const modalInformarEstado = document.getElementById('modal-informar-estado');
    const closeModalInformarEstadoBtn = modalInformarEstado.querySelector('.close-btn');
    const formInformarEstado = document.getElementById('form-informar-estado');
    
    let pacientes = [];
    let editando = false;
    let pacienteActual = null;
    
    mostrarPacientes();

    btnNuevoTratamiento.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    formNuevoTratamiento.addEventListener('submit', function(event) {
        event.preventDefault();
        const nuevoTratamiento = document.getElementById('nuevo-tratamiento').value;

        if (nuevoTratamiento === '') {
            mostrarAlerta('El nombre del tratamiento no puede estar vacío', true);
            return;
        }

        const option = document.createElement('option');
        option.value = nuevoTratamiento;
        option.textContent = nuevoTratamiento;
        tratamientoSelect.appendChild(option);
        tratamientoSelect.value = nuevoTratamiento;
        modal.style.display = 'none';
        document.getElementById('nuevo-tratamiento').value = '';
    });

    // Mostrar el modal de informar estado
    function informarEstado(event) {
        event.preventDefault();
        const id = parseInt(event.target.dataset.id);
        citaActual = id;
        modalInformarEstado.style.display = 'block';
    }

    // Ocultar el modal de informar estado
    closeModalInformarEstadoBtn.addEventListener('click', function() {
        modalInformarEstado.style.display = 'none';
    });

    // Ocultar el modal de informar estado al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modalInformarEstado) {
            modalInformarEstado.style.display = 'none';
        }
    });

    // Guardar el estado de la cita
    formInformarEstado.addEventListener('submit', function(event) {
        event.preventDefault();
        const estado = document.querySelector('input[name="estado"]:checked').value;

        if (!estado) {
            alert('Debe seleccionar un estado para la cita');
            return;
        }

        // Guardar el estado de la cita en la lógica de tu aplicación (puedes ajustar esto según tus necesidades)
        const cita = pacientes.find(paciente => paciente.id === citaActual);
        if (cita) {
            cita.estado = estado;
            mostrarPacientes();
        }

        modalInformarEstado.style.display = 'none';
    });

    function mostrarPacientes() {
        listadoPacientes.innerHTML = '';

        if (pacientes.length === 0) {
            const noPacientes = document.createElement('div');
            noPacientes.innerHTML = `
                <h2 class="h2-no-paciente">No hay Pacientes</h2>
                <p class="p-no-paciente">Comienza agregando Pacientes y <span>aparecerán en este lugar</span></p>
            `;
            listadoPacientes.appendChild(noPacientes);
            return;
        }

        pacientes.forEach(paciente => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p><strong class="datos-strong">Nombre: </strong>${paciente.nombre}</p>
                <p><strong class="datos-strong">Propietario: </strong>${paciente.propietario}</p>
                <p><strong class="datos-strong">Email Contacto: </strong>${paciente.email}</p>
                <p><strong class="datos-strong">Fecha de Alta: </strong>${paciente.fecha}</p>
                <p><strong class="datos-strong">Síntomas: </strong>${paciente.sintomas}</p>
                <p><strong class="datos-strong">Tratamiento: </strong>${paciente.tratamiento}</p>
                <div class="botones">
                    <button class="edit-btn" onclick="editarPaciente(${paciente.id})">Editar</button>
                    <button class="delete-btn" onclick="eliminarPaciente(${paciente.id})">Eliminar</button>
                    <a href="#" class="btn-informar" data-id="${paciente.id}">Informar</a>
                </div>
            `;
            listadoPacientes.appendChild(div);

            const enlacesInformar = document.querySelectorAll('.btn-informar');
            enlacesInformar.forEach(enlace => enlace.addEventListener('click', informarEstado));
        });
    }

    function mostrarAlerta(msg, error = false) {
        alertaDiv.textContent = msg;
        alertaDiv.className = error ? 'alerta error' : 'alerta success';
        alertaDiv.style.display = 'block';
        setTimeout(() => {
            alertaDiv.style.display = 'none';
            alertaDiv.className = 'alerta';
        }, 3000);
    }

    window.editarPaciente = function(id) {
        editando = true;
        pacienteActual = id;
        const paciente = pacientes.find(paciente => paciente.id === id);
        
        document.querySelector('#nombre').value = paciente.nombre;
        document.querySelector('#propietario').value = paciente.propietario;
        document.querySelector('#email').value = paciente.email;
        document.querySelector('#fecha').value = paciente.fecha;
        document.querySelector('#sintomas').value = paciente.sintomas;
        document.querySelector('#tratamiento').value = paciente.tratamiento;
        
        document.querySelector('.submit-btn').value = 'Guardar Cambios';
    }

    function guardarPaciente(event) {
        event.preventDefault();
    
        const nombre = document.querySelector('#nombre').value;
        const propietarioSelect = document.querySelector('#propietario');
        const propietario = propietarioSelect.value;
        const email = document.querySelector('#email').value;
        const fecha = document.querySelector('#fecha').value;
        const sintomas = document.querySelector('#sintomas').value;
        const tratamiento = document.querySelector('#tratamiento').value;

        if(nombre === '' || propietario === '' || email === '' || fecha === '' || sintomas === '' || tratamiento === '') {
            mostrarAlerta('Todos los campos son obligatorios', true);
            return;
        }
    
        if (editando) {
            const index = pacientes.findIndex(paciente => paciente.id === pacienteActual);
            pacientes[index] = {
                id: pacienteActual,
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                tratamiento
            };
            
            editando = false;
            pacienteActual = null;
            
            document.querySelector('.submit-btn').value = 'Agregar Paciente';

            setTimeout(() => {
                mostrarAlerta('Paciente Editado Exitosamente');
            }, 1000);
        } else {
            const nuevoPaciente = {
                id: Date.now(),
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                tratamiento
            };
            
            pacientes.push(nuevoPaciente);
            
            setTimeout(() => {
                mostrarAlerta('Paciente Agregado Exitosamente');
            }, 1000);
        }
        
        document.querySelector('#formulario').reset();
        mostrarPacientes();
    }
    
    formulario.addEventListener('submit', guardarPaciente);

    window.eliminarPaciente = function(id) {
        const confirmar = confirm('¿Estás seguro que deseas eliminar los datos de esta cita?')

        if (confirmar) {
            pacientes = pacientes.filter(paciente => paciente.id !== id);
            mostrarPacientes();
        }
    };
});

const propietarioSelect = document.querySelector('#propietario');
propietarioSelect.addEventListener('change', function() {
    const email = propietarioSelect.options[propietarioSelect.selectedIndex].dataset.email;
    document.querySelector('#email').value = email;
});

function cerrarSesion() {
    const confirmar = confirm('¿Estás seguro que cerrar sesión?')

    if (confirmar) {
        window.location.href = '../Interfaz de Inicio/index.html';
    }
}
