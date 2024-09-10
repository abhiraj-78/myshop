import { request, response } from "express";
import Admin from "../model/admin.js";

export const signUp = (request,response,next)=>{
    let username = request.body.username ;
    let password = request.body.password ;

    let admin = new Admin(null,username,password) ;

    admin.signUp().then(result=>{
        return response.status(200).json({message : "SignUp Success"});
    }).catch(err=>{
        return response.status(500).json({message : "internal server error"});
    });
}

export const signIn = (request,response,next)=>{
    let username = request.body.username ;
    let password = request.body.password ;

    let admin = new Admin(null,username,password) ;
    
    admin.signIn().then(result=>{
        return response.status(200).json({message:"singIn success"}) ;
    }).catch(err=>{
        return response.status(500).json({message:"intenal server error"}) ;
    }) ;
}


