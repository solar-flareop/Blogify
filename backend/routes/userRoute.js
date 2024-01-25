import { Router } from "express";
import { testController } from "../controllers/user.js";
const router = Router();

router.get("/test", testController);

export default router;
