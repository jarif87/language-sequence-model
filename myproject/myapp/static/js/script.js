// Particle Background with Connections
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `hsl(${Math.random() * 360}, 70%, 70%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.02;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 111, 207, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
            particles.splice(particles.indexOf(particle), 1);
            particles.push(new Particle());
        }
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Word Count
const input = document.getElementById('sentence-input');
const wordCountDisplay = document.getElementById('word-count');

input.addEventListener('input', () => {
    const text = input.value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    wordCountDisplay.textContent = words;
    if (words > 50) {
        input.classList.add('error');
        wordCountDisplay.style.color = '#ff5555';
    } else {
        input.classList.remove('error');
        wordCountDisplay.style.color = '#5bc0f8';
    }
});

// Form Submission Feedback
const form = document.getElementById('predict-form');
form.addEventListener('submit', () => {
    const button = form.querySelector('.searchButton');
    button.innerHTML = 'Processing... <i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML = 'Predict <i class="fas fa-bolt"></i>';
        button.disabled = false;
    }, 2000); // Simulate processing
});