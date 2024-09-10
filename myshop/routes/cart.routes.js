import express from 'express'
import { createCart,addProductIntoCart, removeItemFromCart } from "../controller/cart.controller.js";

let router = express.Router() ;

router.post("/addproduct",addProductIntoCart);
router.post("/:userid",createCart);
router.delete("/:cart_item_id",removeItemFromCart) ;export default router ;

