const mongoose=require('mongoose');
const Stockout=require('../modal/Stockout');
const { db } = require('../modal/Stockout');

const createStockout = async (req, res) => {
    if(req.body){
        const stockout =new Stockout(req.body);
        await stockout.save()
        .then(data => res.status(200).send({ data: data }))
            .catch((err) => {
                res.status(200).send(err);
            })
        

    }



}
const getAllStockout = async (req, res) => {
    
    await Stockout.find().sort('-Date').then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
    
}
const Searchstockout = async (req, res) => {
    console.log(req.params.id)
    await Stockout.find({'productName': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }).sort('-Date')
};

module.exports = {
    createStockout,
    getAllStockout,
    Searchstockout

}