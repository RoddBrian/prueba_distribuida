const apiUrl = 'http://localhost:4000/productos';

async function ObtenerProducto() {
    const response = await fetch(apiUrl);
    const produc = await response.json();
    const produList = document.getElementById('produ-list');
    produList.innerHTML = '';
    produc.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = "Nombre: " + pro.name + " Precio: " + pro.precio;
        
        produList.appendChild(li);
    });
}

async function agregarProducto() {
    const produInput = document.getElementById('produ-input');
    const produPreInput = document.getElementById('produpre-input');
    const produName = produInput.value;
    const produPrecio = produPreInput.value;
    if (produName && produPrecio) {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: Date.now().toString(), name: produName, precio: produPrecio })
        });
        if (response.ok) {
            produInput.value = '';
            produPreInput.value = '';
            ObtenerProducto();
        }
    }
}

document.addEventListener('DOMContentLoaded', ObtenerProducto);