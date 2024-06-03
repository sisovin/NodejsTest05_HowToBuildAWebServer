// import the http module
/*
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
// Initialize the object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
// Define the port to listen on
const PORT = process.env.PORT || 3500;

// add a listener for the log event
/*myEmitter.on('log', (msg) => logEvents(msg));*/

//setTimeout(() => {
//    // Emit the event
//    myEmitter.emit('log', 'Log event emitted!');
//}, 2000);
/*
const filePath = path.join(__dirname, 'img', 'img1.jpg');

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File permissions:', stats.mode);
});

const newPermissions = 0o644; // Replace with the desired permissions in octal notation

fs.chmod(filePath, newPermissions, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File permissions changed successfully!');
});


const servefile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes(`image`) ? 'utf8' : ''          
        );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, { 'Content-Type': contentType });
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    }
    catch (err) {
        console.error(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt'); 
        response.statusCode = 500;
        response.end();
    }
};

// Create the minimal server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt'); 

    // Let the server path the request
   /* let path;*/

    //if (req.url === '/' || req.url === '/index.html') {
    //    res.statusCode = 200;
    //    res.setHeader('Content-Type', 'text/html');
    //    path = path.join(__dirname, 'views', 'index.html');
    //    fs.readFile(path, 'utf8', (err, data) => {
    //        res.end(data);
    //    });
    //}

    //switch (req.url) {
    //    case '/':
    //        res.statusCode = 200;
    //        res.setHeader('Content-Type', 'text/html');
    //        path = path.join(__dirname, 'views', 'index.html');
    //        fs.readFile(path, 'utf8', (err, data) => {
    //            res.end(data);
    //        });
    //        break;
//    }
    /*
    const extention = path.extname(req.url);
    let contentType;
    switch (extention) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath = 
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
            : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url) 
                    : path.join(__dirname, 'public', req.url);

    // Makes .html extension not required in the Browser
    if (!extention && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);
    if (fileExists) {
        // Serve the file
        servefile(filePath, contentType, res);
    }
    else {
        // Serve a 404
        // 301 redirect
        /*console.log(path.parse(filePath));*/
        /*
        switch (path.parse(filePath).base) {
            case `old-page.html`: 
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case `www-page.html`:
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
            // server a 404 response 
            servefile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }
});
// Start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*
myEmitter.on('log', (msg) => logEvents(msg));
    myEmitter.emit('log', 'Log event emitted!'); 
*/
*/