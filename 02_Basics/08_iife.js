//immediately invoked function expressions
(function chai(){
    console.log("db connected");
    
})();
//()() the first () is used for defining scope of iife as it should not disturb global scope so we place functio in it and second() is for calling it and always use ; at its end to call another iife
((name)=>{
    console.log("hello"+name);
})("nani");