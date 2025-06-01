const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].updateOne(
  { nama: "Mouse Wireless" },
  { $set: { stok: 30 } }
);
