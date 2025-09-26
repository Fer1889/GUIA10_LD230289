function saveReproductorForm() {
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const cancion = document.getElementById('cancion').value;
    localStorage.setItem('reproductorData', JSON.stringify({ nombre, genero, cancion }));
}

function loadReproductorForm() {
    const data = localStorage.getItem('reproductorData');
    if (data) {
        const { nombre, genero, cancion } = JSON.parse(data);
        document.getElementById('nombre').value = nombre || '';
        document.getElementById('genero').value = genero || '';
        document.getElementById('cancion').value = cancion || '';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadReproductorForm();
    setInterval(saveReproductorForm, 3000);
    document.getElementById('form-reproductor').addEventListener('submit', function(e) {
        e.preventDefault();
        saveReproductorForm();
        // Mostrar información en el cuadro desplazable
        const nombre = document.getElementById('nombre').value;
        const genero = document.getElementById('genero').value;
        const cancion = document.getElementById('cancion').value;
        let info = '';
        if (nombre && genero && cancion) {
            info = `Nombre del Artista: ${nombre} | Género: ${genero} | Canción: ${cancion}`;
        } else if (nombre && genero) {
            info = `Nombre del Artista: ${nombre} | Género: ${genero}`;
        } else if (nombre) {
            info = `Nombre del Artista: ${nombre}`;
        }
        document.getElementById('info-cancion').textContent = info;
        alert('Datos guardados en localStorage');
    });
});