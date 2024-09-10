import pool from "../db/dbConfig.js";

class Cart{
    static createCart(userid){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err) ;
                else{
                    let sql = "insert into cart (userid) values (?)"
                    con.query(sql,[userid],(err,res)=>{
                        err ? reject(err) : resolve(res) ;
                    });
                }
            });
        });
    }

    static addProductIntoCart(cartId,productid){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err) ;

                else{
                    let sql = "insert into cartitems (cartid,productid) values (?,?)"
                    con.query(sql,[cartId*1,productid*1],(err,res)=>{
                        err ? reject(err) : resolve(res) ;
                    }); 
                }
            });
        });
    }
    static removeItemFromCart(cart_item_id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){reject(err)}
                else{
                    let sql = "delete from cartitems where cart_item_id = ? ";
                    con.query(sql,cart_item_id*1,(err,res)=>{
                        err ? reject(err) : resolve(res) ;
                    })
                }
            })
        })

    }
}

export default Cart ;