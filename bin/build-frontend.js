const childProcess = require('child_process');

childProcess.execSync('sh ./bin/build-frontend.sh', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
