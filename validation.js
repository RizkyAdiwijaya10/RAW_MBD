const database = 'DatabasesManagement';
const collection = 'UAS_MBD_VALIDATED';

use(database);

db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga", "stok", "kategori"],
      properties: {
        nama: { bsonType: "string" },
        harga: { bsonType: "int", minimum: 0 },
        stok: { bsonType: "int", minimum: 0 },
        kategori: { bsonType: "string" }
      }
    }
  }
});
