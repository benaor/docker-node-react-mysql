const express = require("express");
const mysql = require("promise-mysql");

// App
const app = express();

//Cors permet d'accepter les requêtes de l'extérieur
var cors = require("cors");
app.use(cors());

// Constants
const PORT = 8080;
const HOST = "127.0.0.1";

// Connexion avec mysql
mysql
  .createConnection({
    host: "database",
    // host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "docker",
  })
  .then((db) => {
    console.log("connecter avec la BDD");

    let Products = require("./assets/classes/Products.js")(db);

    //Route permettant de recupérer la liste complete des produits
    app.get("/products", async (req, res) => {
      let allProducts = await Products.getAll(req.query.max);
      console.log("dans le /get depuis express");
      res.json({
        status: "success",
        result: allProducts,
      });
    });
  })
  .catch((err) => {
    console.log("Error during DB Connection : ");
    console.log(err.message);
  });

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
