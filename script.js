// Cambiar el color del círculo
function changeColor() {
    var circle = document.getElementById('circle');
    var newColor = getRandomColor();
    circle.style.backgroundColor = newColor;
}

// Cambiar el tamaño del círculo
function changeSize() {
    var circle = document.getElementById('circle');
    var newWidth = Math.floor(Math.random() * 200) + 50; // Valor entre 50 y 250
    var newHeight = Math.floor(Math.random() * 200) + 50;
    circle.style.width = newWidth + 'px';
    circle.style.height = newHeight + 'px';
}

// Aparcer y desapacer el círculo
function toggleVisibility() {
    var circle = document.getElementById('circle');
    circle.style.display = (circle.style.display === 'none' || circle.style.display === '') ? 'block' : 'none';
}

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
