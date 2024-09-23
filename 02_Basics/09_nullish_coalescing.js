//nullish coalescing operator ie null ?? undefined
let val1;
// val1=10??12 //basically here it assignas values to it. in database we may get null or no repsonse so inthat case we use this. if we have value and undefined it assigns value and if we have null and undefined it assignes second value since 1st is null or undefined. and in case of multiple values and null it assignbs first value
// val1=10??null
val1=undefined??null??3
console.log(val1);
