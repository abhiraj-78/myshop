import { response } from "express";
import pool from "../db/dbConfig.js";
class Product{

    constructor(id,brand,title,price,description,image,categoryid){
        this.id = id ;
        this.brand = brand ;
        this.title = title ;
        this.price = price ;
        this.description = description ;
        this.image = image ;
        this.categoryid = categoryid ;
    }

    saveProduct(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err) ;
                }
                else{
                    let sql = "insert into product (brand,title,price,description,image,categoryid) values(?,?,?,?,?,?)" 
                    con.query(sql,[this.brand,this.title,this.price,this.description,this.image,this.categoryid],(err,res)=>{
                        err ? reject(err) : resolve(res) ;
                    });
                }
            })
        });
    }
    static delete(id){
            return new Promise((resolve,reject)=>{
                pool.getConnection((err,con)=>{
                    if(err){
                        reject(err) ;
                    }
                    else{
                        let sql = "delete from product where id = ?"
                        con.query(sql,[id],(err,res)=>{
                            err ? reject(err) : resolve(res) ;
                        })
                    }
                })
            })
    }

    
    static getProduct(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                reject(err);
            else{
                let sql = "select * from product where id = ?";
                con.query(sql,[id],(err,res)=>{

                    err ? reject(err) : resolve(res) ;
                    
                })
            }
            })
        })
    }
    static getProductByCategory(categoryid){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                reject(err);
            else{
                let sql = "select * from product where categoryid = ?";
                con.query(sql,[categoryid*1],(err,res)=>{
                    err ? reject(err) : resolve(res) ;
                })
            }
            })
        })
    }
x
    static update(id,brand,title,price,description,image){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) {
                    reject(err);
                }
                else{
                    let sql = "update product set brand = ? ,title = ? ,price = ? ,description = ?,image = ? where id = ? "; 

                    con.query(sql,[brand,title,price,description,image,id],(err,con)=>{

                        err ? reject(err) : resolve(con) ;

                    })    
                }
            })
        });
    }
    
}
export default Product ;