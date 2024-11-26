document.addEventListener('keydown', handleDrumPlay)
document.addEventListener('keyup', handleStopAudioAndAnimation);

function handleDrumPlay(event) {
    // pour ne pas que le son se répète et placer au début pour eviter tout autre lancement de code
    if (event.repeat) {
        return;
    }

    // variable qui stock la selection de la source via data-key et lui indique le bon keyCode a mettre entre "" dans la source
    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keyWhich) {
        return;
    };
    
    keyWhich.classList.toggle('playing');

    // pareil que première variable + guillemets pour insérées en texte par ' ' + réécris "chemin" pour selecteurs css audio   
    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');
    // avec $ pour éviter concaténation let audio = document.querySelector( `audio[data-key="${event.keyCode}"]`)  

    if (!keyWhichAudio) {
        return;
    };

    if (keyWhichAudio) {
        // pour lancer l'audio
        keyWhichAudio.play();
    };
};


function handleStopAudioAndAnimation(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);
   
    //possible d'abreger si un seul ordre
    if (!keyWhich) return;

    keyWhich.classList.remove('playing');
};




