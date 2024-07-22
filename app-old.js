const http = require("http");

//Request es lo que se solicita por parte del cliente (cualquier persona o servidor) que desea conectarse a cualquier recurso de mi servidor
// Response es lo que se le responde al cliente cuando se procese ese request qe se solicito

http.createServer(( req, res ) => {

    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.setHeader('Content-Disposition', 'attachmen; filename=lista.csv')
    // res.writeHead(200, { "Content-Type": "application/csv" });
    

    res.write('Hola mundo');
    res.end();
}).listen( 8080 );

console.log('Escuchando el puerto', 8080);