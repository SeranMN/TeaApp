const Employee = require('../modal/Employee');
const mongoose = require('mongoose')
//create employees

const createEmployee = async (req, res) => {
    if (req.body) {
        const employee = new Employee(req.body);
        await employee.save()
            .then(data => res.status(200).send({ data: data }))
            .catch((err) => {
                res.status(200).send(err);
            })
        
    }
}

const getAllEmployee = async (req, res) => {
    
    await Employee.find().then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
    
}

const updateEmployee = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Employee.findOneAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}
const deleteEmployee = async (req, res) => {
    if (req.params.id) {
        //delete proposal data
        await Employee.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(result);
        });
    }
}

    module.exports = {
        createEmployee,
        getAllEmployee,
        updateEmployee,
        deleteEmployee,

    }