const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

// for (const key in myobj) {
//     console.log(`${key} is ${myobj[key]}`);
       
//     }

    const p=["js","py","c++"];
    for (const key in p) {
        // console.log(key);//gives values of indexes
        console.log(p[key]);
        
    }

    // maps
const map=new Map()
map.set("IN","iNDIA")
map.set("FR","France")
map.set("CA","Canada")
// console.log(map);
// we cannot iterate using for in
