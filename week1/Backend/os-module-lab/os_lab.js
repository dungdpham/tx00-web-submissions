const os = require('os');
const { CLIENT_RENEG_LIMIT } = require('tls');

// Get the platform (e.g., 'win32', 'linux', 'darwin')
const platform = os.platform();
console.log('Platform:', platform);

// Get the operating system's hostname
const hostname = os.hostname();
console.log('Hostname:', hostname);

// Get the architecture (e.g., 'x64', 'arm')
const arch = os.arch();
console.log('Architecture:', arch);

// Get the total system memory in bytes
const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory, 'bytes');

// Get the free system memory in bytes
const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory, 'bytes');


console.log('CPU:', os.cpus()[1].model);
console.log('Network Interface:', Object.keys(os.networkInterfaces()));
console.log('User Info:', os.userInfo().username);