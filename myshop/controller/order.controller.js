import Order from "../model/order.js";

export const orderPlace = (request,response,next)=>{
    
    let userid = request.body.userid*1 ;
    // let dateObj = new Date().toISOString().slice(0,19).replace('T',' ') ;
    let dateObj = new Date() ;
    let delieveryaddress = request.body.delieveryaddress ;
    let contact = request.body.contact*1 ;
    let cartid = request.body.cartid ;
    let status = request.body.status ;
    
    console.log(dateObj);

    let order = new Order(userid,dateObj,delieveryaddress,contact,cartid,status) ;

    order.orderPlace()
    .then(res=>{
        return response.status(200).json({data : "order placed successfully" + res});
    })
    .catch(err=>{
          return response.status(200).json({data : err});
        
    }) ;
}