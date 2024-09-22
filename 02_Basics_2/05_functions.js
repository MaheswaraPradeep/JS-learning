function myname(){
    console.log("hi");
}
// myname();
function cal(...num1){//rest operator returns array of parameters
    return num1;
}
// console.log(cal(200,300,400));
const user={
    name:"nani",
    price:1000
}
function hand(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
hand(user)//can also pass the object syntax directly
const arr=[1,2,3,4,5];
function second(getArray){
    return getArray[2];
}
console.log(second(arr))
