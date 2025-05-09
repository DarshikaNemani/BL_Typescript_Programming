import * as fs from 'fs';

let content:string = "Hello ji, me write se aaya hu.";

fs.writeFile('sample.txt', content,(err : any)=>{
    if(err){
        console.log("Error while writing", err);
    }
    console.log("Content added to file");
})