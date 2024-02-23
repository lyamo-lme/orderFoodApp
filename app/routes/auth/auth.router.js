 import Router  from "express";
import { registerUser, loginUser } from "../../controllers/auth.contollers.js";

const authRouter = new Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

 export default authRouter ;
