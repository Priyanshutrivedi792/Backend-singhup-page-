import  express  from "express";
import ap from "./router.js"
import cors from "cors"


const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
    



app.use("/",ap) 
app.use("/signup",ap)
app.use("/login",ap)
export default app
