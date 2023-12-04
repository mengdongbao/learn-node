const { log } = require('node:console');
const path = require('node:path');


let absPath = path.resolve(__dirname, './index', '.\\a.js')
// log(path.sep)
// log(__dirname)
// log(__filename)
// log(absPath)
// log(path.parse(absPath))
// log(path.basename(absPath))
// log(path.extname(absPath))