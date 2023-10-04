class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const abhi = new User("abhishek")
// console.log(abhi.createId())

class Student extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Student("iphone", "i@phone.com")
console.log(iphone.createId());