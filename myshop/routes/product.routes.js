import { saveProduct ,deleteProduct,getProduct,update,getProductByCategory } from "../controller/product.controller.js";
import express from 'express' ;
import multer from "multer" ;

const upload = multer({dest :"public/images/"});

let router = express.Router() ;

router.post("/saveproduct",upload.single("image"),saveProduct);
router.post("/updateProduct",update);
router.get("/categoryid",getProductByCategory) ;
router.delete("/:productid",deleteProduct); 
router.get("/:productid",getProduct);

export default router ;