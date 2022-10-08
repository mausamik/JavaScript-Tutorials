function person(fn, ln){
    this.fn = fn ;
    this.ln = ln; 
    
    // method inside of fucntion 
    this.getfullname = function(){
        return this.fn + "  " + this.ln; 
    }
}

let p  = new person("John" , "Doe");
console.log(p.getfullname());

