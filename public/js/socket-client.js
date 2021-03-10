const socket = io();
// referencias html
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

// se hace un listen al evento connect, todo esto esta en la documentacion oficial
socket.on('connect',()=>{
    console.log('Conectado');
    lblOffline.style.display ='none';
    lblOnline.style.display ='';
});

socket.on('disconnect',()=>{
    console.log('desconectado del servidor');
    lblOffline.style.display ='';
    lblOnline.style.display ='none';
});
/**
 * enviar-mensaje es un evento que tanto el cliente como el servidor pueden escuchar y emitar
 * escuchar cuando alguien les envia un mensaje
 * emitir cuando desean enviarlo
 */


// enviar mensaje al servidor
btnEnviar.addEventListener('click',()=>{
    console.log('click');
    const mensaje = txtMensaje.value;
    // no se recomienda camelcase o espacios en el nombre del evento,
    // con este mismo nombre, 'enviar-mensaje' el servidor debe escuchar el evento 
    // usualmente se envia un objeto al server
    const payload = {
        mensaje,
        id: '123'
    };
    // este emit dispara un eventp que lo escuchar el servidor, donde le envia el objeto llamado payload, asi mismo, una funcion anonima, 
    socket.emit('enviar-mensaje', payload,(id)=>{
        console.log('Desde el server', id);
    });
});


// escuchar lo que me envia el cliente, payload se le llama es porque ademas del mensaje se puede enviar mas cosas, token o lo que se necesite
socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
});