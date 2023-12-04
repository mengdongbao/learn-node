const fs = require('node:fs');

// 重命名 亦可用于移动文件
fs.rename('./data/test.txt', './data/tst.txt', err => {
    if (!err) {
        console.log(111);
    }
})