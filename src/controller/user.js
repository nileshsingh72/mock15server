const User = require("../model/user")
const createUser = async(req, res)=>{
   const {email,password ,name } = req.body;
    try{
      let find = await User.find({email})  
      if(find.length > 0){
        res.send({
            status:false,
            message:'Email is already exists !'
        })
      }
      else{
             
                let user = await User.create({name,email, password});
                res.send({
                    status:true,
                    message:'Your Account is created successfully',
                    user
                })
         }
    }
    catch(e){
        res.send({
            status:false ,
            message:e.message
        })
    }
}




const loginUser = async(req, res)=>{
    const {email, password} = req.body;
     try{
       let find =await User.find({email , password})  
       if(find.length <= 0){
         res.send({
             status:false,
             message:'Email or password is incorrect!'
         })
       }
       else{
              const token = find[0]._id
              res.send({ status : true , message: "Login Successfully ! ", token: token , user:find[0] });
          }
    }
     catch(e){
         res.send({
             status:false ,
             message:e.message
         })
     }
 }



module.exports = {createUser , loginUser}