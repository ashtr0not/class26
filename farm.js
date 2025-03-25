class Animal{
    constructor(name,age,breed){
        this._name = name
        this._age = age
        this.breed = breed
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
}
class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age,breed)
    }
    speak(){
        console.log(`This ${this.breed} named ${this._name} is barking`)
    }
    
}

class Cat extends Animal{
    constructor(name,age,breed,sound){
        super(name,age,breed)
        this.sound = sound
    }
    speak(){
        console.log(`This ${this.breed} is ${this._age} and meows ${this.sound}`)
    }
}

let kaleo = new Dog('kaleo', .8, 'MinPin')
let kati = new Cat('kati', 2,'cat','loudy')