const canvas = document.getElementById('canvasParticulas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulasArray;

// Constructor de Partículas
class Particula {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // Método para dibujar partículas individuales
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    // Método para actualizar la posición de la partícula
    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// Función para inicializar y reiniciar las partículas
function init() {
    particulasArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '';
        if(Math.random() < 0.5)
            color= '#FFFFFF33';
        else
            color = '#EEEEEE33';

        particulasArray.push(new Particula(x, y, directionX, directionY, size, color));
    }
}

// Función para animar las partículas
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particulasArray.length; i++) {
        particulasArray[i].update();
    }
}

// Evento para ajustar el canvas cuando se cambia el tamaño de la ventana
window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
);

// Evento para eliminar el parpadeo de las partículas en dispositivos móviles
window.addEventListener('touchmove', function () {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
});

init();
animate();