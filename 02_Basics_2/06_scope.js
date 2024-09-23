let a=20;
if(true){
    let a=10;
    let b=12;
    let c=13;
}
// console.log(a);//gives error since it is local scope

//nested scope
function one(){
    const name="nani";
    function two(){
        const wen="yt";
        // console.log(name);
        
    }
    // console.log(web); gives errors
    
    two()
}
one()

fun1(2);
function fun1(num){
    return num++;
}

// fun2(3);
// const fun2=function(num){
//     return num+2;
// } gives error because of hoisting concept. cannot call before initialisation







