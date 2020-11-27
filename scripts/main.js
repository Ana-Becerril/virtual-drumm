const mainContainer = document.getElementById('mainContainer');
const drums = document.createElement('div');
const soundOne = document.createElement('div');
const soundTwo = document.createElement('div');
const soundThree = document.createElement('div');
const soundFour = document.createElement('div');
const soundFive = document.createElement('div');
const soundSix = document.createElement('div');
const soundSeven = document.createElement('div');
const soundEight = document.createElement('div');
const soundNine = document.createElement('div');
drums.append(soundOne, soundTwo, soundThree, soundFour,
    soundFive, soundSix, soundSeven, soundEight, soundNine);
mainContainer.appendChild(drums);

const audio1 = new Audio('sounds/boom.wav');
const audio2 = new Audio('sounds/clap.wav');
const audio3 = new Audio('sounds/hihat.wav');
const audio4 = new Audio('sounds/kick.wav');
const audio5 = new Audio('sounds/openhat.wav');
const audio6 = new Audio('sounds/boom.wav');
const audio7 = new Audio('sounds/ride.wav');
const audio8 = new Audio('sounds/snare.wav');
const audio9 = new Audio('sounds/tom.wav');

function soundPlayer(audio) {
    audio.play();
}

function addSound(element, sound) {
    element.addEventListener('click', () => {
        soundPlayer(sound);
    });
}


drums.id = 'drumsContainer';
soundOne.classList.add('sound-child');
addSound(soundOne, audio1);
soundTwo.classList.add('sound-child');
addSound(soundTwo, audio2);
soundThree.classList.add('sound-child');
addSound(soundThree, audio3);
soundFour.classList.add('sound-child');
addSound(soundFour, audio4);
soundFive.classList.add('sound-child');
addSound(soundFive, audio5);
soundSix.classList.add('sound-child');
addSound(soundSix, audio6);
soundSeven.classList.add('sound-child');
addSound(soundSeven, audio7);
soundEight.classList.add('sound-child');
addSound(soundEight, audio8);
soundNine.classList.add('sound-child');
addSound(soundNine, audio9);

const addTextElements = (container, soundText) => {
    const subTitle = document.createElement('p');
    subTitle.classList.add('sub-title');
    subTitle.innerHTML = soundText;

    container.append(subTitle);
};


addTextElements(soundOne, 'CLAP');
addTextElements(soundTwo, 'HIHAT');
addTextElements(soundThree, 'KICK');
addTextElements(soundFour, 'OPENHAT');
addTextElements(soundFive, 'BOOM');
addTextElements(soundSix, 'RIDE');
addTextElements(soundSeven, 'SNARE');
addTextElements(soundEight, 'TOM');
addTextElements(soundNine, 'TINK');
