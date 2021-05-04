let db;

module.exports = (_db) => {
  db = _db;
  return Products;
};

let Products = class {
    
  // permet de recuperer la liste des produits
  static getAll() {
    return new Promise((next) => {
      db.query("SELECT * FROM products")
        .then((result) => next(result))
        .catch((err) => next(err));
    });
  }
};
