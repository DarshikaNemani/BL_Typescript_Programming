import * as fs from 'fs';

fs.readFile('sample.txt', 'utf-8',(err : any,data: any)=>{
    if(err){
        console.log('Error reading file:' + err);
        return;
    }
    console.log('File contents:', data);
})  