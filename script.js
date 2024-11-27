document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

let recording = false;
let soundsRecording = [];
let startTime;
let keyPlay = document.querySelector('#play');

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


        if (event.keyCode === 32) {
            triggerPlay();
        };

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
    };
};

function triggerRecord(event) {
    if (event.keyCode === 82 && recording === false) {
        recording = true;
        soundsRecording = [];
        startTime = Date.now();
    }
    else {
        recording = false;
    };
};

function record(event) {
    soundsRecording.push({
        keyCode: event.keyCode,
        timeCode: Date.now() - startTime,
    });
};

function triggerPlay() {
    soundsRecording.forEach((indexKey) => {
        setTimeout(() => {
            const emulNewKeyDownEvent = new KeyboardEvent("keydown", { keyCode: indexKey.keyCode});
            document.dispatchEvent(emulNewKeyDownEvent);
           setTimeout(() => {
            const emulNewKeyUpEvent = new KeyboardEvent("keyup", {keyCode: indexKey.keyCode});
            document.dispatchEvent(emulNewKeyUpEvent);
        }, 200); 
    }, indexKey.timeCode);       
    });
    // setTimeout(() => {
        
    //     keyPlay.classList.remove('playing');
    // }, soundsRecording.length);
    
    
    
};


