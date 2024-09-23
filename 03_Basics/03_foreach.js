const c=["js","c++","py"];

// c.forEach( function (item) {console.log(item); //for each is one of the property of array and u pass a function to it without a name and use it
// } )

// c.forEach( (item)=>{console.log(item);} )

//another way
// function printme(item){
//     console.log(item);
    
// }
// c.forEach(printme);

// c.forEach( (item,index,c)=>{ //u can also pass index array
//     console.log(item,index,c);
        
// } )
const my=[
    {
        lang:"javascript",
        extension:"js"
    },
    {
        lang:"python",
        extension:"py"
    }
]

my.forEach( (item)=>{   
    console.log(item.lang,"-",item.extension);
    
} )







