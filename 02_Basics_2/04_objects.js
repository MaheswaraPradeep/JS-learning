// const tinderUser=new Object(); //single ton declaration
const tinderUser={}
tinderUser.id="1233";
tinderUser.name="nani";
tinderUser.isLoggedIn=false;
//concat objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderUser));//gives array of keys
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checks if it has a specific key

const course={
    name:"js",
    price:100,
    teacher:"hitesh"
}
const{name:n}=course; //this de-structures the names as shorter version to use 
console.log(n);

//apis
// {
//     "name":"nani",
//     "course":"js",
//     "price":"free"
// }


