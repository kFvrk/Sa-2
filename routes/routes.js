import express from 'express';
import user from './user.routes.js';
import company from './company.routes.js';
import login from './login.routes.js';
import model from './model.routes.js'

const router = express.Router();

router.use('/user', user);
router.use('/company', company);
router.use('/login', login);
router.use('/model', model);

export default router;