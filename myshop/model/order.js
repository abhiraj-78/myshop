import pool from "../db/dbConfig.js";
class Order{
    constructor (userid,orderdate,total_amout,delieveryaddress,contact,status){
        this.userid = userid ;
        this.orderdate = orderdate ;
        this.total_amout = total_amout ;
        this.delieveryaddress = delieveryaddress ; 
        this.contact = contact ;
        this.status = status ; 
    }
    
    orderPlace(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err) ;
                else{
                    // let sql = "SELECT SUM(price) AS total_amount FROM product INNER JOIN cartitems ON cartitems.productid = product.id inner join cart on cart.cartid = cartitems.cartid where userid = ?"
                    // con.query(sql,[this.userid],(err,res)=>{
                    //     if(err) reject(err)
                    //     else{
                        let sql = "insert into orderdetail (userid,orderdate,totalamout,delieveryaddress,contact,status) values(?,?,(SELECT SUM(price) AS total_amount FROM product INNER JOIN cartitems ON cartitems.productid = product.id inner join cart on cart.cartid = cartitems.cartid where userid = ?),?,?,?)" ;
                        con.query(sql,[this.userid,this.orderdate,[this.userid],this.delieveryaddress,this.contact,this.status],(err,res)=>{
                            // let sql = "insert into orderitem (orderid,productid,quantity) "
                            err ? reject(err) : resolve(res) ;   
                            con.release() ;
                        })
                    }
                    });
                }
        );
    }

}
export default Order ;