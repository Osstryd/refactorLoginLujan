import { Router } from "express";
import * as view from '../controllers/views.controllers.js'

const router = Router()

router.get('/login', view.login);
router.get('/register', view.register);
router.get('/error-login', view.errorLogin);
router.get('/error-register', view.errorRegister);
router.get('/profile', view.profile);
router.get('/cart/:cid', view.getCart);
router.get('/products', view.getProducts);


export default router 