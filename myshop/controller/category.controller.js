import { request, response } from "express";
import Category from "../model/category.js";

export const save = (request,response,next)=>{
    let categoryname = request.body.categoryname ;

    let category = new Category(null,categoryname) ;

    category.save().then(res=>{
        return response.status(200).json(res) ;
    }).catch(err=>{
        return response.status(500).json(err) ;
    }) ;
} 

export const list = (request,response,next)=>{

    Category.list().then(result=>{
        return response.status(200).json({data : result});
    }).catch(err=>{
        return response.status(500).json({error : "Internal server error"}) ;
    })

}
export const getCategoryById = (request,response,next)=>{

    let id = request.params.id ;

    Category.getCategoryById(id).then(result=>{
        return response.status(200).json({data : result});
    }).catch(err=>{
        return response.status(500).json({Error : "Internal server error /n"+ err})
    })
}
export const deleteCategory = (request,response,next)=>{

    let id = request.params.categoryId*1 ;

    Category.deleteCategory(id).then(res=>{
        return response.status(200).json({message : "category delete"})
    }).catch(err=>{
        console.log(err) ;
        return response.status(500).json({message :"Internal server error"}) ;
    }) ;
}

export const updateCategory = (request,response,next)=>{
    
    let categoryid = request.body.categoryid ;
    let categoryname = request.body.categoryname ;

    Category.updateCategory(categoryid,categoryname).then(resolve=>{
        return response.status(200).json({ data : "Category update successfully"}) ;
    }).catch(err=>{
        return response.status(500).json({data : err}) ;
    }) ;
}

