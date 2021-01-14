 let turn = 'red';

const board = document.getElementById('click-targets');
board.addEventListener('click', event => {
    const box = event.target;
    if (turn === 'red') {
        const token = document.createElement('img');
        token.setAttribute('class', 'token');
        token.classList.add('red');
        box.appendChild(token);
        turn = 'black';
    }
    if (turn === 'black') {
        const box = event.target;
        const token = document.createElement('img');
        token.setAttribute('class', 'token');
        token.classList.add('black');
        box.appendChild(token);
        turn = 'red';
    }
    
    // const target = document.querySelector('[id^="square-0"]').id;
    // for (let position of target) {
    //     if (position  = event.target) {
    //         const ghostCircle = document.getElementById(`column-${box[9]}`)
            
    //         console.log(box[9]);
    //     }
    // }
})
