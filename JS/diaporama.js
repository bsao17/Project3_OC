"use strict";

//Création d'un class générique pour un diaporama
class Diaporama {
  constructor(picturesArray, displayPictures) {
    this.picturesArray = picturesArray;
    this.displayPictures = displayPictures;
    this.index = 0;
    this.intervalId = setInterval(this.changePictureNext, 5000);
  }

  //stop le défilement auto des images
  picturesStop() {
    clearInterval(this.intervalId);
  }

  //redémarre le défilement auto par rafraichissement de la page
  picturesPlay() {
    window.location.reload();
  }

  //Fonction de changement manuel d'image avec le bouton next
  changePictureNext() {
    if (this.index < picturesArray.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    displayPictures.src = picturesArray[this.index];
  }

  //Fonction de changement d'image avec les flêches du clavier
  changePicturesArrowKey() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        this.changePictureNext();
      } else if (e.keyCode === 37) {
        this.changePicturePrevious();
      }
    });
  }

  //Fonction de changement manuel d'image avec le bouton previous
  changePicturePrevious() {
    if (this.index != 0) {
      this.index--;
    } else {
      this.index = this.picturesArray.length - 1;
    }
    displayPictures.src = picturesArray[this.index];
  }

  //Lancement du défilement auto au chargement de la page
  picturesPlayOnLoad() {
    this.intervalId;
  }
}
