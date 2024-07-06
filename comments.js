// Create web server
function createServer() {
    const http = require('http');
    const fs = require('fs');
    
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
        });
    });
    
    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
    }