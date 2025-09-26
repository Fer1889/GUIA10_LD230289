function saveFormToLocalStorage() {
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const bio = document.getElementById('bio').value;
    localStorage.setItem('formData', JSON.stringify({ nombre, pais, bio }));
}

function loadFormFromLocalStorage() {
    const data = localStorage.getItem('formData');
    if (data) {
        const { nombre, pais, bio } = JSON.parse(data);
        document.getElementById('nombre').value = nombre || '';
        document.getElementById('pais').value = pais || '';
        document.getElementById('bio').value = bio || '';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadFormFromLocalStorage();
    setInterval(saveFormToLocalStorage, 3000);
    document.getElementById('formulario').addEventListener('submit', function(e) {
        e.preventDefault();
        saveFormToLocalStorage();
        alert('Datos guardados en localStorage');
    });
});