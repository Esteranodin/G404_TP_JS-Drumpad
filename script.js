
document.addEventListener('keydown', handleDrumPlay)

function handleDrumPlay(event) {

    // variable qui stock la selection de la source via data-key et lui indique le bon keyCode a mettre entre "" dans la source 
    let keyWhichAudio = document.querySelector(
        'audio[data-key="' + event.keyCode + '"]');
    // guillements insérées en texte par ' ' + réécris chemin pour selecteurs css audio
    // avec $ pour éviter concaténation let audio = document.querySelector( `audio[data-key="${event.keyCode}"]`)   
   
    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if (event.repeat){
        return;
    }

    if (!keyWhichAudio) {
        return;
    }
    
  // pour lancer l'audio
    keyWhichAudio.play();

    keyWhich.classList.toggle('playing');   
};

document.addEventListener('keyup', handleStopAudioAndAnimation)

function handleStopAudioAndAnimation (event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if (!keyWhichAudio) {
    //     return;
    // }

keyWhich.classList.remove('playing');
};


const keyRecord = document.querySelector(`.key[data-key="32"]`);

keyRecord.addEventListener ('keydown', handleRecord);
function handleRecord (event) {

    console.log('yayaayay');
};
