const http = require('http');

http.createServer( (req, res) => {

   res.whrite('Hola mundo');
   

   res.end();
})
.listen(8081);

console.log('Escuchando en el puerto 8081') ;