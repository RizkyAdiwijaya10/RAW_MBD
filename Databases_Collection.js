const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

// Gunakan database
use(database);

// Buat collection jika belum ada
if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}
