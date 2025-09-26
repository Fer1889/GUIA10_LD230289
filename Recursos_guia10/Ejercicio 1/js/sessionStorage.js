function saveFormToSessionStorage() {
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const bio = document.getElementById('bio').value;
    sessionStorage.setItem('formData', JSON.stringify({ nombre, pais, bio }));
}

function loadFormFromSessionStorage() {
    const data = sessionStorage.getItem('formData');
    if (data) {
        const { nombre, pais, bio } = JSON.parse(data);
        document.getElementById('nombre').value = nombre || '';
        document.getElementById('pais').value = pais || '';
        document.getElementById('bio').value = bio || '';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadFormFromSessionStorage();
    setInterval(saveFormToSessionStorage, 3000);
    document.getElementById('formulario').addEventListener('submit', function(e) {
        e.preventDefault();
        saveFormToSessionStorage();
        alert('Datos guardados en sessionStorage');
    });
});