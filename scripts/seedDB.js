const mongoose = require("mongoose");
const db = require("../models");

// This file empties the note collection and inserts the note below

// connects to the mongo db
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/FINAL_Doctors", 
{useMongoClient: true}
);

const noteSeed = [
  {
    title: "Dr. Hayes : schedule next visit",
    specialties: "cardiologist",
    mynote:
      "Last visit on 01/01/18. Meds prescribed. Next visit in 6 months, need to schedule.",
    // date: new Date(Date.now())
  },
  {
    title: "Dr. Freeman : schedule next visit",
    specialties: "cardiologist",
    mynote:
      "Last visit on 01/01/18. Meds prescribed. Next visit scheduled for 03/01/18. Appointment missed, need to schedule.",
    // date: new Date(Date.now())
  },
  {
    title: "Dr. Byrd : schedule next visit",
    specialties: "cardiologist",
    mynote:
      "Last visit on 06/01/18. Meds prescribed. Next visit in 3 months, need to schedule.",
    // date: new Date(Date.now())
  },
  {
    title: "Dr. Rowley : next visit 10/01/18",
    specialties: "podiatrist",
    mynote:
      "Last visit on 07/01/18. MRI done, result discussed no futher treatment needed. Next f/up scheduled for 10/01/18",
    // date: new Date(Date.now())
  },
  
];

db.Note
  .remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
