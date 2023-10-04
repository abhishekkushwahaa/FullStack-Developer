const user = {
    username: "Abhishek",
    price: 'free',

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "balji"
// user.welcomeMessage()

// console.log(this);

// function balji(){
//     let username = "abhishek"
//     console.log(this.username);
// }

// balji()

// const balji = function () {
//     let username = "abhishek"
//     console.log(this.username);
// }

const balji =  () => {
    let username = "abhishek"
    console.log(this);
}


// balji()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "abhishek"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()