const modal = document.querySelector("#modal");
const modalCats = document.querySelector("#chooseCat");
const modalName = document.querySelector("#chooseName");

const happinessDoc = document.querySelector("#happiness");
const tirednessDoc = document.querySelector("#tired");
const hungryDoc = document.querySelector("#hungry");

const catImg = document.querySelector("#catImg");

const sleepAction = document.querySelector("#sleep");
const feedAction = document.querySelector("#feed");
const playAction = document.querySelector("#play");
const petAction = document.querySelector("#pet");
const actionMessage = document.querySelector("#catAction");

let catName;
let cat;
let newCat;


/*******************************************************/
/*                  EVENTLISTENER                      */
/*******************************************************/

modalCats.addEventListener("click", (e) => {

    if(e.target.id != "chooseCat"){
        cat = e.target.id;
        chooseCatName();
    }

});

document.querySelector("#nameBtn").addEventListener("click", (e) => {

    let name = "";

    name = document.querySelector("#catName").value;

    if(name != ""){
        modal.style.display = "none";
        catName = name
        wirteStats();
        return;
    }

});

sleepAction.addEventListener("click", () => newCat === null ? null : newCat.sleep());
feedAction.addEventListener("click", () => newCat === null ? null : newCat.feed());
playAction.addEventListener("click", () => newCat === null ? null : newCat.play());
petAction.addEventListener("click", () => newCat === null ? null : newCat.pet());



/*******************************************************/
/*                        CODE                         */
/*******************************************************/

modal.style.display = "block";
chooseCat();




/*******************************************************/
/*                      FUNCTIONS                      */
/*******************************************************/


function chooseCat(){

    modalCats.style.display = "flex"

}

function chooseCatName(){

    modalCats.style.display = "none"
    modalName.style.display = "block"

}


function wirteStats(){

    const catTitle = document.querySelector("#cat");

    let catType;

    switch(cat){

        case "bengal":
            newCat = new Bengal (catName);
            catImg.src = "Katzen/Bengal/profil.jpg";
            break;

        case "britanian":
            newCat = new Britanian (catName);
            catImg.src = "Katzen/BritischKurzhaar/profil.jpeg";
            break;

        case "perser":
            newCat = new Perser (catName);
            catImg.src = "Katzen/Perser/profil.jpg";
            break;

        case "siam":
            newCat = new Siam (catName);
            catImg.src = "Katzen/Siam/profil.jpg";
            break;

        case "sphynx":
            newCat = new Sphynx (catName);
            catImg.src = "Katzen/Sphynx/profil.jpg";
            break;

    }


    console.log(newCat)

    catTitle.innerHTML = `Du hast eine ${newCat.race}-Katze mit dem Namen ${newCat.nameOfCat}`

    tirednessDoc.innerHTML = `Müde ${newCat.tiredness}`;
    hungryDoc.innerHTML = `Hunger ${newCat.hungry}`;
    happinessDoc.innerHTML = `Glück ${newCat.happiness}`

}


/*******************************************************/
/*                      CLASSES                        */
/*******************************************************/

class Cat{

    constructor(catname){

        this.nameOfCat = catname;
        this.hungry = 0;
        this.happiness = 100;
        this.tiredness = 100;

    }

}

/*******************************************************/
/*                     SUBCLASSES                      */
/*******************************************************/

class Siam extends Cat{

    constructor(catname){
        super(catname);
        this.race = "Siam";
    }

    play(){

        if(this.tiredness <= 0){

        } else {
            this.tiredness -= 15;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        }

    }

    sleep(){

        if(this.tiredness > 60){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
        } else if(this.tiredness >= 50){
            this.tiredness = 100;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        } else {
            this.tiredness += 40;
            tirednessDoc.innerHTML = `Müde ${tirednessATM}`;
        }

    }

    feed(){

        if(this.hungry >= 40){
            this.hungry += 20;
            hungryDoc.innerHTML = `Hunger ${this.hungry}`;
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            happinessDoc.innerHTML = `Glück ${this.happiness}`;
        }

    }

}

class Bengal extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Bengal";
    }

    play(){

        if(this.tiredness <= 0){

        } else {
            this.tiredness -= 15;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        }

    }

    sleep(){

        if(this.tiredness > 60){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
        } else if(this.tiredness >= 50){
            this.tiredness = 100;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        } else {
            this.tiredness += 40;
            tirednessDoc.innerHTML = `Müde ${tirednessATM}`;
        }

    }

    feed(){

        if(this.hungry >= 40){
            this.hungry += 20;
            hungryDoc.innerHTML = `Hunger ${this.hungry}`;
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            happinessDoc.innerHTML = `Glück ${this.happiness}`;
        }

    }
}

class Britanian extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Britanian";
    }

    play(){

        if(this.tiredness <= 0){

        } else {
            this.tiredness -= 15;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        }

    }

    sleep(){

        if(this.tiredness > 60){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
        } else if(this.tiredness >= 50){
            this.tiredness = 100;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        } else {
            this.tiredness += 40;
            tirednessDoc.innerHTML = `Müde ${tirednessATM}`;
        }

    }

    feed(){

        if(this.hungry >= 40){
            this.hungry += 20;
            hungryDoc.innerHTML = `Hunger ${this.hungry}`;
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            happinessDoc.innerHTML = `Glück ${this.happiness}`;
        }

    }
}

class Perser extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Perser";
    }

    play(){

        if(this.tiredness <= 0){

        } else {
            this.tiredness -= 15;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        }

    }

    sleep(){

        if(this.tiredness > 60){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
        } else if(this.tiredness >= 50){
            this.tiredness = 100;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        } else {
            this.tiredness += 40;
            tirednessDoc.innerHTML = `Müde ${tirednessATM}`;
        }

    }

    feed(){

        if(this.hungry >= 40){
            this.hungry += 20;
            hungryDoc.innerHTML = `Hunger ${this.hungry}`;
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            happinessDoc.innerHTML = `Glück ${this.happiness}`;
        }

    }
}

class Sphynx extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Sphynx";
    }

    play(){

        if(this.tiredness <= 0){

        } else {
            this.tiredness -= 15;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        }

    }

    sleep(){

        if(this.tiredness > 60){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
        } else if(this.tiredness >= 50){
            this.tiredness = 100;
            tirednessDoc.innerHTML = `Müde ${this.tiredness}`;
        } else {
            this.tiredness += 40;
            tirednessDoc.innerHTML = `Müde ${tirednessATM}`;
        }

    }

    feed(){

        if(this.hungry >= 40){
            this.hungry += 20;
            hungryDoc.innerHTML = `Hunger ${this.hungry}`;
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            happinessDoc.innerHTML = `Glück ${this.happiness}`;
        }

    }
}