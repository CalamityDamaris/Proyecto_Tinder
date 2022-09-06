// requerimos express y lo ejecutamos dentro de app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// requerimos path
const path = require("path");

// definimos carpeta de recursos estaticos
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
(async () => {
try {
    const db = await mongoose.connect("mongodb://localhost:27017/Finder");
    console.log("Database connected to ", db.connection.name);
} catch (error) {
    console.error(error);
}
})();

// levantamos el servidor en el puerto 3080
app.listen(3080, () => {
console.log("Servidor levantado con éxito");
});

app.get("/", (req, res) => {
res.render("index");
});

app.get("/acceder", (req, res) => {
res.render("login");
});
