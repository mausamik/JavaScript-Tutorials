class Person {
    // constructor defined by constructor keyword itself 
    constructor(name) {
        this.setName(name);
    }
    // get method --> return name 
    getName() {
        return this.name;
    }
    // set method 
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }

    /*
        ES6 has seperate "get" and "set" keywords for getter and setter methods 
        class Person {
            constructor(name) {
                this.name = name;
            }
            get name() {
                return this._name;
            }
            set name(newName) {
                newName = newName.trim();
                if (newName === '') {
                    throw 'The name cannot be empty';
                }
                this._name = newName;
            }
        }
    */
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith