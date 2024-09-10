import { response } from "express";
import pool from "../db/dbConfig.js"
class Admin{
    constructor(id,username,password){
        this.id = id ;
        this.username = username ;
        this.password = password ;
    }

    signUp(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err) ;
                }
                else{
                    let sql = "insert into admin (username,pass) values(?,?)"
                    con.query(sql,[this.username,this.password],(err,result)=>{
                        err ? reject(err) : resolve(result) ;
                        con.release();
                    }) ;
                }
            });
        });
        }
    signIn(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err) ;
                    console.log("connection"+err);
                }
                else{
                    let sql = "select * from admin where username = ? and pass = ? " ;
                    // console.log(this.username+""+this.password);
                    con.query(sql,[this.username,this.password],(err,result)=>{
                       if(err){
                            reject(err) ;
                       }
                       else if(result.length !=0 ){
                            resolve(result)
                            console.log(result);
                       }
                       else{
                            console.log("Else err"+err)
                            reject(err) ;
                       }
                       
                        // err ? reject(err) : console.log(result.length!=0) ? resolve(result) : reject(err) ;
                        con.release() ;
                    });
                }
            });
        });

    }
}
export default Admin ;