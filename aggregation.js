const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].aggregate([
  {
    $group: {
      _id: "$kategori",
      totalStok: { $sum: "$stok" },
      rataHarga: { $avg: "$harga" }
    }
  }
]);
