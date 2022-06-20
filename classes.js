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

class Circle {

    static createCircleFromDia(dia) {
        return new Circle(dia/2);
    }


    constructor(radius){
        if (typeof radius === "number"){
            
            this.radius = radius
        } else {
            throw "Your parameter needs to be a number"
        }
    }

    circumference() {
        return this.radius * 2 * Math.PI;
    }

    area() {
        return this.radius**2 * Math.PI;
    }
}


let smallCircle = new Circle(10);

console.log(smallCircle.circumference());

console.log(smallCircle.area());

let wrongCircle = new Circle(12);


class Pizza {
    constructor(type){

        if (type.toLowerCase() !== "pineapple"){
            this.type = type;
        } else {
            throw "Pineapple is not an acceptable type of pizza."
        }
    }
}

let ham = new Pizza("Ham");

console.log(ham)

let pineapple = new Pizza("apple");

console.log(pineapple)


//Factory Functions

// Meeting with Morgan here, may have missed some notes

/*
    Functions that accept data andd return new instance of a Class back to you.

    Good for modifying the data coming in for instance.
*/

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2);
}

let circle10 = circleFromDiameter(10);

console.log(circle10);

let newCircle = circleFromDiameter(5);

console.log(newCircle.circumference());

// * some of this may be wrong

let c = Circle.createCircleFromDia(25);

console.log(c);

// ! static factory methods vs normal factory methods, look this up, unclear, static func vs reg func




// *Inheritence

class Options extends Car {
    constructor(
        make,
        model,
        year,
        transmission,
        hasLeather,
        hasComfortAccess,
        hasSportPackage
    ) {
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortAccess = hasComfortAccess
        this.hasSportPackage = hasSportPackage
    }

    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6     //* Ternary conditional
            ? `Your ${this.model} is out of warranty`
            : "Your warranty is still active"
    }
}

let porsche911 = new Options('Porsche', '911', 1912, 'PDK', true, true, false)

console.log(porsche911.isCPO(1975));

// Challenge

/*
    Extend the House class with one callse Sale.
    Sale should have properties:
        appraisalValue (int)
        listPrice(int)
        agent(str)
        isListed(bool)

    Create a method which calculates the difference between appraisalValue and the listPrice.

    Add condition which checks if the diff is more than 20% and says "Too expensive" or something if false, say good deal
    return should include the difference

*/

new House()

class Sale extends House {
    constructor(
        address,
        bedrooms,
        bathrooms,
        appraisalValue,
        listPrice,
        agent,
        isListed
    )
    {
        super(address, bedrooms, bathrooms);
        this.appraisalValue = appraisalValue;
        this.listPrice = listPrice;
        this.agent = agent;
        this.isListed = isListed;
    }

    isGoodDeal() {
        if (this.appraisalValue * 1.2 >= this.listPrice){
            console.log("Good Deal")
        } else {
            console.log("Bad Deal")
        }

        console.log(`Difference between appraisal and listing: ${this.listPrice - this.appraisalValue}` );
    }
}

let forSaleHouse = new Sale('123 main', 2, 24, 100, 121, 'Sammies McGee', true);

forSaleHouse.isGoodDeal();

console.log(new Date);

console.log(new Date);