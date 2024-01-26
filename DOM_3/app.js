const inputRed =  document.getElementById('red');
const inputgreen =  document.getElementById('green');
const inputblue =  document.getElementById('blue');

const textRed =  document.getElementById('text-red');
const textGreen =  document.getElementById('text-green');
const textblue =  document.getElementById('text-blue');

let red = inputRed.value;
let green = inputgreen.value;
let blue = inputblue.value;

textRed.textContent = red;
textGreen.textContent = green;
textblue.textContent = blue;

function ActualizarValore(red,green,blue){

    const ColorRgb = `rgb(${red},${green},${blue})`
    document.body.style.backgroundColor = ColorRgb;
}

inputRed.addEventListener('change', (e)=>{
    let red= e.target.value;
    textRed.textContent = red;
    ActualizarValore(red,green,blue);
})

inputgreen.addEventListener('change', (e)=>{
    let green= e.target.value;
    textGreen.textContent = green;
    ActualizarValore(red,green,blue);
})
inputblue.addEventListener('change', (e)=>{
    let blue= e.target.value;
    textblue.textContent = blue;
    ActualizarValore(red,green,blue)
})