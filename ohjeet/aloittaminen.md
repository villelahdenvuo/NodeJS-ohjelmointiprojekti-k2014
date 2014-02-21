# Aloittaminen

Nodea pystyy ajamaan laitoksen users-palvelimella (`users.cs.helsinki.fi`).

## Noden käyttöönotto

 * [Lue ohjeet.](http://users.cs.helsinki.fi/README.users.cs.helsinki.fi.txt)
 * Suorita `wanna-htdocs`.
 * Luo tiedosto `~/htodcs/.htaccess`.
 * Luo uudelleenohjaus apachelta Nodelle:

    RewriteEngine On
    RewriteRule ^(.*)$ http://TUNNUS.users.cs.helsinki.fi:PORTTI/$1 [P]
    
 * Tunnus on oma AD-tunnuksesi ja portti on joku portti vaikka väliltä 30000 - 40000
   * Node-ohjelmasi tulee kuuntelemaan tätä porttia, ei porttia 80!
 * Jos sinulla on jo jotain users-palvelimella, niin htaccess tiedoston voi lisätä myös alikansioon.
 * Aseta oikeudet kotikansiolle, htdocsille ja htaccessille linkattujen ohjeiden mukaan.
 * Nyt Noden pitäisi toimia, testaa suorittamalla `node` ja ajamalla seuraava ohjelma (korvaa PORTTI omallasi)

    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(PORTTI);
    
 * Nyt http://TUNNUS.users.cs.helsinki.fi/ pitäisi sanoa `Hello World!`
