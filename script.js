document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

function handleDrumPlay(event) {
    // pour ne pas que le son se répète placé au début pour ne pas lancer du code pour rien
    if (event.repeat) {
        return;
    }

    // variable qui stock la selection de la source via data-key et lui indique le bon keyCode a mettre entre "" dans la source
    const keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keyWhich) {
        return;
    };

    keyWhich.classList.toggle('playing');

    // pareil que première variable + guillemets pour insérées en texte par ' ' + réécris "chemin" pour selecteurs css audio   
    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');
    // avec $ pour éviter concaténation let audio = document.querySelector( `audio[data-key="${event.keyCode}"]`)  

    if (!keyWhichAudio) {
        //identificateur pour record
        // if(){
        //     triggerRecord();
        // };

        //identificateur pour play 
        // if(){
        //     triggerPlay();
        // }

        return;
    };

    if (keyWhichAudio) {
        // pour remettre le son au début et pouvoir l'enchainer autant de fois qu'on appuye
        keyWhichAudio.currentTime = 0;
        // pour lancer l'audio
        keyWhichAudio.play();
    };
};

function handleStopAudioAndAnimation(event) {
    let keySelect = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    //possible d'abreger si un seul ordre comme ci-dessous
    if (!keySelect) return;

    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');

    if(keySelect && keyWhichAudio){

        keySelect.classList.toggle('playing');
    }

};

function triggerRecord(){

}


