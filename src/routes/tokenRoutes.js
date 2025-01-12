
import { Router } from "express";
const router = new Router();
import TokenController from "../controllers/TokenController";

router.post('/', TokenController.store);

export default router;
