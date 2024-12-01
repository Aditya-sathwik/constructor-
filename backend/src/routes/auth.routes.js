// import { Router } from "express";

// const router = Router();

// router.post("api/v1/register", (req, res) => {
//     res.send("register");
// });
// router.post("api/v1/login", (req, res) => {
//     res.send("login");
// });

// export default authRoutes;


// auth.routes.js

import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;