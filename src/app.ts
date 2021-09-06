import express from 'express';

const app: express.Express = express();

app.post('/api/1.0/users', (req, res) => {
	return res.send({ message: 'User created' });
});

export default app;
