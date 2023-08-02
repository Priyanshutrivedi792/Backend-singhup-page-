import mongoose from "mongoose";
mongoose.set("strictQuery",false)


const connectmongo =(async()=>{
    try{
        const {connection} =await mongoose.connect("mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1/userdata")
    
    if (connection){
        console.log("db connection successfull")
    }
}
catch(e){
    console.log(e)
    process.exit(1)
}
})
connectmongo()
export default connectmongo
