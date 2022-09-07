const bcrypt = require("bcryptjs");
const Bots = require("../database/models/Bots");
module.exports = {
home: async (req, res) => {
    const users = await Bots.find();

    res.render("index", { users: users });
},
acceder: (req, res) => {
    res.render("login");
},
registrarse: async (req, res) => {
    let contraseñaEncriptada = bcrypt.hashSync(req.body.password, 12);

    let fotosParaGuardar = req.files.map(function (elemento) {
    return elemento.filename;
    });

    let infoPorGuardar = {
    username: req.body.username,
    age: req.body.age,
    email: req.body.email,
    password: contraseñaEncriptada,
    likes: [req.body.interesUno, req.body.interesDos, req.body.interesTres],
    avatar: fotosParaGuardar,
    };

    const usuario = Bots(infoPorGuardar);

    const userSaved = await usuario.save();

    res.redirect("/acceder");
},
};
