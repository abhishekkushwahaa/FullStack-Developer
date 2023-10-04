// let myName = "balji     "
// let myCity = "orai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhi = function(){
    console.log(`abhi is present in all objects`);
}

Array.prototype.heyAbhi = function(){
    console.log(`Abhi says hello`);
}

// heroPower.abhi()
// myHeros.abhi()
// myHeros.heyAbhi()
// heroPower.heyAbhi()

// inheritance

const User = {
    name: "balji",
    email: "balji@google.com"
}

const Student = {
    learnJs: true
}

const Learning = {
    isAvailable: false
}

const JSSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: Learning
}

Student.__proto__ = User

// modern syntax
Object.setPrototypeOf(Learning, Student)

let anotherUsername = "Abhishek     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhi".trueLength()
"balji".trueLength()