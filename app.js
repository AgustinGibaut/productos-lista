let productos = [
    {
        nombre: 'Auricular Vincha',
        imagen: 'img/auricular.png',
        descripcion: 'Auriculares cómodos y micrófono incorporado.'
    },
    {
        nombre: 'Notebook AMD',
        imagen: 'img/notebook.png',
        descripcion: 'Laptop potente con procesador AMD Ryzen y pantalla Full HD.'
    },
    {
        nombre: 'iPhone 13 Pro Max',
        imagen: 'img/iphone.png',
        descripcion: 'Smartphone de alta gama con cámara avanzada y excelente rendimiento.'
    }
];

const listaProductos = document.getElementById('lista-carrito');


productos.forEach(producto => {
 const li = document.createElement('li');
    li.textContent = producto.nombre;
    const imgElemento = document.createElement('img');
    imgElemento.src = producto.imagen;
    imgElemento.alt = producto.nombre;
    imgElemento.style.width = '100px'; 
    li.appendChild(document.createElement('br'));
    li.appendChild(imgElemento);
    listaProductos.appendChild(li);
    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = producto.descripcion;
    li.appendChild(descripcionElemento);
    listaProductos.appendChild(li);
const botonComprar = document.createElement('button');
botonComprar.textContent = 'Comprar';
botonComprar.addEventListener('click', () => {
    alert(`Has comprado: ${producto.nombre}`);
});
li.appendChild(botonComprar);
listaProductos.appendChild(li);
})



