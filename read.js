const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].find(); // Tampilkan semua
db[collection].find({ kategori: "elektronik" }); // Filter
