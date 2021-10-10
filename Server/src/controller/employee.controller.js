const Employee = require("../modal/Employee");
const mongoose = require("mongoose");
const { db, count } = require("../modal/Employee");
//create employees

const createEmployee = async (req, res) => {
  if (req.body) {
    const employee = new Employee(req.body);
    await employee
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => {
        res.status(200).send(err);
      });
  }
};

const getAllEmployee = async (req, res) => {
  await Employee.find()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      res.send(error);
    });
};

const updateEmployee = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Employee.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(error);
      });
  }
};
const deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })

    .catch((err) => {
      res.status(500).send(err);
    });
};

// const countEmployee =  (req, res) => {
//     const count = Employee.collection.countDocuments().
//         then(res.status(200)).
//         catch((err) => res.send(err))

//    console.log(count)

//}
const getEmployeeByID = async (req, res) => {
  await Employee.findOne({ nic: req.params.id })
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      res.send(error);
    });
};
const serachEmployee = async (req, res) => {
  console.log(req.params.id);

  await Employee.find(
    { name: { $regex: ".*" + req.params.id + ".*" } },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  createEmployee,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByID,
  serachEmployee,
};
