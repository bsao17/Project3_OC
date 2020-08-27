"use strict";

class RegexVerify{
    consructor(firstName, lastname){
        this.firstName = firstName
        this.lastname = document.querySelector(lastname)
    }

    fnameValidation(){
        const regex = /[-_+a-z+ ]+/gi
        firstName.addEventListener('input', ()=>{
            if(regex.test(firstName.value)){
                console.log('firstName : true');
                firstName.style.backgroundColor = "white";
            }else{
                firstName.value = '';
                firstName.style.backgroundColor = "red";
            }
        }) 
    }

    lnameValidation(){
        const regex = /[-_+a-z+ ]+/gi
        lastName.addEventListener('input', ()=>{
            
            if(regex.test(lastName.value)){
                console.log('lastName : true');
                lastName.style.backgroundColor = "white";
            }else{
                lastName.value = '';
                lastName.style.backgroundColor = "red";
            }
        }) 
    }
    
}

let patronymeValidation = new RegexVerify(document.getElementById('firstName'), document.getElementById('lastName') );

patronymeValidation.fnameValidation();
patronymeValidation.lnameValidation();

