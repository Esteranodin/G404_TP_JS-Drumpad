document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

let recording = false;
let soundsRecording = [];
let times = [];

function handleDrumPlay(event) {
    if (event.repeat) return;

    const keyWhich = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keyWhich) return;

    keyWhich.classList.toggle('playing');

    const keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');

    if (!keyWhichAudio) {

        if (event.keyCode === 82) {
            triggerRecord(event);
        };

        
        // if(event.keyCode === 32){ 
        //     triggerPlay();
        // }

        return;
    };

    if (keyWhichAudio) {

        keyWhichAudio.currentTime = 0;
        keyWhichAudio.play();

        if (recording === true) {
            record(event);
        };
    };
};

function handleStopAudioAndAnimation(event) {
    let keySelect = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!keySelect) return;

    let keyWhichAudio = document.querySelector('audio[data-key="' + event.keyCode + '"]');

    if (keySelect && keyWhichAudio) {
        keySelect.classList.toggle('playing');
    }
};

function triggerRecord(event) {
    if (event.keyCode === 82 && recording === false) {
        recording = true;
    }
    else {
        recording = false;
    };
};

function record(event) {
            soundsRecording.push(event.keyCode);
            console.log(soundsRecording);
            
};


// function triggerPlay(){

// };


