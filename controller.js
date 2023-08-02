import user from "./userschma.js"

const singnup =async(req,res)=>{
    const { fullname ,email,password }= req.body
    if(!fullname||!password||!email) {
        res.status(401).json({
            sucess:false ,
            message:"data not entered properly "

        })
    }
    
    
    const myuser = await user.create({
        fullname,
        email ,
        password
    })
    res.status(200).json({
        sucess:true 
        ,
        message :"user sucesssfully created ",
        myuser
    })
    if(!myuser){
        res.status(404).json({
            sucess:false, 
            message:"registrarion failed "
        })
    }
    
}

const login = async(req,res)=>{
    const {email}=req.body
    if(!email){
        res.status(401).json({
            sucess:false ,
            message:"data not entered properly "})

    }
    
    if (email==user.email){
        const mail = user.findOne(mail)
        mail ={} 
        res.status(201).json({
            sucess:true, 
            mail
        })

    }
    
}
export{
    singnup,
    login
}