document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Evitar el envío del formulario de manera predeterminada
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const email = document.getElementById('email').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();

    // Expresiones regulares
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    const edadRegex = /^(?:[1-9]|[1-9][0-9]|120)$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Limpiar mensajes de error previos
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorEdad').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorComentarios').textContent = '';

    // Validaciones
    let isValid = true;

    // Validar si los campos están vacíos
    if (!nombre || !edad || !email || !comentarios) {
        isValid = false;
        if (!nombre) document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
        if (!edad) document.getElementById('errorEdad').textContent = 'La edad es obligatoria.';
        if (!email) document.getElementById('errorEmail').textContent = 'El email es obligatorio.';
        if (!comentarios) document.getElementById('errorComentarios').textContent = 'Los comentarios son obligatorios.';
    }

    // Validar nombre
    if (nombre && !nombreRegex.test(nombre)) {
        isValid = false;
        document.getElementById('errorNombre').textContent = 'El nombre debe tener entre 2 y 50 caracteres y solo contener letras.';
    }

    // Validar edad
    if (edad && !edadRegex.test(edad)) {
        isValid = false;
        document.getElementById('errorEdad').textContent = 'La edad debe ser un número entre 1 y 120.';
    }

    // Validar email
    if (email && !emailRegex.test(email)) {
        isValid = false;
        document.getElementById('errorEmail').textContent = 'Formato de email inválido (ejemplo: example@gmail.com).';
    }

    // Si todo es válido, enviar el formulario
    if (isValid) {
        alert('Formulario enviado con éxito');
    }
});

/* He dejado comentado esta parte del código ya que con CSS se puede hacer los mismo y con menos líneas. */

// Añadir estilos dinámicos a los campos
// var campos = document.querySelectorAll('#miFormulario input, #miFormulario textarea');
// campos.forEach(function(campo) {
//     campo.addEventListener('focus', function() {
//         campo.classList.add('highlight');
//     });
//     campo.addEventListener('blur', function() {
//         campo.classList.remove('highlight');
//     });
// });