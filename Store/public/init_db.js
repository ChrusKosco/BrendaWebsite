// init_db.js
const { db, ensureTables } = require('./db');

ensureTables();

const products = [
    { id: 'prod_tshirt', name: 'T-Shirt', description: 'Comfortable cotton tee', price: 2000, image: '/images/tshirt.jpg', stock: 10 },
    { id: 'prod_mug', name: 'Coffee Mug', description: 'Ceramic mug 12oz', price: 1500, image: '/images/mug.jpg', stock: 15 },
    { id: 'prod_sticker', name: 'Sticker Pack', description: '5 vinyl stickers', price: 500, image: '/images/stickers.jpg', stock: 100 }
];

const insert = db.prepare(`
  INSERT OR REPLACE INTO products (id, name, description, price, image, stock)
  VALUES (@id, @name, @description, @price, @image, @stock)
`);

for (const p of products) insert.run(p);

console.log('DB initialized and seeded.');
