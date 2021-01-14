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
    
   
})

//step1.) grab  columns;

//step2.) place column numbers into arrays for each row, usind column number
// in decremental order;

//attach each ghost circle to column below;

//Step3.) when clicked, place token into square with id ending in array[0];

//step4.) .unshift array;

//step5.) when column's array is empty, remove ghost circle divider;

