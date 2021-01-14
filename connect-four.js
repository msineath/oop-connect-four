 let turn = 'red';

 const col0 = document.querySelectorAll('[id$="-0"]');
 const col1 = document.querySelectorAll('[id$="-1"]');
 const col2 = document.querySelectorAll('[id$="-2"]');
 const col3 = document.querySelectorAll('[id$="-3"]');
 const col4 = document.querySelectorAll('[id$="-4"]');
 const col5 = document.querySelectorAll('[id$="-5"]');

if (box.id === 'column-0') {
    // take div at col0[0]; appendChild token to it
    // .pop col0;
    // if (col0.length === 1) {
        // 'column-0' disabled = true
    //}
}

const board = document.getElementById('click-targets');

board.addEventListener('click', event => {
    const box = event.target //.id  // ${[7]}
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

//step4.) .shift array;

//step5.) when column's array is empty, remove ghost circle divider;
