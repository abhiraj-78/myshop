import { response } from "express";
import User from "../model/user.js";

export const signUp = (request,response,next)=>{
    let username = request.body.username ;
    let pass = request.body.password ;
    let mobileno = request.body.mobileno ;

    let user = new User(username,pass,mobileno) ;

    user.singUp().then(result=>{
        return response.status(200).json({message : "user singIn success"}) ;
    }).catch(err=>{
        console.log("Abhimanyu  "+err);
        return response.status(500).json({message : "Intenal server error"}) ;
    }) ;
}

export const signIn = (request,response,next)=>{
    let username = request.body.username ;
    let password = request.body.password ;
    
    console.log(request.body);
    let user = new User(null,username,password) ;

    user.signIn().then(result=>{
        return response.status(200).json({message : "sign in success"})
    }).catch(reject=>{
        return response.status(500).json({message : "internal server to user signIn"})
    }) ;

 }