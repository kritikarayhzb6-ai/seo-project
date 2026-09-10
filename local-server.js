const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = 5500;
const productionImageUrl = 'https://seo-project-lake.vercel.app/images/og-image.png';
const localImageUrl = `http://127.0.0.1:${port}/images/og-image.png`;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

http.createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url.split('?')[0]);
  const relativePath = requestPath === '/' ? '/index.html' : requestPath;
  const filePath = path.resolve(root, `.${relativePath}`);

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    const isHtml = path.extname(filePath).toLowerCase() === '.html';
    const responseBody = isHtml
      ? content.toString().replaceAll(productionImageUrl, localImageUrl)
      : content;

    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'X-Robots-Tag': 'index, follow'
    });
    response.end(responseBody);
  });
}).listen(port, () => {
  console.log(`Local site: http://127.0.0.1:${port}`);
  console.log('X-Robots-Tag: index, follow');
});
