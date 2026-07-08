const { createServer } = require('https');
const { readFileSync } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
	key: readFileSync('./ssl/localhost+2-key.pem'),
	cert: readFileSync('./ssl/localhost+2.pem'),
};

app.prepare().then(() => {
	createServer(httpsOptions, (req, res) => {
		handle(req, res);
	}).listen(port, err => {
		if (err) throw err;
		console.log(`> Server started on https://localhost:${port}`);
	});
});
