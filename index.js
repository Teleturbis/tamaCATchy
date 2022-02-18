const modal = document.querySelector("#modal");
const modalCats = document.querySelector("#chooseCat");
const modalName = document.querySelector("#chooseName");

const happinessDoc = document.querySelector("#happiness");
const tirednessDoc = document.querySelector("#tired");
const hungryDoc = document.querySelector("#hungry");

const catImg = document.querySelector("#catImg");

/*Cat Img´s*/
const siamProfil = "Katzen/Siam/profil.jpg";
const siamSleep = "Katzen/Siam/schlafen.jpg";
const siamPlay = "Katzen/Siam/spielen.jpg";
const siamEat = "Katzen/Siam/essen.jpg";
const siamPet = "Katzen/Siam/streicheln.jpg";

const bengalEat = "Katzen/Bengal/essen.jpg";
const bengalSleep = "Katzen/Bengal/schlafen.jpg";
const bengalPlay = "Katzen/Bengal/spielen.jpg";
const bengalPet = "Katzen/Bengal/streicheln.jpg";
const bengalProfil = "Katzen/Bengal/profil.jpg";

const perserProfil = "Katzen/Perser/profil.jpg";
const perserEat = "Katzen/Perser/essen.jpg";
const perserPet = "Katzen/Perser/streicheln.jpg";
const perserPlay = "Katzen/Perser/spielen.jpg";
const perserSleep ="Katzen/Perser/schlafen.jpg";

const britanianProfil = "Katzen/BritischKurzhaar/profil.jpeg";
const britanianEat = "Katzen/BritischKurzhaar/essen.jpg";
const britanianPet = "Katzen/BritischKurzhaar/streicheln.jpg";
const britanianPlay = "Katzen/BritischKurzhaar/spielen.jpg";
const britanianSleep = "Katzen/BritischKurzhaar/schlafen.jpg";

const sphynxProfil = "Katzen/Sphynx/profil.jpg";
const sphynxEat = "Katzen/Sphynx/essen.jpg";
const sphynxPet = "Katzen/Sphynx/streicheln.jpg";
const sphynxPlay = "Katzen/Sphynx/spielen.jpg";
const sphynxSleep = "Katzen/Sphynx/schlafen.jpg";


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

setInterval(function () {
    newCat.happiness -= 10;
    newCat.hungry += 10;
    newCat.tiredness += 5;
    updateStats();
}, 10000);




/*******************************************************/
/*                      FUNCTIONS                      */
/*******************************************************/




function updateStats(){

    happinessDoc.innerHTML = `Glück: ${newCat.happiness}`
    hungryDoc.innerHTML = `Hunger: ${newCat.hungry}`
    tirednessDoc.innerHTML = `Müde: ${newCat.tiredness}`

}

function resetImg(){

    let profil;

    switch(newCat.race){

        case "Siam":
            profil = siamProfil;
            break;
        
        case "Perser":
            profil = perserProfil;
            break;

        case "Britanian":
            profil = britanianProfil;
            break;

        case "Bengal":
            profil = bengalProfil;
            break;

        case "Sphynx":
            profil = sphynxProfil;
            break;

        default:
            break;

    }

    catImg.src = profil;
    actionMessage.innerHTML = "";

}

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
        this.tiredness = 0;

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

        if(this.tiredness === 100){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        } else if(this.tiredness > 85){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        }else{
            this.tiredness += 15;
            this.hungry += 10;
            updateStats();
            catImg.src = siamPlay;
            setTimeout(resetImg, 2000);
        }

    }

    sleep(){

        if(this.tiredness < 20){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
            setTimeout(resetImg, 2000);
        } else if(this.tiredness <= 50){
            this.tiredness = 0;
            this.hungry -= 5;
            updateStats();
            catImg.src = siamSleep;
            setTimeout(resetImg(), 2000);
        } else {
            this.tiredness -= 40;
            this.hungry += 5;
            updateStats();
            catImg.src = siamSleep;
            setTimeout(resetImg, 2000);
        }

    }

    feed(){

        if(this.hungry >= 20){
            if(this.hungry > 0){
                this.hungry -= 20;
                this.tiredness += 10;
                updateStats();
                catImg.src = siamEat;
                setTimeout(resetImg, 2000);
            }
        } else {
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Hungrig`;
            setTimeout(resetImg, 2000);
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            this.tiredness+= 5;
            updateStats();
            catImg.src = siamPet;
            setTimeout(resetImg, 2000);
        } else{
            actionMessage.innerHTML = `${this.nameOfCat} hat keine Lust gestreichelt zu werden`;
            setTimeout(resetImg, 2000);
        }

    }

}

class Bengal extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Bengal";
    }

    play(){

        if(this.tiredness === 100){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        } else if(this.tiredness > 85){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        }else{
            this.tiredness += 15;
            this.hungry += 10;
            updateStats();
            catImg.src = bengalPlay;
            setTimeout(resetImg, 2000);
        }

    }

    sleep(){

        if(this.tiredness < 20){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
            setTimeout(resetImg, 2000);
        } else if(this.tiredness <= 50){
            this.tiredness = 0;
            this.hungry -= 5;
            updateStats();
            catImg.src = bengalSleep;
            setTimeout(resetImg(), 2000);
        } else {
            this.tiredness -= 40;
            this.hungry += 5;
            updateStats();
            catImg.src = bengalSleep;
            setTimeout(resetImg, 2000);
        }

    }

    feed(){

        if(this.hungry >= 20){
            if(this.hungry > 0){
                this.hungry -= 20;
                this.tiredness += 10;
                updateStats();
                catImg.src = bengalEat;
                setTimeout(resetImg, 2000);
            }
        } else {
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Hungrig`;
            setTimeout(resetImg, 2000);
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            this.tiredness+= 5;
            updateStats();
            catImg.src = bengalPet;
            setTimeout(resetImg, 2000);
        } else{
            actionMessage.innerHTML = `${this.nameOfCat} hat keine Lust gestreichelt zu werden`;
            setTimeout(resetImg, 2000);
        }

    }
}

