
import { Router } from "express";
import { login, singnup } from "./controller.js";
const ap = Router()
ap.get("/",(req,res)=>{
    res.send("welcome")
})
ap.post("/singnup",singnup)
ap.post("/login",login)
export default ap;
