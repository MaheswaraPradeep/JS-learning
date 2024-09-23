const marvel=["thor","ironman","spiderman"];
const dc=["super","flash","bat"];
// const mix=marvel.concat(dc);//returns new array mixing those 2 
// console.log(mix);
//another method
const mix=[...marvel,...dc]; //spread operator
// console.log(mix);
const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real=another.flat(Infinity)//concats all other sub arrays to normal one
// console.log(real);

console.log(Array.isArray("nani"))
console.log(Array.from("nani"))
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


