// display `loaded in ${x}%` with a bar

// 25%; 50%; 75%; 100%

let progress = 0;

let btn = document.querySelector('BUTTON');
let bar = document.querySelector('.progress-bar');

// btn.addEventListener('click', (e)=> {
//     progress+= 10;
//     console.log(progress);
//     bar.style.width = `${progress}vw`;
// });

function barGrower(){
    if(progress == 100){
       progress = -10;
    }
    progress+= 10;
    console.log(progress);
    bar.style.width = `${progress}vw`;
}

window.onload = (event) => {  
    setInterval(barGrower, 3000);
}


// setInterval(function(){ alert("Hello"); }, 3000);
