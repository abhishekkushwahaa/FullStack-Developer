const User = {
    _email: 'abhi@shikha.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const balji = Object.create(User)
console.log(balji.email);