'use strict';

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// document.querySelector('.table').addEventListener("click",function(){
//     const number = Number(document.querySelector('.table').value);
//     console.log(number, typeof number);

//     if(number > 11 || number <= 0){
//         displayMessage('No table')
//     } else{
//         displayMessage('')
//     }
// });


// const number_table = document.querySelector('.table')
const btnadd = document.querySelector('.btn')

btnadd.addEventListener("click", function(){
     const number = Number(document.querySelector('.table').value);
    console.log(number, typeof number);

    if(number > 11 || number <= 0 || ){
        displayMessage('No table')
    } else{
        displayMessage('')
    }

})




