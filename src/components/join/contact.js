import * as firebase from 'firebase/app'

class Contact {
    constructor() {
        this.sendBtn = document.querySelector(".contact__button");
    }

    init() {
        this.sendBtn.addEventListener('click', (e) => this.sendMessage(e));
    }

    sendMessage(event) {
        event.preventDefault();
        this.name = document.querySelector(".field__input-name").value;
        this.surname = document.querySelector(".field__input-email").value;
        this.experience = document.querySelector(".field__input-experience").value;
        this.bike = document.querySelector(".field__input-bike").checked;
        this.form = document.querySelector(".contact__form");
        if (!checkUser(this.experience, this.bike) || !checkNumber(this.experience)) {
            alert("Your experience must be more than 5 years and you must have your own bike!");
        }
        else {
            this.postData = {
                name: this.name,
                surname: this.surname,
                experience: this.experience,
                bike: this.bike
            };
            this.newPostKey = firebase.database().ref().child('members').push().key;
            this.updates = {};
            this.updates['/members/' + this.newPostKey] = this.postData;
            firebase.database().ref().update(this.updates);
            console.log('Message send');
        }
        this.form.reset();
    }

}

function checkUser(experience, bike) {
    return experience > 5 && bike;
}

function checkNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

export default Contact;