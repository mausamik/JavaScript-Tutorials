function person(fn, ln){
    this.fn = fn ;
    this.ln = ln; 
    
    // method inside of fucntion 
    this.getfullname = function(){
        return this.fn + "  " + this.ln; 
    }
    /*
        this method is not memory efficient --> because every time 
        we create a new instance of this fucntion ,the method is duplicated in every instance 

        Solution ?? --> Prototypes 
    */

    
}

let p  = new person("John" , "Doe");
console.log(p.getfullname());

