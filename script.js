document.getElementById('container').addEventListener('click', function(event) {
    const img = new Image();
    img.src = 'img/mini-monet.png';
    img.className = 'flying-image';
    img.style.top = event.clientY + 'px';
    img.style.left = event.clientX + 'px';
    document.body.appendChild(img);

    const scoreElement = document.getElementById('score');
    let currentScore = parseInt(scoreElement.textContent.replace(/\D/g, ''), 10);
    currentScore += 1;
    scoreElement.textContent = currentScore;

    img.addEventListener('animationend', () => {
        img.remove();
    });
});