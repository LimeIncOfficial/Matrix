import tty from 'tty';
import child_process from 'child_process';
import fs from 'fs';
var editor = process.env.EDITOR || 'sh';

var child = child_process.spawn(editor, ['/Users/purple/Documents/Matrix/Matrix/stmux.sh'], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
    console.log("finished");
});