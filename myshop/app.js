import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.routes.js";
import UserRouter from "./routes/user.routes.js" ;
import CategoryRouter from "./routes/category.routes.js";
import ProductRouter from "./routes/product.routes.js"
import CartRouter from "./routes/cart.routes.js";
import OrderRouter from "./routes/order.router.js"
import OrderItemRouter from "./routes/orderItem.routes.js"
import path from 'path' ;
import { fileURLToPath } from "url";

const app = express() ;
const __filename = fileURLToPath(import.meta.url) ;

console.log('__filename : ', __filename)

const __dirname = path.dirname(__filename) ;


console.log('__dirname :', __dirname)
console.log('path.join(__dirname,"public") :', path.join(__dirname,"public"))

app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;

app.use(express.static(path.join(__dirname,"public"))) ; // static : internal files stored on server

app.use("/admin",AdminRouter) ;
app.use("/user",UserRouter) ;
app.use("/category",CategoryRouter) ;
app.use("/product",ProductRouter) ;
app.use("/cart",CartRouter) ;
app.use("/order",OrderRouter) ;
app.use("/orderItem",OrderItemRouter) ;





app.listen(3000,()=>{
    console.log("Server started");
}) ;    
