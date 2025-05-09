import * as fs from 'fs';

let newPath: string = "./old/sample.txt";
let oldPath: string = "./new/sample.txt";

fs.rename(oldPath,newPath,(err: any)=>{
    if (err){
        console.log(err);
    }
    console.log("Moved.")
})