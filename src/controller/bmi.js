const Mass = require("../model/bmi");

const createBMI = async(req , res)=>{
     let userID = req.params.id;
     const {h , w} = req.body;
     try{
        let hi  = h*0.304;
        let calBMI = w / hi;
        let f = calBMI.toFixed(2);
        let cal = await Mass.create({userID , BMI :f})
        res.send({
            status:true , 
            BMI:f
        })
     }
     catch(e){
        res.send({
            status:false , 
            message:e.message
        })
     }
}


const getHistory = async(req, res)=>{
     let userID = req.params.id;
     try{
      let find = await Mass.find({userID});
        res.send({
            status:true , 
            data:find
        })
     }
     catch(e){
        res.send({
           status:false , 
           message : e.message
        })
     }
}

module.exports = {getHistory , createBMI}