const mongoose=require('mongoose');
const Stock=require('../modal/Stock');
const { db } = require('../modal/Stock');

const createStock = async (req, res) => {
    if(req.body){
        const stock =new Stock(req.body);
        await stock.save()
        .then(data => res.status(200).send({ data: data }))
            .catch((err) => {
                res.status(200).send(err);
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
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Stock.findOneAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

const deleteStock = async (req, res) => {
    if (req.params.id) {
        //delete proposal data
        await Stock.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(result);
        });
    }
}

module.exports = {
    createStock,
    getAllStock,
    updateStock,
    deleteStock,
    

}