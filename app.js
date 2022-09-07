// requerimos express y lo ejecutamos dentro de app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// requerimos path
const path = require("path");
const mainRouter = require('./routes/mainRoutes')

// definimos carpeta de recursos estaticos
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

(async () => {
try {
    /* const db = await mongoose.connect("mongodb+srv://MelanieDiPardo:42435855@cluster0.iqd3weu.mongodb.net/?retryWrites=true&w=majority"); */
    const db = await mongoose.connect("mongodb://localhost:27017/Finder");
    console.log("Database connected to ", db.connection.name);
} catch (error) {
    console.error(error);
}
})();

app.use('/', mainRouter)

// levantamos el servidor en el puerto 3080
app.listen(3080, () => {
console.log("Servidor levantado con éxito");
});


