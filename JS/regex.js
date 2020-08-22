"use strict";

class RegexVerify{
    consructor(firstName, lastname){
        this.firstName = firstName
        this.lastname = document.querySelector(lastname)
    }

    fnameValidation(){
        const regex = /[-_+a-z+ ]+/gi
        firstName.addEventListener('input', ()=>{
            let self = this;
            if(regex.test(firstName.value)){
                console.log('firstName : true');
            }else{
                alert('Veuillez n\'entrer que des lettres')
                firstName.value = '';
            }
        }) 
    }

    lnameValidation(){
        const regex = /[-_+a-z+ ]+/gi
        lastName.addEventListener('input', ()=>{
            
            if(regex.test(lastName.value)){
                console.log('lastName : true');
            }else{
                alert('Veuillez n\'entrer que des lettres')
                lastName.value = '';
            }
        }) 
    }
    
}

let patronymeValidation = new RegexVerify(document.getElementById('firstName'), document.getElementById('lastName') );

patronymeValidation.fnameValidation();
patronymeValidation.lnameValidation();

