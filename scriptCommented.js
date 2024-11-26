document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

function handleDrumPlay(event) {
    
    if (event.repeat) { // pour ne pas que le son se répète placé au début pour ne pas lancer du code pour rien une fois la fonction faite une 1ere fois
        return;
    }

    const keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`); // variable qui stock la selection de la source via data-key et lui indique le bon keyCode a mettre entre "" dans la source

    if (!keyWhich) { // si autre touche n'ayant pas d'écouteur d'évènement alors ne lance pas le reste du code
        return;
    };

    keyWhich.classList.toggle('playing'); //ajoute classe CSS contenant animation
      
    const keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]'); // pareil que première variable + guillemets pour insérées en texte par ' ' + réécris "chemin" pour selecteurs css audio
    // avec $ pour éviter concaténation let KeyWhichAudio = document.querySelector( `audio[data-key="${event.keyCode}"]`)  

    if (!keyWhichAudio) { // si autre touche n'ayant pas d'écouteur d'évènement et pas de source audio alors ne lance pas le reste du code

        if(event.keyCode === 82){ // si pas audio et si touche R
            handleTriggerRecord();
        };

        if(event.keyCode === 32){ // si pas audio et si touche espace
            handleTriggerPlay();
        }

        return;
    };

    if (keyWhichAudio) {
        
        keyWhichAudio.currentTime = 0; // pour remettre le son au début et pouvoir l'enchainer autant de fois qu'on appuye
        
        keyWhichAudio.play(); // pour lancer l'audio
    };
};

function handleStopAudioAndAnimation(event) {
    let keySelect = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keySelect) return; //possible d'abreger si un seul ordre comme ci-dessous

    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');

    if(keySelect && keyWhichAudio){ //pour isoler reccord et play et qu'animation reste après keyUp
        keySelect.classList.toggle('playing');
    }
};

function handleTriggerRecord(){
console.log("hehrjhez");

};

// function handleTriggerPlay(){

// };


