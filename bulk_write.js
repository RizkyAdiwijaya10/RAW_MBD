const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].bulkWrite([
  {
    insertOne: {
      document: { nama: "Pulpen", harga: 5000, stok: 40, kategori: "alat tulis" }
    }
  },
  {
    updateOne: {
      filter: { nama: "Keyboard Mechanical" },
      update: { $set: { stok: 20 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Mouse Wireless" }
    }
  }
]);
