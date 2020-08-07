'use strict';

/*---------------------------------------------------DEBUT CODE DIAPORAMA-----------------------------------------------------------------*/

// déclaration et initialisation du tableau et de la constante pour le constructeur de la class Diaporama
const picturesArray =  [
    'pictures/img1.jpeg',
    'pictures/img2.jpeg',
    'pictures/img3.jpeg',
    'pictures/img4.jpeg',
    'pictures/img5.jpeg',
    'pictures/img6.png',
    'pictures/img7.jpg',
    'pictures/img8.jpg'
]

const displayPictures = document.getElementById('display');


// Instance de la class Diaporama
const carousel = new Diaporama( picturesArray, displayPictures)

//lancement diaporama auto
window.onload = carousel.picturesPlayOnLoad();

//Fonction play, qui réactualise la page pour relancer le diaporama
let play = document.getElementById('play');
play.addEventListener('click', ()=>{
    carousel.picturesPlay();
})

//Connexion de la fonction stop au bouton pause
let pause = document.getElementById('pause');
pause.addEventListener('click', ()=>{
    carousel.picturesStop();
})

//connexion de la fonction changePicture au bouton next pour un changement manuel vers la droite
let next = document.getElementById('next');
next.addEventListener('click', ()=>{
    carousel.changePictureNext()
})

//connexion de la fonction changePicture au bouton previous pour un changement manuel vers la gauche
let previous = document.getElementById('previous');
previous.addEventListener('click', ()=>{
    carousel.changePicturePrevious()
})

//Fonction qui change le texte toutes les 5 secondes
let textIndex = 0;
function textChange(){
    let textArray = [' location de vélo', ' bike renting', ' alquiler de bicicletas', ' Fahrradverleih', ' fiets huur', ' noleggio bici'];
    if(textIndex < textArray.length -1){
        textIndex++;
    }
    else{
        textIndex = 0;
    }
    document.getElementById('title').innerHTML = textArray[textIndex];
}

setInterval(textChange, 5000);


carousel.changePicturesArrowKey();


// URL API
let jcdecaux = 'https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=e56f43cd9e4a4aa5260f59360a683fa28aaa4e6b';

//requête AJAX et instanciation de la class Station
ajaxRequest(jcdecaux);



let rentSendButton = document.getElementById('bouton');

//Instance de la class Counter
let vTime = new Counter(1200, 0, document.querySelector('#count'))

document.querySelector('#buttonConfirmResa').addEventListener('click', ()=>{
    vTime.setCounter();
    document.querySelector('#buttonConfirmResa').disabled = true;
})


//Fonction de récupération/enregistrement/restitution des données utilisateurs
const requirePersonalData = ()=>{
    
    rentSendButton.disabled = true;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let stationAddress = document.getElementById('info1').textContent;
    
    
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    sessionStorage.setItem('station', stationAddress)
    
    
    document.getElementById('rename').innerHTML = firstName;
    document.getElementById('name').innerHTML = lastName;
    document.getElementById('stationRentInformation').innerHTML = stationAddress + ' à Toulouse';
}


//Function auto invoquée (IIFE), pour le dataSubmit et rechargement des données après rafraichissement de la page
(
    ()=>{

        rentSendButton.addEventListener('click', requirePersonalData)


        window.addEventListener('load', ()=>{
            document.querySelector('#buttonConfirmResa').style.opacity = "0";
            if(localStorage.getItem("firstName")){
                document.getElementById('firstName').value = localStorage.firstName;
            }
            if(localStorage.getItem("lastName")){
                document.getElementById('lastName').value = localStorage.lastName;
            }
            document.getElementById('info1').textContent = sessionStorage.station;

        })
  
        if(window.location.reload){
            
            rentSendButton.disabled = true;
            document.querySelector('#buttonConfirmResa').disabled = true;
            if(localStorage.getItem('lastName')){
                document.getElementById('name').innerHTML = localStorage.lastName;
            }
            if(localStorage.getItem('firstName')){
                document.getElementById('rename').innerHTML = localStorage.firstName;
            }

            if(sessionStorage.getItem('station')){
                document.getElementById ('stationRentInformation').innerHTML = sessionStorage.station;
            }
            
            vTime.counterContinue()
        }
    }
)()


// canvas

let rentSignature = new Signature('canvasDisplay', 'buttonClearSignature');
rentSignature.makeSignature();
rentSignature.clear(0, 0);


