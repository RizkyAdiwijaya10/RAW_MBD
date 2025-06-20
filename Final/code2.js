// Switch to or create the database
const database = 'UAS_MBD_KYY';
const collection = 'KYY';

use(database);

// Create collection (if it doesn't exist)
db.createCollection(collection);

// Insert multiple documents
db.KYY.insertMany([
    {
       nim : "D0222045",
       nama : "Rizky Adiwijaya",
       Prodi : "Teknik Informatika",
       angkatan : 2022,
    },
    {
       nim : "D0222032",
       nama : "A. Ade Indawan",
       Prodi : "Teknik Informatika",
       angkatan : 2022,
    },
    {
       nim : "D0222046",
       nama : "Windi",
       Prodi : "Teknik Informatika",
       angkatan : 2022,
    },
    {
       nim : "D0222095",
       nama : "Nurlinda Ahmad",
       Prodi : "Teknik Informatika",
       angkatan : 2022,
    },
    {
       nim : "D0222545",
       nama : "Heri Phutra",
       Prodi : "Teknik Informatika",
       angkatan : 2022,
    },
 
]);

// Verify the documents were inserted
db.KYY.find().pretty();