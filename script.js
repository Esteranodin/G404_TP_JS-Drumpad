document.addEventListener('keyup', handleStopAudioAndAnimation);
document.addEventListener('keydown', handleDrumPlay)

function handleDrumPlay(event) {
    // pour ne pas que le son se répète
    if (event.repeat) {
        return;
    }

    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keyWhich) {
        return;
    };

    // variable qui stock la selection de la source via data-key et lui indique le bon keyCode a mettre entre "" dans la source
    let keyWhichAudio = document.querySelector(
        'audio[data-key="' + event.keyCode + '"]');

    if (keyWhichAudio) {
        // pour lancer l'audio
        keyWhichAudio.play();
    }

    // guillements insérées en texte par ' ' + réécris chemin pour selecteurs css audio
    // avec $ pour éviter concaténation let audio = document.querySelector( `audio[data-key="${event.keyCode}"]`)   


    keyWhich.classList.toggle('playing');

};


function handleStopAudioAndAnimation(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if (!keyWhichAudio) {
    //     return;
    // }

    keyWhich.classList.remove('playing');
};




