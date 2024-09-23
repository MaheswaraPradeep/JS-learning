//singleton

//object literals
const mysm=Symbol("nani");
const user={
    name:"nani",
    age:20,
    [mysm]:"mykey1",//syntax of key to use it as a symbol
    location:"vizag",
    email:"nani@gmail.com",
    lastlogin:["mon","sat"]
}
// console.log(user.email);
// console.log(user["email"]);//always use this
// console.log(user["mysm"]);

user.email="ammu@gmail.com"
// console.log(user.email);
//use Object.freeze(user) to not allow any changes in object

user.greeting=function(){
    console.log("hello");  
}
user.greeting2=function(){
    console.log(`hello,${this.name}`);  
}
console.log(user.greeting());
console.log(user.greeting2());

