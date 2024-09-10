import { request, response } from "express";
import Cart from "../model/cart.js";

export const  createCart = ((request,response,next)=>{
    let userid = request.params.userid ;

    Cart.createCart(userid).then(res=>{
        return response.status(200).json({data : "cart added successfully"});
    }).catch(err=>{
        console.log(err) ;
        return response.status(200).json({data : "cart not added"});
    }) ;    
}) ;

export const addProductIntoCart = (request,response,next)=>{
    let cartid = request.body.cartid ;
    let productid = request.body.productid ;
    
    Cart.addProductIntoCart(cartid,productid).then(res=>{
       return response.status(200).json({data : res}) ;
    }).catch(err=>{
        return response.status(500).json({data : err}) ;
    });   
}

export const removeItemFromCart =(request,response,next)=>{
    let cart_item_id = request.params.cart_item_id ;

    Cart.removeItemFromCart(cart_item_id).then(res=>{
        return response.status(200).json({data : "item remove successfully"}) ;
    }).catch(err=>{
        return response.status(500).json({data : err}) ;
    }) ;

}

