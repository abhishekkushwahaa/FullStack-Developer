const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const balji = {
    name: 'abhishek',
    price: 0,
    isAvailable: true,

    balji: function(){
        console.log("Learn JS");
    }
}

console.log(Object.getOwnPropertyDescriptor(balji, "name"));

Object.defineProperty(balji, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(balji, "name"));

for (let [key, value] of Object.entries(balji)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}