class Britanian extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Britanian";
    }

    play(){

        if(this.tiredness === 100){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        } else if(this.tiredness > 85){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        }else{
            this.tiredness += 15;
            this.hungry += 10;
            updateStats();
            catImg.src = britanianPlay;
            setTimeout(resetImg, 2000);
        }

    }

    sleep(){

        if(this.tiredness < 20){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
            setTimeout(resetImg, 2000);
        } else if(this.tiredness <= 50){
            this.tiredness = 0;
            this.hungry -= 5;
            updateStats();
            catImg.src = britanianSleep;
            setTimeout(resetImg(), 2000);
        } else {
            this.tiredness -= 40;
            this.hungry += 5;
            updateStats();
            catImg.src = britanianSleep;
            setTimeout(resetImg, 2000);
        }

    }

    feed(){

        if(this.hungry >= 20){
            if(this.hungry > 0){
                this.hungry -= 20;
                this.tiredness += 10;
                updateStats();
                catImg.src = britanianEat;
                setTimeout(resetImg, 2000);
            }
        } else {
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Hungrig`;
            setTimeout(resetImg, 2000);
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            this.tiredness+= 5;
            updateStats();
            catImg.src = britanianPet;
            setTimeout(resetImg, 2000);
        } else{
            actionMessage.innerHTML = `${this.nameOfCat} hat keine Lust gestreichelt zu werden`;
            setTimeout(resetImg, 2000);
        }

    }
}

class Perser extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Perser";
    }

    play(){

        if(this.tiredness === 100){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        } else if(this.tiredness > 85){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        }else{
            this.tiredness += 15;
            this.hungry += 10;
            updateStats();
            catImg.src = perserPlay;
            setTimeout(resetImg, 2000);
        }

    }

    sleep(){

        if(this.tiredness < 20){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
            setTimeout(resetImg, 2000);
        } else if(this.tiredness <= 50){
            this.tiredness = 0;
            this.hungry -= 5;
            updateStats();
            catImg.src = perserSleep;
            setTimeout(resetImg(), 2000);
        } else {
            this.tiredness -= 40;
            this.hungry += 5;
            updateStats();
            catImg.src = perserSleep;
            setTimeout(resetImg, 2000);
        }

    }

    feed(){

        if(this.hungry >= 20){
            if(this.hungry > 0){
                this.hungry -= 20;
                this.tiredness += 10;
                updateStats();
                catImg.src = perserEat;
                setTimeout(resetImg, 2000);
            }
        } else {
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Hungrig`;
            setTimeout(resetImg, 2000);
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            this.tiredness+= 5;
            updateStats();
            catImg.src = perserPet;
            setTimeout(resetImg, 2000);
        } else{
            actionMessage.innerHTML = `${this.nameOfCat} hat keine Lust gestreichelt zu werden`;
            setTimeout(resetImg, 2000);
        }

    }
}

class Sphynx extends Cat{
    constructor(catname){
        super(catname);
        this.race = "Sphynx";
    }

    play(){

        if(this.tiredness === 100){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        } else if(this.tiredness > 85){
            actionMessage.innerHTML = `${this.nameOfCat} möchte nicht Spielen.`
            setTimeout(resetImg, 2000);
        }else{
            this.tiredness += 15;
            this.hungry += 10;
            updateStats();
            catImg.src = sphynxPlay;
            setTimeout(resetImg, 2000);
        }

    }

    sleep(){

        if(this.tiredness < 20){
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Müde`;
            setTimeout(resetImg, 2000);
        } else if(this.tiredness <= 50){
            this.tiredness = 0;
            this.hungry -= 5;
            updateStats();
            catImg.src = sphynxSleep;
            setTimeout(resetImg(), 2000);
        } else {
            this.tiredness -= 40;
            this.hungry += 5;
            updateStats();
            catImg.src = sphynxSleep;
            setTimeout(resetImg, 2000);
        }

    }

    feed(){

        if(this.hungry >= 20){
            if(this.hungry > 0){
                this.hungry -= 20;
                this.tiredness += 10;
                updateStats();
                catImg.src = sphynxEat;
                setTimeout(resetImg, 2000);
            }
        } else {
            actionMessage.innerHTML = `${this.nameOfCat} ist nicht Hungrig`;
            setTimeout(resetImg, 2000);
        }

    }

    pet(){

        if(this.happiness <= 90){
            this.happiness += 10;
            this.tiredness+= 5;
            updateStats();
            catImg.src = sphynxPet;
            setTimeout(resetImg, 2000);
        } else{
            actionMessage.innerHTML = `${this.nameOfCat} hat keine Lust gestreichelt zu werden`;
            setTimeout(resetImg, 2000);
        }

    }
}