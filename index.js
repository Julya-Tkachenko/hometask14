'use strict'

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наступний код має працювати:

// const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];
// removeElement(array, 4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]


const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];

function removeElement(a, b) {
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b) {
            a.splice(i, 1);
            i = 0;
        } 
    }  
    return a   
}

removeElement(array, 4);
console.log(array);

 


