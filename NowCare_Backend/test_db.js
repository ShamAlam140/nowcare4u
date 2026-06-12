const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  
  const allDocs = await Doctor.find({});
  console.log("Total doctors in DB:", allDocs.length);
  
  const query = { profileCompleted: true, isVerified: true };
  const filtered = await Doctor.find(query);
  
  console.log("Doctors matching { profileCompleted: true, isVerified: true }:", filtered.length);
  
  const profileCompletedCount = await Doctor.countDocuments({ profileCompleted: true });
  console.log("Doctors with profileCompleted: true :", profileCompletedCount);
  
  const isVerifiedCount = await Doctor.countDocuments({ isVerified: true });
  console.log("Doctors with isVerified: true :", isVerifiedCount);

  for (const doc of filtered) {
    console.log("- " + doc.name);
  }

  process.exit(0);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
