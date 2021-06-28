import express from 'express';
import * as homeController from '../controllers/homeController';

export const router = express.Router();

router.get('/', homeController.home);
