import express from "express";
import { orderitem } from "../controller/orderItem.controller.js";
    
let router = express.Router()

router.post("/orderit",orderitem) ;

export default router ;
