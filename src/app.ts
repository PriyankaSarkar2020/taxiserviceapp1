import express from 'express';
import router from './routes/router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Priyanka Server is running on port ${port}`);
});