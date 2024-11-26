document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

let recording = false;
let soundsRecording = [];
let times = [];

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

        if (event.keyCode === 82) { // si pas audio et si touche R
            triggerRecord();
        };

        if (event.keyCode === 32) { // si pas audio et si touche espace
            triggerPlay();
        }

        return;
    };

    if (keyWhichAudio) {

        keyWhichAudio.currentTime = 0; // pour remettre le son au début et pouvoir l'enchainer autant de fois qu'on appuye

        keyWhichAudio.play(); // pour lancer l'audio

        if (recording === true) { // si r est enfoncé on lance la focntion enregistrement ici pour qu eça ne prenne en compte que les touches concernées par le pad
            record(event);
        };
    };
};

function handleStopAudioAndAnimation(event) {
    let keySelect = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keySelect) return; //possible d'abreger si un seul ordre comme ci-dessous

    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');

    if (keySelect && keyWhichAudio) { //pour isoler reccord et play et qu'animation reste après keyUp
        keySelect.classList.toggle('playing');
    }
};

function triggerRecord(event) { //fonction pour enregistrer

    if (event.keyCode === 82 && Recording === false) { // si evenement declenche div 82 et si ma variable est égale a sa valeur initiale 
        Recording = true; // alors la variable prend la valeur true
    }

    else {
        Recording = false; // ou alors la variable prend la valeur false
    };

};

function record(event) { // fonctionne qui enregistre en poussant dans un tableau
    soundsRecording.push(event.keyCode);
};

function triggerPlay() {
};


