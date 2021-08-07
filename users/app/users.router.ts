import { Router } from 'express';
import { ROUTES } from './index.constants';
import { getUserData, login, register } from './users.controller';
import { isLoggedIn, validateUserInputData } from './users.middleware';

const router = Router();

//user registration rout
router.post(ROUTES.REGISTER, validateUserInputData, register);
router.post(ROUTES.LOGIN, validateUserInputData, login);
router.get(ROUTES.ME, isLoggedIn, getUserData);

export default router;
