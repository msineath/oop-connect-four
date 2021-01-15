let turn = 'red';

const col0 = document.querySelectorAll('[id$="-0"]');
const col1 = document.querySelectorAll('[id$="-1"]');
const col2 = document.querySelectorAll('[id$="-2"]');
const col3 = document.querySelectorAll('[id$="-3"]');
const col4 = document.querySelectorAll('[id$="-4"]');
const col5 = document.querySelectorAll('[id$="-5"]');
const col6 = document.querySelectorAll('[id$="-6"]');

const board = document.getElementById('click-targets');
const colArr = [col0, col1, col2, col3, col4, col5, col6];

board.addEventListener('click', event => {  
    const box = event.target
    const token = document.createElement('img');
    token.setAttribute('class', 'token');
    let targetChecker = (box.id.slice(box.id.length-1));
    if (turn === 'red') {
        token.classList.add('red');

        // for (let col of colArr) {
            // if (col[0].id.slice(col[0].id.length -1) === targetChecker) {
                // col[col.length -1].appendChild(token);
                // colArr[colArr.indexOf(col)].pop();
            // }
        // }
        turn = 'black';
        return;
    }
    if (turn === 'black') {
        token.classList.add('black');

        for (let col of colArr) {
            if (col[0].id.slice(col[0].id.length -1) === targetChecker) {
            col[col.length -1].appendChild(token);
            col.pop();
            }
        }

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
