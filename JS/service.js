'use strict';

//Function pour requête Ajax plus instance de la class Station
function ajaxRequest(urlApi){
    fetch(urlApi)
    .then(result=>result.json())
    .then(reponse =>{
          for(let i in reponse){
            let dataStations = new Station(reponse[i].address, reponse[i].position, reponse[i].status, reponse[i].available_bikes);
            dataStations.markerMapDisplay()
          }
         
    })
}
