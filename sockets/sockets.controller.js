/**
 * enviar-mensaje es un evento que tanto el cliente como el servidor pueden escuchar y emitar
 * escuchar cuando alguien les envia un mensaje
 * emitir cuando desean enviarlo
*/
// socket es lo que le envia cada telefono o computadora, aqui podria ir el token y si no viene o ya caduco lo podemos desconectar
const socketsController = (socket) => {
    // los socket tienen el socket.id que hace referencia a un dispositivo en particular,
    // este id no se debe usar, ya que cada vez que recargue el navegador el usuario tendra un id nuevo
    console.log('cliente conectado: '+ socket.id);
    socket.on('disconnect',()=>{
        // console.log('cliente desconectado: '+ socket.id);
    });
    // este evento 'enviar-mensaje' debe emitido por el frontend para que el backend lo pueda escuchar
    // payload es el mensaje que envia el cliente
    // aqui escucho cuando el cliente emite el evento enviar-mensaje
    // la funcion callback solo se ejecuta en el dispositivo cliente que emitio el evento, digamos que envio un mensaje y el server le responde algo
    // la funcion callback se ejecuta en el cliente solo si el servidor le dice que se ejecute, se ejecuta solo la navegador o telefono que hizo la llamada
    socket.on('enviar-mensaje',(payload, callback)=>{
        const id = 123456;
        // callback solo se ejecuta en la maquina que envio el mensaje, si envia un mensaje le llega a todos menos a la maquina que lo envia
        callback({id});
        // console.log({payload});
        // en la siguiente linea soy yo quien emite el evento enviar-mensaje
        // socket.emit envia un evento solo al telefono que realizo la llamada
        // 
        socket.broadcast.emit('enviar-mensaje',payload);
    });
}

module.exports = {
    socketsController
}