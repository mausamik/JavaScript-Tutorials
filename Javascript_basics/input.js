// HOW TO TAKE INPUT IN JS 
//prompt will not work in vscode 
// install using npm install prompt-sync 
// and always import this 
const prompt=require("prompt-sync")({sigint:true}); 

var age = prompt("Enter age : ")
var Name = prompt("Enter name : ")

println("Your name is " + Name + " and age is " + age )
