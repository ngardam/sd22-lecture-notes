// Classes

/*
    Templates or blueprints for creating objects.

    They encapsulate data with code. JS is a prototype-based language that also has access to OOP principles.

    Classes are considered special functions and therefore can be defined as:
        -Class Declaration
        -Class Expression
*/

let teacher = {
    name: "Paul",
    subject: "SD",
    isTenured: true,
    isPolyglot: true
}


// * CLASSES are a type of special FUNCTION, and they have CONSTRUCTORS and BODYS and we CAPITALIZE them

class Teacher {
    //class method for creation and initialization of a class object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }

    //class body


}


//Creating new instance of Teacher class

let pNiemczyk = new Teacher("Paul", "Software dev", 2022, true);

console.log(pNiemczyk);

// Creating objects for every teach is laborious.
// Class gives us an easy template to reuse over and over again.

// Class Expression:

let House = class {
    constructor(address = '123 main', bedrooms = 2, bathrooms) {   // * we can set defaults in the argument declarations
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms
    }

    //class body
}

// * Class Methods

/*
    Method is a function that lives inside of a class
    that can be reused on any class instance.
*/

class Car {
    constructor(make, model, year, transmission){
        this.make = make;
        this.model = model;
        this.year = year;
        this.transmission = transmission;
    }

    greetCar() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }
}

let myCar = new Car('ford', 'focus', 2018, 'automatic')

myCar.greetCar();

//Challenge

/*
create a class object called Avenger.
It will have properties of name, 
superpower, age, isDead, keyMovie

Create an instance of that object with the superhero name and its properties

? Create a method that console logs the mname and keyMovie together

! Spicy Mode

Create a method that take the name of the superhero and checks it against two arrays: 
one with teamCap and one teamStark and returns which team the superhero is on as part of Vicil War

*/

let teamCap = ['Captain America'];

let teamStark = ['Iron Man'];

class Avenger {
    constructor(name, superpower, age, isDead, keyMovie){
        this.name = name;
        this.superpower = superpower;
        this.age = age;
        this.isDead = isDead;
        this.keyMovie = keyMovie
    }

    nameAndMovie() {
        console.log(`${this.name} of ${this.keyMovie}`);
    }

    whichTeam() {
        if (teamCap.includes(this.name)){
            console.log('Team Cap')
        } else {
            console.log('Team Stark')
        }
    }


}

let ironMan = new Avenger('Iron Man', 'Tech-Armor', 52, false, 'Iron Man')

let captainAmerica = new Avenger('Captain America', 'super strength', 32, false, 'Captain America and the Winter Soldier')

ironMan.nameAndMovie();

captainAmerica.nameAndMovie();

ironMan.whichTeam();

captainAmerica.whichTeam();