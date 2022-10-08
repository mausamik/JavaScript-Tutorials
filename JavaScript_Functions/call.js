
function box(h, w){
    this.h = h ; 
    this.w = w ;

}

// create a new fucntion/ constructor 
function widget(h, w, c)
{
    // call method to chain the constr. 
    box.call(h, w, this );
    this.c = c ;
}

let w = new widget(100, 200, "red") 
console.log(w)