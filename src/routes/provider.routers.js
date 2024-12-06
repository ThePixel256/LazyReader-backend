import { Router } from 'express';
import { createProvider, readProviders, readProvider, updateProvider, deleteProvider } from '../controllers/provider.controller.js';
import { authRequired } from '../middlewares/ValidateToken.js';
import { validateProvider } from '../middlewares/ValidateProvider.js'; 

const router = Router();

router.post('/providers', validateProvider, createProvider); 
router.get('/providers', readProviders);
router.get('/providers/:id', readProvider);
router.put('/providers/:id', validateProvider, updateProvider); 
router.delete('/providers/:id', deleteProvider);

export default router;
