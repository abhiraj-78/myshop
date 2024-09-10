import pool from "../db/dbConfig.js"

class Category{
    constructor(categoryid,categoryname){
            this.categoryid = categoryid ;
            this.categoryname = categoryname ;
    }

    save(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                let sql = "insert into category (categoryname) values(?)" 
                con.query(sql,[this.categoryname],(err,res)=>{
                    if(err){
                        reject(err) ;
                    }
                    else{
                        resolve(res) ;
                    }
                    con.release() ;
                });
            })
        }) ;
    }
    static list(){
        return new Promise((resolve,reject)=>{

            pool.getConnection((err,con)=>{
                let sql = "select * from category" ;
                con.query(sql,(err,res)=>{
                    err ? reject(err) : resolve(res) ;
                    con.release() ;
                })
            })
        })
    }
    static getCategoryById(categoryid){
        console.log(categoryid)
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                    reject(err)
                else{
                    let sql = "select * from category where categoryid = ?";
                    con.query(sql,[categoryid*1],(err,result)=>{
                    err ? reject(err) : resolve(result) ;
                })
                }
            })
        })
    }
    static deleteCategory(categoryId){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                    reject(err) ;
                else{
                    let sql = "delete from category where categoryid = ?"
                    con.query(sql,[categoryId],(err,res)=>{
                        err ? reject(err) : resolve(res) ;
                    })
                }
            });
        })
    }
    static updateCategory(categoryid,categoryname){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) 
                    reject(err) ;
                else{
                    let sql = "update category set categoryname = ? where categoryid = ? "; 
                    con.query(sql,[categoryname,categoryid],(err,res)=>{
                        err ? reject(err) : resolve(res) ; 
                    });
                }
            });
        });
    }
}
export default Category ;