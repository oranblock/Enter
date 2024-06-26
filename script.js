// Optional JavaScript for interactivity

document.addEventListener('DOMContentLoaded', () => {
    const dustElements = document.querySelectorAll('.dust');

    dustElements.forEach((dust) => {
        dust.style.animationDuration = `${5 + Math.random() * 5}s`;
    });
});
