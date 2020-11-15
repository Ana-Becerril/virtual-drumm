let mainContainer =document.getElementById("mainContainer")
let drums       =document.createElement("div")
const soundOne  =document.createElement("div")
const soundTwo  =document.createElement("div")
const soundThree  =document.createElement("div")
const soundFour   =document.createElement("div")
const soundFive   =document.createElement("div")
const soundSix   =document.createElement("div")
const soundSeven =document.createElement("div")
const soundEight =document.createElement("div")
const soundNine =document.createElement("div")
drums.append(soundOne,soundTwo,soundThree,soundFour,soundFive, soundSix, soundSeven, soundEight, soundNine)
mainContainer.appendChild(drums);

drums.id = "drumsContainer"
soundOne.classList.add('sound-child')
soundTwo.classList.add('sound-child')
soundThree.classList.add('sound-child')
soundFour.classList.add('sound-child')
soundFive.classList.add('sound-child')
soundSix.classList.add('sound-child')
soundNine.classList.add('sound-child')
soundSeven.classList.add('sound-child')
soundEight.classList.add('sound-child')

addTextElements = (container, icon, soundText) => {
    const titleElement = document.createElement("div")
    const subTitle = document.createElement('p')
    titleElement.classList.add('title-element')
    subTitle.classList.add('sub-title')
    titleElement.innerHTML = icon;
    subTitle.innerHTML = soundText;
    
    container.append(titleElement, subTitle);
}

var audio1=new Audio ("../sounds/boom.wav");
var audio2=new Audio ("../sounds/clap.wav")
var audio3=new Audio ("../sounds/hihat.wav")
var audio4=new Audio ("../sounds/kick.wav")
var audio5=new Audio ("../sounds/openhat.wav")
var audio6=new Audio ("../sounds/boom.wav")
var audio7=new Audio ("../sounds/ride.wav")
var audio8=new Audio ("../sounds/snare.wav")
var audio9=new Audio ("../sounds/tom.wav")

const soundsArr=[];

function addSound(element, sound){
 element.addEventListener( () => {
     soundPlayer(sound)
 })
}

function soundPlayer(audio){
    audio.play();
}


addTextElements(soundOne, '<img src="../images/clap.png" >', "CLAP")




