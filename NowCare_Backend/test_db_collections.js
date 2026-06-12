const mongoose = require('mongoose');
require('dotenv').config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("Collections in DB:", process.env.MONGO_URI.split('/')[3].split('?')[0]);
  
  for (const col of collections) {
      const count = await mongoose.connection.db.collection(col.name).countDocuments();
      console.log(`- ${col.name}: ${count} documents`);
  }

  process.exit(0);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
