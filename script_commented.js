document.addEventListener('keydown', handleDrumPlay);
document.addEventListener('keyup', handleStopAudioAndAnimation);

let recording = false;
let soundsRecording = [];
let times = []; // date de maintenant = quantité de ms depuis 1er janvier 1070 et donc possibilité de prendre écart de ms entre deux prises

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

    if (event.keyCode === 82 && recording === false) { // si evenement declenche div 82 et si ma variable est égale a sa valeur initiale 
        recording = true; // alors la variable prend la valeur true et donc actionne focntion enregistrement
        soundsRecording = []; // il faut reinitailiser le tableau quand on rappuie pour reengitrer pas a la fin de l'enregistrement sinon plus rien a ecouter 
        startTime = Date.now(); // création variable qui donne le temps t de départ
    }

    else {
        recording = false; // ou alors la variable prend la valeur false
    };

};

function record(event) { // fonction qui enregistre en poussant dans un tableau que si tout est verifier avant donc ne rajoute pas la lettre R dans ce tableau
    //on enregistre la touche mais aussi à quel moment
    soundsRecording.push({ // transformer mon tableau en objet car permet de mettre touche/son et date;
        keyCode: event.keyCode,
        timeCode: Date.now() - startTime, // t enregistrement = t actuel - t de départ
    });
};

function triggerPlay() {
    soundsRecording.forEach((indexKey) => { // un forEach pour parcourir tableau et récup chaque keyCode
        setTimeout(() => { // fonction timeout qui déclenche tout les n ms données
            const emulNewKeyDownEvent = new KeyboardEvent("keydown", { keyCode: indexKey.keyCode });
            // ici tout le code js se declenche via deux evenements un keydown et keyup = prog. evenentielle et il est possible de faire aussi un evenement directement via le code = simulateur d'évenement
            // ici, on simule un keyboardEvent
            document.dispatchEvent(emulNewKeyBoardEvent); // maintenant qu'évènement créer il faut qu'il se produise pour que l'écouteur sur le document le récup.
            setTimeout(() => { // pareil pour key up, pour que les touches se relevent une fois jouées
                const emulNewKeyUpEvent = new KeyboardEvent("keyup", { keyCode: indexKey.keyCode });
                document.dispatchEvent(emulNewKeyUpEvent);
            }, 2000);
        });

    });
};


