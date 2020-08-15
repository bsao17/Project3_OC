"use strict";

class Counter {
  constructor(minutes, seconds, display) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.display = display;
    this.intervalId = null;
  }

  /**-------------------------------------------------------------------------------------------------------------------------------------- */

  /**paramétrage du compteur et lancement du compteur à interval d'une seconde */
  setCounter() {
    let counterMinutes;
    let counterSeconds;

    this.intervalId = setInterval(() => {
      counterMinutes = this.minutes--;
      counterSeconds = this.seconds--;

      this.display.innerHTML =
        Math.floor(counterMinutes / 60) + " min " + counterSeconds + " sec ";
      sessionStorage.setItem("minuteStore", counterMinutes);
      sessionStorage.setItem("secondStore", counterSeconds);

      if (counterSeconds <= 0) {
        this.seconds = 59;
      } else if (counterMinutes <= 0) {
        this.display.innerHTML = " aucune réservation en cours";
        clearInterval(this.intervalId);
        rentSendButton.disabled = false;
        document.querySelector("#buttonConfirmResa").disabled = false;
        sessionStorage.removeItem("minuteStore");
        sessionStorage.removeItem("secondStore");
        window.location.reload();
      }
    }, 1000);
  }

  /**----------------------------------------------------------------------------------------------------------------------------------------------- */

  //Redémarrage du compteur aprés rafraichissement de la page
  counterContinue() {
    let storageMinutes = Number(sessionStorage.getItem("minuteStore"));
    let storageSeconds = Number(sessionStorage.getItem("secondStore"));

    this.intervalId = setInterval(() => {
      this.display.innerHTML =
        Math.floor(storageMinutes-- / 60) +
        " mns et " +
        storageSeconds-- +
        " sec";
      sessionStorage.setItem("minuteStore", storageMinutes);
      sessionStorage.setItem("secondStore", storageSeconds);

      if (storageSeconds < 0) {
        storageSeconds = 59;
      } else if (storageMinutes <= 0) {
        this.display.innerHTML = "Aucune réservation en cours";
        clearInterval(this.intervalId);
        rentSendButton.disabled = false;
        document.querySelector("#buttonConfirmResa").disabled = false;
        sessionStorage.removeItem("minuteStore");
        sessionStorage.removeItem("secondStore");
        return;
      }
    }, 1000);
  }
}
