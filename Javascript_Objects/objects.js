/*
3 ways to create an object 

By object literal
By creating instance of Object directly (using new keyword)
By using an object constructor (using new keyword)

*/

//1. By object literal

// obj = {id : 102 , name : "Mausami" , salary : 2000}
// console.log("Id is : " + obj.id + " Name is : " + obj.name)

// // 2. By creating instance of Object directly (using new keyword)

// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi Malik";  
// emp.salary=50000;  
// console.log("Id is : " + emp.id + " Name is : " + emp.name)

// 3. By using an object constructor (using new keyword)

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
e=new emp(103,"Vimal Jaiswal",30000);  
console.log("Id is : " + e.id + " Name is : " + e.name)
