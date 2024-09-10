import express from "express" ;
import OrderItem from "../model/orderitem.js";

export const orderitem = (request,response,next)=>{
    
    let orderid = request.body.orderid ;
    let productid = request.body.productid ;
    let quantity = request.body.quantity ;

    let order = new OrderItem(orderid,productid,quantity);

    order.conformOrder().then(res=>{
        return response.status(200).json({data : res}) ;
    }).catch(err=>{
        console.log(err) ;
        return response.status(500).json({data : err}) ;
 
    }) ;
}
