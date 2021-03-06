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
      console.log(credit(data))
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

function credit(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].loanType === "home") {
      if (Number(data[i].numOfYears) === 1 || Number(data[i].numOfYears === 2)) {
        data[i]["rate"] = 8.2
      } else {
        data[i]["rate"] = 8.6
      }
    }
    else if (data[i].loanType === "studies") {
      if (Number(data[i].numOfYears) === 1 || Number(data[i].numOfYears === 2)) {
        data[i]["rate"] = 2.4
      } else {
        data[i]["rate"] = 2.7
      }
    }
    else if (data[i].loanType === "car") {
      if (Number(data[i].numOfYears) === 1 || Number(data[i].numOfYears === 2)) {
        data[i]["rate"] = 4.8
      } else {
        data[i]["rate"] = 5.1
      }
    }
    if (data[i].frequency === "monthly") {
      data[i].deadlines = 12 * Number(data[i].numOfYears)
    }
    else if (data[i].frequency === "per quarter") {
      data[i].deadlines = 4 * Number(data[i].numOfYears)
    }
    else if (data[i].frequency === "per semester") {
      data[i].deadlines = 2 * Number(data[i].numOfYears)
    }
    else if (data[i].frequency === "yearly") {
      data[i].deadlines = Number(data[i].numOfYears)
    }
  }
 return data
}

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


