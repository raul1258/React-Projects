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

let obj = {id:'123', name:'candidate',age:'22',work:'SDE'};
const retrieveProperties = (obj = {}) => {
    const res = [];
    for(key in obj){
       res.push([ key ]);
    };
    return res;
 };
 console.log(retrieveProperties(obj));


 