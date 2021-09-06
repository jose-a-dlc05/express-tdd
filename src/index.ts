import express from 'express';

const app: express.Express = express();

app.listen(3001, () => {
	console.log('server is listening on port 3001');
});
