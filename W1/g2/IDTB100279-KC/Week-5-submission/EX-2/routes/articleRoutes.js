import express from 'express';
import { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articlesController.js';

const articleRouter = express.Router();
articleRouter.get('/', getAllArticles);
articleRouter.get('/:id', getArticleById);
articleRouter.post('/', createArticle);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle);

export default articleRouter;
