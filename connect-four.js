let turn = 'red';

const board = document.getElementById('board-squares');
board.addEventListener('click', event => {
    const move = event.target.id;
    if (turn === 'red') {
        const box = event.target.id;
        const token = document.createElement('img');
        token.setAttribute('class', 'token');
        token.classList.add('red');
        box.appendChild(token);
    }
    if (turn === 'black') {
        const box = event.target.id;
        const token = document.createElement('img');
        token.setAttribute('class', 'token');
        token.classList.add('black');
        box.appendChild(token);
    }
})
