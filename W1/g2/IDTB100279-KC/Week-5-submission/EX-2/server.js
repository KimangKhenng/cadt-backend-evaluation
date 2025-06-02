import express from 'express';
import articleRouter from './routes/articleRoutes.js';
import categoryRouter from './routes/categoriesRoutes.js';
import journalistRouter from './routes/journalistsRoutes.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/articles', articleRouter);
app.use('/categories', categoryRouter);
app.use('/journalists', journalistRouter);


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});