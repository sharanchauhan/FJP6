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
    isAvenger:false,
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
//Adding a new key to the object
captAmerica.isAvenger=true;
console.log(captAmerica);
captAmerica.address.state='USA';
console.log(captAmerica);
//Deleting a key from the object
console.log(captAmerica);// Before deletion
delete captAmerica.isAvenger;
console.log(captAmerica);// After deletion
console.log(captAmerica['Name']);
console.log(captAmerica['Address']['city']);// Second method to access keys and values in the object

