const FormerEmp = require("../modal/formerEmployee");


const createEmployee = async (req, res) => {
  if (req.body) {
    const employee = new FormerEmp(req.body);
    await employee
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => {
        res.status(200).send(err);
      });
  }
};
const getAllEmployee = async (req, res) => {
  await FormerEmp.find()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      res.send(error);
    });
};
module.exports = {
  createEmployee,
  getAllEmployee
};
