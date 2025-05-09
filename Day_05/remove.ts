import * as fs from 'fs';

fs.unlink("./old/sample.txt", (err: any)=>{
    if(err){
        console.log(err);
    }
    console.log("Removed.");
})