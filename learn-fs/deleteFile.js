const fs = require('node:fs');

// fs.unlink('./data/tst.txt', err => {
//     if (!err) {
//         console.log('删除成功');
//     }
// })

// node >= 14.4
fs.rm('./data/tst.txt', err => {
    if (!err) {
        console.log('删除成功');
    }
})