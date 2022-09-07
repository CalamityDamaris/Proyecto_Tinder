module.exports = {
    home: (req,res) =>{
        res.render("index");
    },
    acceder: (req,res) =>{
        res.render("login");
    }
}