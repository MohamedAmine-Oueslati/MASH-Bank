const express = require("express");
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("../database/database.js");
const bcrypt = require("bcrypt");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send("hello"));
app.post("/adminCreation", async (req, res) => {
  const Admin = db.newAdmin;
  console.log(req.body);
  const data = req.body;
  const hashed = await bcrypt.hash(data.password, 10);
  //   console.log(process.env.ACCESS_TOKEN_SECRET);
  Admin.create({
    adminFullName: data.adminFullName,
    adminUserName: data.adminUserName,
    password: hashed,
  });
});

app.get("/scheduleData", async (req, res) => {
  const schedule = db.scheduleData;
  const scheduleData = await schedule.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
    console.log(data);
  });
});
app.post("/setSchedule", async (req, res) => {
  const setSchedule = db.setSchedule;
  console.log(req.body.data);
  await setSchedule.create({ freeDate: req.body.data });
});

app.post("/userform", (req, res) => {
  const User = db.User;
  console.log(req.body);
  User.create(req.body);
});

app.get("/user", (req, res) => {
  const User = db.User;
  User.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(data)
    }
  })
});

app.post("/simulator", (req, res) => {
  const Simulation = db.Simulation;
  Simulation.create(req.body);
});

app.post("/appointment", (req, res) => {
  const Appointment = db.Appointment;
  Appointment.create(req.body);
});


app.get("/simulationResult", (req, res) => {
  const Simulation = db.Simulation;
  Simulation.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(data)
    }
  })
});

app.get("/scheduled", (req, res) => {
  const Appointment = db.Appointment;
  Appointment.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(data)
    }
  })
});

app.post("/remove", (req, res) => {
  const Simulation = db.Simulation;
  Simulation.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      var yrs = data[req.body.index]._id
      Simulation.deleteOne({ _id: yrs }, function (err) {
        if (err) { console.log(err) }
        else {
          console.log("Successful deletion")
          Simulation.find({}, (err, data) => {
            if (err) {
              res.status(404).send(err)
            } else {
              res.send(data)
            }
          })
        }
      })
    }
  })
})

app.post("/remove1", (req, res) => {
  const Appointment = db.Appointment;
  Appointment.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      var yrs = data[req.body.index]._id
      Appointment.deleteOne({ _id: yrs }, function (err) {
        if (err) { console.log(err) }
        else {
          console.log("Successful deletion")
          Appointment.find({}, (err, data) => {
            if (err) {
              res.status(404).send(err)
            } else {
              res.send(data)
            }
          })
        }
      })
    }
  })
})


app.listen(port, () => console.log("listening on port: " + port));


