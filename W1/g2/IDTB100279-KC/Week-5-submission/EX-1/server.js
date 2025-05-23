import express from 'express';
import logger from './middleware/logger.js';
import userRouter from './routes/userRoutes.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(logger);
app.use('/users', userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
