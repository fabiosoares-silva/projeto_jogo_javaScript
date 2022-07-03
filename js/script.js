const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-game');
const gameOver = document.querySelector('.game-over');

const somDePulo = new Audio();
somDePulo.src = './sounds/mario-whohoo.mp3';

const failSound = new Audio();
failSound.src = './sounds/fail.mp3';

const jump = () => {
    mario.classList.add('jump-mario');
    somDePulo.play();

    setTimeout(() => {
        mario.classList.remove('jump-mario');
        somDePulo.play();
    }, 500);
};

const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '45px';

        clearInterval(loopGame, failSound.play(), (gameOver.style.display = 'block'));
    }
}, 10);

document.addEventListener('keydown', jump);
