import { request, response } from "express";
import Product from "../model/product.js";

export const saveProduct = (request,response,next)=>{
    let filename = request.file.filename ;
    let brand = request.body.brand ;
    let title = request.body.title ;
    let price = request.body.price ;
    let description = request.body.description ;
    let image = "images/"+filename ;
    let categoryid = request.body.categoryid ;

    let product = new Product(null,brand,title,price,description,image,categoryid) ;

    product.saveProduct().then(res=>{

        return response.status(200).json({ data : res})
    }).catch(err=>{
        console.log(err);
        return response.status(200).json({ data : err});
    });
}

export const deleteProduct = (request,response,next)=>{

    let id = request.params.productid*1 ;

    Product.delete(id).then(res=>{
        return response.status(200).json({data : "Product delete successfully"}) ;
    }).catch(err=>{
        return response.status(500).json({dta : err }) ;
    }) ;
    
}
export const getProduct = (request,response,next)=>{

    let id = request.params.productid*1 ;
    
    Product.getProduct(id).then(res=>{
        return response.status(200).json({data : res});

    }).catch(err=>{
        console.log(err)
        return response.status(500).json({data : err}) ;
    }) ;
}
export const update = (request,response,next)=>{
    let brand = request.body.brand ;
    let title = request.body.title ;
    let price = request.body.price ;
    let description = request.body.description ;
    let image = request.body.image ;
    let id = request.body.id*1 ;

    Product.update(id,brand,title,price,description,image).then(res=>{
        return response.status(200).json({data : "Prouct update successfully"}) ;
    }).catch(err=>{
        console.log(err)
        return response.status(500).json({data : err}) ;
    }) ;

}   
export const getProductByCategory = (request,response,next)=>{
    
    let categoryid = request.body.categoryid ;
    console.log(categoryid) ;
    Product.getProductByCategory(categoryid).then(res=>{
        return response.status(200).json({data : res})
    }).catch(err=>{
        // console.log("Abhimanyu Rajput /n" + err )
        return response.status(500).json({data : err}) ;
    }) ;

}