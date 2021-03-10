require('dotenv').config();
const express = require('express');
const { socketsController } = require('../sockets/sockets.controller');
var cors = require('cors');

class Servidor {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        // inicio para la configuracion de socket
        this.server = require('http').createServer(this.app);
        // es toda la informacion de los sockets conectados
        this.io     = require('socket.io')(this.server);
        // fin para la configuracion de socket

        this.paths = {
        };
        // Middlewares
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();

        // manejo de evento de sockets
        this.eventosSockets();
    }

    middlewares() {
        // Hacer publico nuestra carpeta publica
        this.app.use(express.static('public'));

        // con app.use agrego middleware
        this.app.use(cors());
    }

    routes() {
        // this.app.use(this.paths.auth ,require('../routes/auth.routes') );
    }
    eventosSockets() {
        this.io.on("connection", socketsController);
    }
    listen(){
        // this.server es del socket
        this.server.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }
}

module.exports = Servidor;