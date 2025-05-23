import express from 'express';
import { getAllJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist, articleByJournalist } from '../controllers/journalistsController.js';

const journalistRouter = express.Router();
journalistRouter.get('/', getAllJournalists);
journalistRouter.get('/:id', getJournalistById);
journalistRouter.post('/', createJournalist);
journalistRouter.put('/:id', updateJournalist);
journalistRouter.delete('/:id', deleteJournalist);
journalistRouter.get('/:id/articles', articleByJournalist);

export default journalistRouter;
