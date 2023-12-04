const fs = require('fs');


// fs.readFile('./data/test.txt', (err, data) => {
//     if (err) {
//         return;
//     }
//     console.log(data);
// })

// const rs = fs.createReadStream('./data/test.txt');
// rs.on('data', chunk => {
//     // 64 KB
//     console.log(chunk.length);
// })

const rs = fs.createReadStream("C:/Users/BAOME/Videos/11月14日.mp4");
const ws = fs.createWriteStream("C:/Users/BAOME/Videos/11月14日2.mp4");
// rs.on('data', chunk => {
//     ws.write(chunk)
// })
rs.pipe(ws);