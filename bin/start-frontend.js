const childProcess = require('child_process');

childProcess.execSync('sh ./bin/start-frontend.sh', {stdio:[0,1,2]});
