const fs = require('node:fs');

const ws = fs.createWriteStream('./data/test.txt');
ws.write('1');
ws.write('2');
ws.write('3');
ws.close();