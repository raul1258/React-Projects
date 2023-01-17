let changeColor = document.querySelector('#change')
let hide = document.querySelector('#demo');

// changeColor.addEventListener('click',  () => changeColor.style.backgroundColor = 'red') 

// hide.addEventListener('dblclick',  () => hide.style.visibility = 'hidden') 

function colorChange(){
    changeColor.style.backgroundColor = 'grey';
}

function hideBtn (){
    hide.style.visibility = 'hidden';
}

let obj = {1:'a',2:'b',3:'c'};
const retrieveProperties = (obj = {}) => {
    const res = [];
    for(key in obj){
       res.push([ key ]);
    };
    return res;
 };
 console.log(retrieveProperties(obj));


 