const database = 'DatabasesManagement';
const collection = 'UAS_MBD';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].insertMany([
  { nama: "Mouse Wireless", harga: 150000, stok: 25, kategori: "elektronik" },
  { nama: "Keyboard Mechanical", harga: 450000, stok: 15, kategori: "elektronik" },
  { nama: "Buku Tulis", harga: 10000, stok: 50, kategori: "alat tulis" }
]);

