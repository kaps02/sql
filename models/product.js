const db = require('../util/database');
const Cart = require('./cart');



const getProductsFromFile = cb => {
 
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute('INSERT INTO products(title ,price , imageUrl , description)VALUES(?,?,?,?)',
    [this.title,this.price,this.imageUrl,this.description]);
  };
  deleteById(prodId){
    return db.execute('DELETE FROM mysql.products WHERE id = ?',[prodId]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
  static findById(id){
   return db.execute('  select * from products where products.id = ?',[id]);
  }
}
  
  
  
