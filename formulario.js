document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let nombre = document.getElementById('nombres').value.trim();
        let apellido = document.getElementById('apellidos').value.trim();
        let correo = document.getElementById('correo').value.trim();
        let valid = true;
        
        document.getElementById('errorNombre').textContent = '';
        document.getElementById('errorApellido').textContent = '';
        document.getElementById('errorCorreo').textContent = '';
        document.getElementById('mensajeExito').style.display = 'none';
        
        if (nombre === '') {
            document.getElementById('errorNombre').textContent = 'Por favor, ingresa tu nombre';
            valid = false;
        }
        if (apellido === '') {
            document.getElementById('errorApellido').textContent = 'Por favor, ingresa tu apellido';
            valid = false;
        }
        if (correo === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            document.getElementById('errorCorreo').textContent = 'Por favor, ingresa un correo válido';
            valid = false;
        }
        
        if (valid) {
            document.getElementById('mensajeExito').style.display = 'block';
            document.getElementById('contactForm').reset();
        }
    });
});
