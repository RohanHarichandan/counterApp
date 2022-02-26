

const incrementBtn=document.querySelector('#increment')
const decrementBtn=document.querySelector('#decrement')

let counter=0

const counterX=document.getElementById('counter')

function incrementCounter(){
    counter++;
    counterX.innerText=counter
}

function decrementCounter(){
    counter--;
    counterX.innerText=counter
}


incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)