const database = 'UAS_MBD_KYY';
const collection = 'KYY';

use(database);

db.createCollection(collection);

db.KYY.insertMany([
  { key: "user:1", value: "Nurlinda Ahmad" },
  { key: "user:2", value: "Rizky Adiwijaya" },
  { key: "user:3", value: "Heri Phutra" },
  { key: "user:4", value: "A.Ade Indawan" },
  { key: "user:5", value: "Windi" }
]);