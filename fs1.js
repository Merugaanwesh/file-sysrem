// let fs = require("fs")
// fs.appendFile('./next1.txt',"Basic Level SEO Interview Questions & Answers Intermediate Level SEO Interview Questions & Answers Expert Level SEO Interview Questions & Answers",(err,data)=>{
//     if(err){
//         console.log("it is somthing error");
//     }
//     else{
//         console.log("text is susscesfully inset");
//     }
// })
// //let data = fs.writeFileSync("./next.txt","");
// //console.log("");
// console.log("byyyy.......");

const fs = require("fs");
fs.rename("./next1.txt","hello.txt",(err)=>{
    if(err){
        console.log("file is not deleted");
    }
    else{
        console.log("file name is changed");
    }
})
