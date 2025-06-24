import express from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory, articleByCategory } from '../controllers/categoriesController.js';

const categoryRouter = express.Router();
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.get('/:id/articles', articleByCategory);

export default categoryRouter;
