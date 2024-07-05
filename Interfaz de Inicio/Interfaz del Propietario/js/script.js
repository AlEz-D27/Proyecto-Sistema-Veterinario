function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            attachModalEvents();
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

function attachModalEvents() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(button => {
        button.onclick = function() {
            modals.forEach(modal => modal.style.display = "none");
        }
    });

    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };

    document.getElementById('paymentForm').onsubmit = function(event) {
        event.preventDefault();
        realizarPago();
    };
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function realizarPago() {
    const fecha = new Date().toLocaleDateString();
    const tratamiento = "Inyecciones para alergia";
    const monto = document.getElementById('monto').value;

    // Simulación de pago exitoso
    const nuevaFila = `
        <tr>
            <td>${fecha}</td>
            <td>${tratamiento}</td>
            <td>${monto} Gs</td>
            <td class="pagado">Pagado</td>
        </tr>
    `;

    const pagoActualDiv = `
        <h2>Pago de Tratamientos</h2>
        <p>Actualmente no hay tratamientos por pagar</p>
    `;

    document.querySelector('.pago-actual').innerHTML = pagoActualDiv;
    document.querySelector('#historialFacturas tbody').innerHTML += nuevaFila;
    document.getElementById('pago').style.display = "none";
}

// Cargar por defecto la sección de seguimiento
window.onload = function() {
    loadContent('seguimiento.html');
}

function cerrarSesion() {
    const confirmar = confirm('¿Estás seguro que cerrar sesión?');
    if (confirmar) {
        window.location.href = '../index.html';
    }
}
