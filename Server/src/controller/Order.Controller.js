const Order = require('../modal/Order');
const mongoose = require('mongoose');
const { db } = require('../modal/Order');

//create orders
const createOrder = async (req, res) => {
    if (req.body) {
        const order = new Order(req.body);
        await order.save()
            .then(data => res.status(200).send({ data: data }))
            .catch((err) => {
                res.status(200).send(err);
            })
        
    }
}

//view orders 
const getAllOrder = async (req, res) => {
    
    await Order.find().then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
    
}

//update orders
const updateOrder = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Order.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

//delete orders
const deleteOrder = async (req, res) => {
    console.log("aaaaaa")
    if(req.params.id){
    await Order.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    }

  };
            




    module.exports = {
        createOrder,
        getAllOrder,
        updateOrder,
        deleteOrder,
        

    }
