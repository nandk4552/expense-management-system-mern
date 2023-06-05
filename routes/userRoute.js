import express from "express";
import { loginController, registerController } from "../controller/userController.js";

//* router object
const router = express.Router();

// * POST || LOGIN || /api/v1/users/ 
router.post("/login", loginController);

// * POST || REGISTER USER || /api/v1/users/register
router.post("/register", registerController);
export default router;
