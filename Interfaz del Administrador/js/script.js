document.addEventListener('DOMContentLoaded', showSection('manageUsers'));

function showSection(section) {
    const content = document.getElementById('content');
    if (section === 'manageUsers') {
        content.innerHTML = `
            <div class="section">
                <h2>Gestionar Cuenta de Usuario</h2>
                <button class="button" onclick="openModal('userModal')">Agregar Usuario</button>
                <h3>Usuarios</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Sucursal</th>
                            <th>Código</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                        <tr data-username="Juan Pérez">
                            <td>Juan Pérez</td>
                            <td>juan@correo.com</td>
                            <td>Veterinario</td>
                            <td>Santisima Trinidad</td>
                            <td>ad51nc7</td>
                            <td>
                                <button class="edit-button" onclick="editUser('Juan Pérez', 'juan@correo.com', 'Veterinario', 'Santisima Trinidad')">Editar</button>
                                <button class="delete-button" onclick="deleteUser('Juan Pérez')">Eliminar</button>
                            </td>
                        </tr>
                        <tr data-username="Luis Díaz">
                            <td>Luis Díaz</td>
                            <td>luis@correo.com</td>
                            <td>Veterinario</td>
                            <td>Santisima Trinidad</td>
                            <td>15c28s</td>
                            <td>
                                <button class="edit-button" onclick="editUser('Luis Díaz', 'luis@correo.com', 'Veterinario', 'Santisima Trinidad')">Editar</button>
                                <button class="delete-button" onclick="deleteUser('Luis Díaz')">Eliminar</button>
                            </td>
                        </tr>
                        <tr data-username="Oscar Vargas">
                            <td>Oscar Vargas</td>
                            <td>oscar@correo.com</td>
                            <td>Veterinario</td>
                            <td>Av. Venezuela</td>
                            <td>cq7t03</td>
                            <td>
                                <button class="edit-button" onclick="editUser('Oscar Vargas', 'oscar@correo.com', 'Veterinario', 'Av. Venezuela')">Editar</button>
                                <button class="delete-button" onclick="deleteUser('Oscar Vargas')">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (section === 'monitorAppointments') {
        content.innerHTML = `
            <div class="section">
                <h2>Monitorear Citas y Tratamientos</h2>
                <h3>Citas</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mascota</th>
                            <th>Dueño</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Max</td>
                            <td>Juan Pérez</td>
                            <td>10/06/2024</td>
                            <td class="tratamiento-finalizado">Finalizado</td>
                        </tr>
                        <tr>
                            <td>Pupi</td>
                            <td>Maria Torres</td>
                            <td>18/06/2024</td>
                            <td class="tratamiento-proceso">En proceso</td>
                        </tr>
                        <tr>
                            <td>Lulu</td>
                            <td>Luis Vargas</td>
                            <td>18/06/2024</td>
                            <td class="tratamiento-espera">En espera</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (section === 'provideSupport') {
        content.innerHTML = `
            <div class="section">
                <h2>Proveer Soporte Técnico</h2>
                <button class="button" onclick="openModal('supportModal')">Agregar Soporte</button>
                <h3>Soporte</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody id="supportTableBody">
                        <tr>
                            <td>Juan Pérez</td>
                            <td>Problema con login</td>
                            <td>5/6/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (section === 'manageInventory') {
        content.innerHTML = `
            <div class="section">
                <h2>Gestionar Inventario</h2>
                <button class="button" onclick="openModal('inventoryModal')">Agregar Producto</button>
                <h3>Inventario</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="inventoryTableBody">
                        <tr data-producto="Producto 1">
                            <td>Producto 1</td>
                            <td>100</td>
                            <td>100000 Gs</td>
                            <td>
                                <button class="edit-button" onclick="editProduct('Producto 1', 100)">Editar</button>
                                <button class="delete-button" onclick="deleteProduct('Producto 1')">Eliminar</button>
                            </td>
                        </tr>
                        <tr data-producto="Producto 2">
                            <td>Producto 2</td>
                            <td>200</td>
                            <td>50000 Gs</td>
                            <td>
                                <button class="edit-button" onclick="editProduct('Producto 2', 200)">Editar</button>
                                <button class="delete-button" onclick="deleteProduct('Producto 2')">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (section === 'superviseBilling') {
        content.innerHTML = `
            <div class="section">
                <h2>Supervisar Facturación y Pagos</h2>
                <h3>Facturación</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Factura</th>
                            <th>Usuario</th>
                            <th>Importe</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Juan Pérez</td>
                            <td>100.000 Gs</td>
                            <td class="pagado">Pagado</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Luis Vargas</td>
                            <td>120.000 Gs</td>
                            <td class="pendiente">Pendiente</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Maria Torres</td>
                            <td>90.000 Gs</td>
                            <td class="pendiente">Pendiente</td>
                        </tr>
                        <tr>
                            <td>004</td>
                            <td>Oscar Vargas</td>
                            <td>140.000 Gs</td>
                            <td class="pagado">Pagado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (section === 'auditFinancials') {
        content.innerHTML = `
            <div class="section">
                <h2>Auditar Registros Financieros</h2>
                <h3>Registros Financieros</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Importe</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan Pérez</td>
                            <td>100.000 Gs</td>
                            <td>10/06/2024</td>
                        </tr>
                        <tr>
                            <td>Oscar Vargas</td>
                            <td>140.000 Gs</td>
                            <td>02/07/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function generarCadenaAleatoria(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indiceAleatorio);
    }
    return resultado;
}

// Función para abrir el modal y cargar los datos del usuario en los campos del formulario
function editUser(username, email, role, sucursal) {
    document.getElementById('usernameInput').value = username;
    document.getElementById('emailInput').value = email;
    document.getElementById('rol').value = role;
    document.getElementById('sucursal').value = sucursal;

    // Guardar el nombre de usuario original en un atributo de datos del modal
    const modal = document.getElementById('userModal');
    modal.setAttribute('data-original-username', username);

    // Cambiar el texto del botón del modal a "Guardar Cambios"
    const modalButton = document.querySelector('#userModal .modal-button button');
    modalButton.innerText = 'Guardar Cambios';
    modalButton.onclick = function() { saveUser(true); }; // true indica que es una edición

    openModal('userModal');
}

// Función para guardar un usuario (nuevo o editado)
function saveUser(isEditing = false) {
    const username = document.getElementById('usernameInput').value;
    const email = document.getElementById('emailInput').value;
    const role = document.getElementById('rol').value;
    const sucursal = document.getElementById('sucursal').value;

    if (username && email && role && sucursal) {
        if (isEditing) {
            const modal = document.getElementById('userModal');
            const originalUsername = modal.getAttribute('data-original-username');

            const rows = document.getElementById('userTableBody').getElementsByTagName('tr');
            for (let row of rows) {
                if (row.getAttribute('data-username') === originalUsername) {
                    row.cells[0].innerText = username;
                    row.cells[1].innerText = email;
                    row.cells[2].innerText = role;
                    row.cells[3].innerText = sucursal;
                    row.setAttribute('data-username', username); // Actualizar el atributo de datos
                    break;
                }
            }
        } else {
            const codigo = generarCadenaAleatoria(6);
            const tableBody = document.getElementById('userTableBody');
            const newRow = document.createElement('tr');

            newRow.setAttribute('data-username', username);
            newRow.innerHTML = `
                <td>${username}</td>
                <td>${email}</td>
                <td>${role}</td>
                <td>${sucursal}</td>
                <td>${codigo}</td>
                <td>
                    <button class="edit-button" onclick="editUser('${username}', '${email}', '${role}', '${sucursal}')">Editar</button>
                    <button class="delete-button" onclick="deleteUser('${username}')">Eliminar</button>
                </td>
            `;

            tableBody.appendChild(newRow);
        }

        closeModal('userModal');
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deleteUser(username) {
    const confirmation = confirm(`¿Está seguro de que desea eliminar al usuario ${username}?`);
    if (confirmation) {
        const tableBody = document.getElementById('userTableBody');
        const rows = tableBody.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row.getAttribute('data-username') === username) {
                tableBody.removeChild(row);
                break;
            }
        }
    }
}

function saveRole() {
    alert('Rol guardado');
    closeModal('roleModal');
}

function saveConfig() {
    alert('Configuración guardada');
    closeModal('configureModal');
}

function savePermission() {
    alert('Permiso guardado');
    closeModal('permissionModal');
}

function saveSupport() {
    const usuario = document.getElementById('username').value;
    const descripcion = document.getElementById('descripción').value;
    
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let fecha_formateada = dia + '/' + mes + '/' + anio;

    const tableBody = document.getElementById('supportTableBody');
    const newRow = document.createElement('tr');

    if ( usuario && descripcion ) {
        newRow.innerHTML = `
            <td>${usuario}</td>
            <td>${descripcion}</td>
            <td>${fecha_formateada}</td>
        `
    
        tableBody.appendChild(newRow);
        closeModal('supportModal');
    } else {
        alert('Por favor, complete todos los campos')
    }
}

function editProduct(producto, cantidad) {
    document.getElementById('productoInput').value = producto;
    document.getElementById('cantidadInput').value = cantidad;

    const modal = document.getElementById('inventoryModal');
    modal.setAttribute('data-original-producto', producto);

    const modalButton = document.querySelector('#inventoryModal .modal-button button');
    modalButton.innerText = 'Guardar Cambios';
    modalButton.onclick = function() { saveProduct(true); };

    openModal('inventoryModal');
}


function saveProduct(isEditing = false) {
    const producto = document.getElementById('productoInput').value;
    const cantidad = document.getElementById('cantidadInput').value;
    const precio = document.getElementById('priceInput').value;

    if (producto && cantidad && precio) {
        if (isEditing) {
            const modal = document.getElementById('inventoryModal');
            const originalProducto = modal.getAttribute('data-original-producto');

            const rows = document.getElementById('inventoryTableBody').getElementsByTagName('tr');
            for (let row of rows) {
                if (row.getAttribute('data-producto') === originalProducto) {
                    row.cells[0].innerText = producto;
                    row.cells[1].innerText = cantidad;
                    row.cells[2].innerText = precio;
                    row.setAttribute('data-producto', producto);
                    break;
                }
            }
        } else {
            const tableBody = document.getElementById('inventoryTableBody');
            const newRow = document.createElement('tr');

            newRow.setAttribute('data-producto', producto);
            newRow.innerHTML = `
                <td>${producto}</td>
                <td>${cantidad}</td>
                <td>${precio} Gs</td>
                <td>
                    <button class="edit-button" onclick="editProduct('${producto}', ${cantidad})">Editar</button>
                    <button class="delete-button" onclick="deleteProduct('${producto}')">Eliminar</button>
                </td>
            `;

            tableBody.appendChild(newRow);
        }

        closeModal('inventoryModal');
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deleteProduct(producto) {
    const confirmation = confirm(`¿Está seguro de que desea eliminar el producto ${producto}?`);
    if (confirmation) {
        const tableBody = document.getElementById('inventoryTableBody');
        const rows = tableBody.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row.getAttribute('data-producto') === producto) {
                tableBody.removeChild(row);
                break;
            }
        }
    }
}


function cerrarSesion() {
    // Aquí puedes añadir la lógica para cerrar sesión, como redirigir a la página de login o limpiar datos del usuario
    const confirmar = confirm('¿Estás seguro que cerrar sesión?')

        if ( confirmar ) {
            window.location.href = '../Interfaz de Inicio/index.html';
        }
}
