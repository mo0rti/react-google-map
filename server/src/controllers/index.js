import { Router } from 'express';
import marker from './routes/map-marker';

const app = Router();
marker(app);

export default app;