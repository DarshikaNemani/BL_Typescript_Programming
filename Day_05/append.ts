import * as fs from 'fs';

let content: string = 'ABCDEFG, appended.'

fs.appendFile('sample.txt', content, (err:any) =>{
    if(err){
        console.log('Error aa gaya:', err);
    }
    console.log('Appended');
})