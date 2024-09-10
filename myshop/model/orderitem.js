import pool from "../db/dbConfig.js";

class OrderItem{
    constructor(orderid,productid,quantity){
        this.orderid = orderid*1 ;
        this.productid = productid*1 ;
        this.quantity = quantity*1 ;
    }

conformOrder(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err) ;
                else{
                    let sql = "insert into orderitem (orderid,productid,quantity) values (?,?,?) "
                    // for insert data in order details 

                    // let sql = "insert into orderitem"
                    con.query(sql,[this.orderid,this.productid,this.quantity],(err,res)=>{
                      if(err) reject(err) ;
                      else{
                        let sql = "update orderdetail set totalamout = (select sum(price*quantity) as totalamout from orderitem inner join product on orderitem.productid = product.id where orderid = ?) where orderid = ?"             
                        con.query(sql,[[this.orderid],this.orderid],(err,res)=>{
                            if(err) reject(err)
                            else{
                                sql = "delete cartitems where cartid = (select userid from orderdetil inner join orderitem on orderitem.orderid = orderdetail.orderid)  "
                                 resolve(res) ;
                                con.release()
                            }
                        })
                    }
                    })
                }
            })
        })
    }
}

export default OrderItem ;