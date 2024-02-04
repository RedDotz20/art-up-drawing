import express from 'express';
import {
  createCanvas,
  loadUserCanvas,
  updateCanvas,
  deleteCanvas,
} from './canvas.controller';

export const canvasRouter = express.Router();

canvasRouter.post('/createCanvas', createCanvas);
canvasRouter.get('/loadUserCanvas', loadUserCanvas);
canvasRouter.delete('/deleteCanvas', deleteCanvas);
canvasRouter.put('/updateCanvas', updateCanvas);
