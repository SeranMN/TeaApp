const Attendance = require("../modal/Attendance");
const mongoose = require("mongoose");
const setArrivedTime = async (req, res) => {
  if (req.body) {
    console.log(req.body)
    const attendance = new Attendance(req.body);
    await attendance
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => {
        res.status(200).send(err);
      });
  }
};

const setLeaveTime = async (req, res) => {
  if (req.body) {
    let data = req.params.id;
    console.log(data)
    await Attendance.findByIdAndUpdate(data, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(error);
      });
  }
};
const getAtendancebyid = async (req, res) => {
  let nic = req.params.id;
 console.log(req.params.id)
  await Attendance.find({
   nic: nic,

  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
};

module.exports = {
  setArrivedTime,
  setLeaveTime,
  getAtendancebyid,
};
