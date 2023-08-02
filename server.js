import app from "./app.js"
import 'dotenv/config'
import mongo from "./dbconnection.js"

app.listen(5014,(req,res)=>{
    console.log("app listening at 5014")
})
