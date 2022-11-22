import express from 'express';
import user from './user.routes.js';
import company from './company.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/company', company);

export default router;