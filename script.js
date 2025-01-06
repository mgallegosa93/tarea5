// Clase Producto para crear objetos de inventario
class Producto {
    constructor(id, nombre, cantidad, precio) {
        this.id = id; // Identificador único
        this.nombre = nombre; // Nombre del producto
        this.cantidad = cantidad; // Cantidad disponible
        this.precio = precio; // Precio por unidad
    }

    // Método para calcular el valor total en inventario
    calcularValorTotal() {
        return this.cantidad * this.precio;
    }
}

// Array para almacenar los productos del inventario
const inventario = [];

// Función para agregar un producto
function agregarProducto(id, nombre, cantidad, precio) {
    // Verificar si el ID ya existe
    if (inventario.some(producto => producto.id === id)) {
        console.log(`Error: Ya existe un producto con el ID ${id}.`);
        return;
    }

    const nuevoProducto = new Producto(id, nombre, cantidad, precio);
    inventario.push(nuevoProducto);
    console.log(`Producto agregado: ${nombre}`);
}

// Función para listar todos los productos
function listarProductos() {
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return;
    }

    console.log("Inventario actual:");
    inventario.forEach(producto => {
        console.log(
            `ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio}, Valor Total: $${producto.calcularValorTotal()}`
        );
    });
}

// Función para buscar un producto por ID
function buscarProductoPorId(id) {
    const producto = inventario.find(producto => producto.id === id);

    if (producto) {
        console.log(
            `Producto encontrado: ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio}, Valor Total: $${producto.calcularValorTotal()}`
        );
    } else {
        console.log(`No se encontró un producto con el ID ${id}.`);
    }
}

// Función para eliminar un producto por ID
function eliminarProductoPorId(id) {
    const index = inventario.findIndex(producto => producto.id === id);

    if (index !== -1) {
        const eliminado = inventario.splice(index, 1);
        console.log(`Producto eliminado: ${eliminado[0].nombre}`);
    } else {
        console.log(`No se encontró un producto con el ID ${id}.`);
    }
}

// Instrucciones iniciales
console.log("Bienvenido al sistema de gestión de inventario.");
console.log("Usa las siguientes funciones para interactuar:");
console.log("- agregarProducto(id, nombre, cantidad, precio): Agrega un nuevo producto.");
console.log("- listarProductos(): Muestra todos los productos en el inventario.");
console.log("- buscarProductoPorId(id): Busca un producto por su ID.");
console.log("- eliminarProductoPorId(id): Elimina un producto por su ID.");

// Ejemplo inicial
console.log("\nEjemplo:");
agregarProducto(1, "Laptop", 10, 1200);
agregarProducto(2, "Mouse", 50, 25);
listarProductos();
buscarProductoPorId(1);
eliminarProductoPorId(2);
listarProductos();
