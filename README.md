# Prueba Técnica
## Client
* El cliente de la app está desarrollado con React.Js, HTML5, CSS3, JS.
* La app se compone de 3 partes, un login, registro y una vista principal (ademas de la vista para errores 404).
* La vista principal consiste en boton para cerrar sesión, un formulario (el cuál debe ser completado de forma interactiva junto a un mapa), y una lista de datos previamente ingresados.
* El mapa utilizado, corresponde a la API Google Maps, por lo que para ser utilizado se requiere una API-Key (Facilitada hasta la revisión de la prueba).
* Para utilizar la carpeta client mediante los comandos npm start, se deben instalar las dependencias del archivo package.json, lo anterior mediante el comando npm install.
* Por otro lado, la interfaz está diseñada para ser responsive.

## Server
* El backend de la app está desarrolaldo mediante el uso de Node.Js, Express.Js y MongoDB.
* Dadas las instrucciones de la prueba, el backend sólo realiza validación de usuarios (No procesa la lista de datos enviados por formulario, por lo que no es data persistente).
* Para vertificar usuarios, se utilizó una variable de ambiente (.env), cookies, bcrypt.
