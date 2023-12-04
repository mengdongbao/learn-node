const { warn, log } = require('console');
const fs = require('fs');
fs.stat('./data', (err, data) => {
    if (err) {
        warn(err.message);
    }
    log(data.isFile());
})