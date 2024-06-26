document.addEventListener('DOMContentLoaded', () => {
    const dustContainer = document.getElementById('dustContainer');

    for (let i = 0; i < 50; i++) {
        const dust = document.createElement('div');
        dust.classList.add('dust');
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.animationDuration = `${5 + Math.random() * 10}s`;
        dust.style.width = `${5 + Math.random() * 5}px`;
        dust.style.height = dust.style.width;
        dustContainer.appendChild(dust);
    }
});
