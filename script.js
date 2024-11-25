const root = document.querySelector(':root');
const keys = document.querySelector('.pad');
const audio = document.querySelectorAll('audio');

root.addEventListener('keydown', handleDrumPlay)
console.log(audio);

function handleDrumPlay(event) {
const keyWhich = event.keyCode;
audio.includes(keyWhich);
};

// root.classList.toggle(".playing");