class Person{
    // define a constructor with keyword "constructor"
    constructor(firstname , lastname ){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // method 
    getfullname(){
        return this.firstname + " "+ this.lastname;
    }
}

// create obj 
let p1 = new Person("John" , "doe" );
let p2 = new Person("Ayush" , "K")

console.log(p1.getfullname());
console.log(p2.getfullname());