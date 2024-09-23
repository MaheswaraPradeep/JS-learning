const user={
    name:"nani",
    price:900,

    welcome:function(){
        console.log(`welcome ${this.name}`)
    }
}
// user.welcome();
// user.name="ammu";
// user.welcome();
// console.log(this)-gives empty object since we are not in node and in global context and not in specific scope
// function chai(){
//     // console.log(this);
// }
// chai();

const chai=()=>{
    let name="nani";
    // console.log(this.name); //gives undefined since arrow function has not its own scope and depends on parent scope
    
}
chai()

const add2=(num1,num2)=>num1+num2//no need of return because it is implicit return and{} but in case of objects use {}
console.log(add2(2,3))


