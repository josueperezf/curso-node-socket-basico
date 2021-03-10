# Manejo de socket

## pasos de creacion de proyecto

1.  creamos un archivo app.js, la carpeta modelos, y en ella copiamos y pegamos el archivo servidor.js que usamos en el proyecto anterior

2. ejecutamos *npm install express cors dotenv*

3. creamos una carpeta public, en ella un archivo index con cdn de boostrap, tambien creamos la carpeta js con un archivo socket-client.js

## Plugins 

1. *npm i socket.io* sirve para manejar los sockets. *si tenemos el frontend hecho en angular o reactv y esta en otro servidor por ejemplo, debemos instalar socket client para manejarlo*.
        Si al tener corriendo nuestro proyecto 'nodemon app.js', vamos a la ruta http://localhost:8080/socket.io/socket.io.js y nos muestra contenido, es que esta bien instalado, es de destacar que todo esto en basado a este proyecto, que tiene una carpeta public y un archivo index el cual se vera en el navegador por el puerto 8080. si se ve el contenido, en nuestro index html debemos cargar ese SCRIPT
