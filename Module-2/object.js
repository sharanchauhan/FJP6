// Empty Object
let a={}
console.log(a);//Printing the empty object
//Declaration and initialization
let obj1={
    Name:"Sharan Chauhan",
    phoneNo: 7042761320,
    Age:21,
    lastName:'Chauhan'
};
console.log(obj1);
// Declaration and initialization
let captAmerica={
    Name:'Steve',
    Age:150,
    Friends:["Natasha","Tony","Thor","Bruce","Vision"],
    address:{
        city:"Queens",
        state:"Washington"
    },
    sayHi:function(){
        console.log("Captain America Says Hi !!");
    }
}

console.log(captAmerica);

//How to access the keys and values in the object
console.log(captAmerica.Name);
console.log(captAmerica.Friends[3]);
console.log(captAmerica.address.city);
//console.log(captAmerica.sayHi());
captAmerica.sayHi();