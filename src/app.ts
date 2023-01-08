import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { notFoundHandler } from './middleware/not-found.middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
routes(app);
app.use(notFoundHandler);

export default app;
