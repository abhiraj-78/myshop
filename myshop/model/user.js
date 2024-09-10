import pool from "../db/dbConfig.js"
class User{
    constructor(id,username,pass,mobileno){
        this.id = id ;
        this.username = username ;
        this.pass = pass ;
        this.mobileno = mobileno ;
    }
    singUp(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err) ;
                }
                else{
                    let sql = "insert into user (username,pass,mobileno) values(?,?,?)"
                    con.query(sql,[this.username,this.pass,this.mobileno],(err,result)=>{
                        console.log(result) ;
                        err ? reject(err) : resolve(result) ;    
                    });
                }
            })
        });
    }

    signIn(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err);
                }
                else{
                    let sql = "select * from user where username = ? and pass = ? " ;
                    con.query(sql,[this.username,this.pass],(err,result)=>{
                        if(err){
                            reject(err);
                        }
                        else if(result.length != 0 ){
                            resolve(result) ;
                        }
                        else{
                            reject(err) ;

                        }

                    })
                }
            })
        })        
    }
}
export default User ;