class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Student extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const balji = new Student("abhishek", "abhi@teacher.com", "123")

balji.logMe()
const learnJs = new User("LearnJs")

learnJs.logMe()

console.log(balji instanceof User);