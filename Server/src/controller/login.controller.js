const Login = require("../modal/login.modal");
const mongoose = require("mongoose");


const add = async (req, res) => {
    if (req.body) {
        const login = new Login(req.body);
        await login.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const userLogin = async (req, res) => {
    await Login.findOne({'email': req.params.email})
    .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  
}
    



const updateUser = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.body.id;
        await Login.findOneAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

const deleteUser = async (req, res) => {
    await Login.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    add,
    userLogin,
    updateUser,
    deleteUser,

    
}