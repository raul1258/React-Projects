let changeColor = document.querySelector('#change')
let hide = document.querySelector('#demo');

// changeColor.addEventListener('click',  () => changeColor.style.backgroundColor = 'red') 

// hide.addEventListener('dblclick',  () => hide.style.visibility = 'hidden') 

function colorChange(){
    changeColor.style.backgroundColor = 'green';
}

function hideBtn (){
    // hide.style.visibility = 'hidden';
    // alert('hii welcome');
    hide.style.display='none';
}

// let obj = {1:'a',2:'b',3:'c'};
// const retrieveProperties = (obj = {}) => {
//     const res = [];
//     for(key in obj){
//        res.push( key );
//     };
//     return res;
//  };
//  console.log(retrieveProperties(obj));

let obj = {id:"123",name:"candidate",age:"22",work:"sde"};
 let keys = Object.values(obj);
 console.log(keys);
 
 console.log(obj);


 let arr=[1,2,3,4,5,6,7,8,9,10];
 let results=[];

 function split(arr,N){
    let results=[];
    while(arr.length){
        results.push(arr.splice(0,N));
    }
    return results;
 }

var ans = split([1,2,3,4,5,6,7,8,9,10],3);
console.log(ans);
 