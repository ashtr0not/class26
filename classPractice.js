//Create a class and extend it

class Vehicle{
    constructor(wheels,doors,color,topSpeed){
        this.wheels = wheels 
        this.doors = doors
        this.color = color
        this.speed = topSpeed
    }
    vehicleOn(){
        console.log('Vehicle is turning on')
    }
    vehicleOff(){
        console.log('Vehicle is turning off')
    }
    
}

class Motorcycle extends Vehicle{
    constructor(wheels,doors,color,topSpeed,brand){
        super(wheels,doors,color,topSpeed,brand)
        this.brand = brand 
    }
}

let suzuki = new Motorcycle(4,0,'black', 200, 'suzuki')