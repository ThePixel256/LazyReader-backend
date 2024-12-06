import { Router } from 'express';
import { createClient, readClients, readClient, updateClient, deleteClient,countClientsByState } from '../controllers/client.controller.js';
import { authRequired } from '../middlewares/ValidateToken.js';
import { validateClient } from '../middlewares/ValidateClient.js'; 

const router = Router();

router.post('/clients', validateClient, createClient); 
router.get('/clients', readClients);
router.get('/clients/:id', readClient); 
router.put('/clients/:id', validateClient, updateClient); 
router.delete('/clients/:id', deleteClient); 
router.get('/clients/count-by-state', countClientsByState);


export default router;
