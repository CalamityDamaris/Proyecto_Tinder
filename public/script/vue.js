const app = new Vue({
    el: ".app",
    data: {
        titulo: "Hola mundo con VUE",
        registro: "Haz click aqui para registrarte!",
        nuevoNombre: "",
        nuevoApellido:"",
        nuevoCorreo:"",
        nuevaContraseña:"",
        login: "Iniciar Sesión",
        reg: "Registrarse"
    },
    methods:{
        desplegarLogin(){
            const div_selector = document.getElementById("selector_login_registro")
            div_selector.style.display = "none"
            const formulario_login = document.getElementById("login")
            formulario_login.style.display = "flex"
        },
        desplegarRegistro(){
            const div_selector = document.getElementById("selector_login_registro")
            div_selector.style.display = "none"
            const formulario_registro = document.getElementById("registro")
            formulario_registro.style.display = "flex"
        }
    }
})