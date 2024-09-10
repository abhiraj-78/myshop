import { orderPlace } from "../controller/order.controller.js";
import express from "express" ;

let router = express.Router() ;

router.post("/orderplace",orderPlace);

export default router ;