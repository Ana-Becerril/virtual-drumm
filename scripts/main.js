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

var audio1=new Audio ("sounds/boom.wav");
var audio2=new Audio ("sounds/clap.wav")
var audio3=new Audio ("sounds/hihat.wav")
var audio4=new Audio ("sounds/kick.wav")
var audio5=new Audio ("sounds/openhat.wav")
var audio6=new Audio ("sounds/boom.wav")
var audio7=new Audio ("sounds/ride.wav")
var audio8=new Audio ("sounds/snare.wav")
var audio9=new Audio ("sounds/tom.wav")

function addSound(element, sound){
    element.addEventListener('click',() => {
        soundPlayer(sound)
    })
   };   
   
   function soundPlayer(audio){
       audio.play();
   }


drums.id = "drumsContainer"
soundOne.classList.add('sound-child')
addSound(soundOne,audio1);
soundTwo.classList.add('sound-child')
addSound(soundTwo,audio2);
soundThree.classList.add('sound-child')
addSound(soundThree,audio3);
soundFour.classList.add('sound-child')
addSound(soundFour,audio4);
soundFive.classList.add('sound-child')
addSound(soundFive,audio5);
soundSix.classList.add('sound-child')
addSound(soundSix,audio6);
soundSeven.classList.add('sound-child')
addSound(soundSeven,audio7);
soundEight.classList.add('sound-child')
addSound(soundEight,audio8);
soundNine.classList.add('sound-child')
addSound(soundNine,audio9);

addTextElements = (container, icon, soundText) => {
    const titleElement = document.createElement("div")
    const subTitle = document.createElement('p')
    titleElement.classList.add('title-element')
    subTitle.classList.add('sub-title')
    titleElement.innerHTML = icon;
    subTitle.innerHTML = soundText;
    
    container.append(titleElement, subTitle);
}


const soundsArr=[];




addTextElements(soundOne, '<img src="../images/clap.png" >', "CLAP")



