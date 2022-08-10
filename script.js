const arrayLista = ["https://robohash.org/moleng?size=50x50&setstiaeetsit.p=set1","https://robohash.org/quilaudantiumea.png?size=50x50&set=set1","https://robohash.org/mollitiaquisquammodi.png?size=50x50&set=set1","https://robohash.org/nihilautvoluptatem.png?size=50x50&set=set1","https://robohash.org/etquamaut.png?size=50x50&set=set1"]

const arrayListaInfo = ["Nombre","Hola! como estas?"]

const robotin = {
    imagen:"https://mir-s3-cdn-cf.behance.net/project_modules/fs/0b6413117868287.607e24623278b.jpg",
    nombre: "ROBOTIN",
    edad: 202,
    gusto1: "Cantar",
    gusto2: "Bailar",
    gusto3: "Programar",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem molestiae delectus corporis eaque ut inventore ullam perspiciatis quas, numquam molestias rerum libero pariatur laboriosam quisquam incidunt ducimus, deserunt reprehenderit sint.",
}

const circuloRosa = document.getElementById("circulo")
circuloRosa.addEventListener('click',toggleLoginSection)


function toggleLoginSection() {
    let circuloLogin = document.getElementById("prueba")
    if (circuloLogin.style.display === "none") {
        circuloLogin.style.display = "inline";
    } else {
        circuloLogin.style.display = "none";
    }
  }
