"use strict";

//Classe Station pour l'affichage des markers sur la carte et des données en temps réel
class Station{
  constructor(address, position, status, available_bikes){
      this.address = address;
      this.position = position;
      this.status = status;
      this.available_bikes = available_bikes;
  }

  stationDisplay(){
    document.querySelector('#info1').innerHTML = this.address;
    document.querySelector('#info2').innerHTML = this.status;
    document.querySelector('#info3').innerHTML = this.available_bikes;
  }

  markerMapDisplay(){
    L.marker(this.position).addTo(mymap).on('click', ()=>{
      this.stationDisplay()
      }); 
  }

}

