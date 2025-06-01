const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].find({
  $or: [
    // { kategori: "elektronik" },
    { stok: { $gt: 20 } }
  ]
});
