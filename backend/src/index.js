import 'dotenv/config';
import connectDB from './config/db.js';
import createApp from './app.js';

if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET is not configured. Server cannot start securely.');
  process.exit(1);
}

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import healthRoute from './routes/health.route.js';
import AppError from './utils/AppError.js';
import ERROR_CODES from './constants/errorCodes.js';
import errorHandler from './middleware/errorHandler.js';
import { requestIdMiddleware, attachRequestIdToResponse } from './middleware/requestId.js';
import repositoryRoutes from './routes/repository.routes.js';
import activityRoutes from './routes/activity.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(compression({ threshold: 1024 }));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(mongoSanitize());
app.use(requestIdMiddleware);
app.use(attachRequestIdToResponse);

morgan.token('request-id', (req) => req.requestId || '-');
app.use(morgan(':request-id :method :url :status :response-time ms - :res[content-length]'));
const app = createApp();
const PORT = process.env.PORT || 5000;

await connectDB();

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect database:', error);
    process.exit(1);
  }
};

startServer();