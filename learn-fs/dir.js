const fs = require('fs');

// 支持递归创建
// fs.mkdir('./hh/aa', {recursive: true}, err => {console.log(err);})


// 读取文件夹
// fs.readdir('./', (err, data) => {
//     console.log(data);
// })


// 删除文件夹
fs.rm('./hh', {recursive: true}, err => {
    console.log(err);
})
