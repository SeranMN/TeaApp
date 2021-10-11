const mongoose=require('mongoose');
const Stockin=require('../modal/Stockin');
const { db } = require('../modal/Stockin');

const createStockin = async (req, res) => {
    if(req.body){
        const stockin =new Stockin(req.body);
        await stockin.save()
        .then(data => res.status(200).send({ data: data }))
            .catch((err) => {
                res.status(200).send(err);
            })
        

    }



}
const getAllStockin = async (req, res) => {
    
    await Stockin.find().sort('-Date').then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
    
}

const getsumstockin=async(req,res)=>{
    await Stockin.aggregate(
        [
            {
             $group: {
                _id: "$productID",
                total:{
                    $sum: {
                      "$toInt": "$Amount"}
                }
            }
            }
        ],
        
    ).then((data)=>res.status(200).send(data))
    .catch(error=>{
        res.send(error);
    });
    
 
    }
    const Searchstockin = async (req, res) => {
        console.log(req.params.id)
        await Stockin.find({'productName': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }).sort('-Date')
    };
    


module.exports = {
    createStockin,
    getAllStockin,
    getsumstockin,
    Searchstockin

}