let audio = document.getElementById('audio');
let audio1 = document.getElementById('audio1');
let audio3 = document.getElementById('audio3');
let k1 = document.getElementById('k1')


 function Empezar(){
    audio.play();
  
    
}

function Pausar(){
    audio.pause();
    audio.currentTime= 0;
   
};

function Empezar1(){
    audio1.play();
}

function Pausa1(){
    audio1.pause();
    audio1.currentTime= 0;
   
};

function Empezar3(){
    audio3.play();
}

function Pausa3(){
    audio3.pause();
    audio3.currentTime= 0;
   
};

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine'; // Seleccionar tipo de onda
oscillator.frequency.value = 0; // Establecer frecuencia inicial
oscillator.connect(audioCtx.destination); // Conectar al dispositivo de salida
oscillator.start();

function changeFrequency(frequency) {
  oscillator.frequency.value = frequency;
}





