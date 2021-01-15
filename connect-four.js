document.addEventListener('DOMContentLoaded', event => {
    let turn = 'red';

const col0 = document.querySelectorAll('[id$="-0"]');
const col1 = document.querySelectorAll('[id$="-1"]');
const col2 = document.querySelectorAll('[id$="-2"]');
const col3 = document.querySelectorAll('[id$="-3"]');
const col4 = document.querySelectorAll('[id$="-4"]');
const col5 = document.querySelectorAll('[id$="-5"]');
const col6 = document.querySelectorAll('[id$="-6"]');

const col0Arr = Array.from(col0);
const col1Arr = Array.from(col1);
const col2Arr = Array.from(col2);
const col3Arr = Array.from(col3);
const col4Arr = Array.from(col4);
const col5Arr = Array.from(col5);
const col6Arr = Array.from(col6);

const board = document.getElementById('click-targets');
const colArr = [col0Arr, col1Arr, col2Arr, col3Arr, col4Arr, col5Arr, col6Arr];

board.addEventListener('click', event => {  
    const box = event.target
    const token = document.createElement('img');
    let targetChecker = (box.id.slice(box.id.length-1));

    if (colArr[targetChecker].length === 1) {
        return;
    }
    token.setAttribute('class', 'token');
    
    if (turn === 'red') {
        token.classList.add('red');

        for (let col of colArr) {
            
            if (col[0].id.slice(col[0].id.length -1) === targetChecker) {
                colArr[targetChecker][col.length -1].appendChild(token);
                colArr[targetChecker].pop();
            }
        }
        turn = 'black';
        return;
    }
    if (turn === 'black') {
        token.classList.add('black');

        for (let col of colArr) {
            if (col[0].id.slice(col[0].id.length -1) === targetChecker) {
                colArr[targetChecker][col.length -1].appendChild(token);
                colArr[targetChecker].pop();
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
})