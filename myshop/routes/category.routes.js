import express from "express";
import { save , list ,getCategoryById ,deleteCategory,updateCategory} from "../controller/category.controller.js";

const router = express.Router() ;

router.post("/save", save) ;

router.get("/list",list) ;

router.post("/updateCategory",updateCategory) ;

router.get("/categoryById/:id",getCategoryById) ;

router.delete("/:categoryId",deleteCategory)

export default router ;