// requerimos express y lo ejecutamos dentro de app
const express = require('express');
const app = express();
// requerimos path 
const path = require('path');

// definimos carpeta de recursos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

// levantamos el servidor en el puerto 3080
app.listen(3080, () => {
    console.log('Servidor levantado con éxito')
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/acceder', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})

