const mongoose=require('mongoose');
const Stock=require('../modal/Stock');
const { db } = require('../modal/Stock');

const createStock = async (req, res) => {
    if(req.body){
        await Stock.findOne({ productID: req.body.productID }, async (err, result) => {
            if (err) {
                console.log(err);
            }else{
                if (!result) {
                    const stock =new Stock(req.body);
                    await stock.save()
                    .then(data => res.status(200).send({ data: data }))
                    .catch((err) => {
                    res.status(200).send(err);
                    
            })
        }
        else {
            console.log("Stock Already Exist");
            res.send({ message: "Stock Already Exist" });
        }
        }
        })

    }



}
const getAllStock = async (req, res) => {
    
    await Stock.find().then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
    
}

const updateStock = async (req, res) => {
   console.log("req",req)
    if (req.body) {
        let id = req.params.id;
        //console.log(id+"sc")
        await Stock.findByIdAndUpdate(id, req.body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.send(error);
            });
    }
}

const deleteStock = async (req, res) => {
    if (req.params.id) {
        //delete proposal data
        await Stock.findByIdAndDelete(req.params.id).then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) })
    }
}

const updateStockin = async (req, res) => {
    console.log(req.body)
     if (req.body) {
         let id = req.params.id;
        
         await Stock.findOneAndUpdate({productID:id},req.body)
             .then((data) => {
                 res.status(200).send(data);
             })
             .catch(err => {
                 res.send(error);
             });
     }}

const getamountbyid = async (req, res) => {
    
    await Stock.find({'ProductName':req.params.productID}).then((data)=>res.status(200).send(data)
    )
    .catch(error => {
    res.send(error);
    });
    
         
        
}     

const Searchstock = async (req, res) => {
    console.log(req.params.id)
    await Stock.find({'productName': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};

module.exports = {
    createStock,
    getAllStock,
    updateStock,
    deleteStock,
    updateStockin,
    getamountbyid,
    Searchstock

}