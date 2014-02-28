**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Kivat moduulit](#kivat-moduulit)
	- [Web-frameworkit](#web-frameworkit)
		- [Express](#express)
		- [Koa](#koa)
		- [Restify](#restify)
		- [Flatiron](#flatiron)
		- [Geddy](#geddy)
	- [Testaus](#testaus)
		- [Mocha](#mocha)
		- [Expect.js](#expectjs)
		- [Zuul](#zuul)
	- [Flow-control](#flow-control)
		- [Async](#async)
		- [Highland](#highland)
	- [Muut kuin web-sovellukset](#muut-kuin-web-sovellukset)
		- [node-webkit](#node-webkit)
		- [blessed](#blessed)
	- [Lisää!](#lisää!)

# Kivat moduulit

Node.js projektina seuraa vahvasti unixin jalanjäljissä. Ideana on, että sovellukset koostuvat pienistä, uudelleenkäytettävistä moduuleista, joita yhdistelemällä saa aikaan helposti monimutkaisempia sovelluksia.

## Web-frameworkit

Pitkä lista: http://nodewebmodules.com/, joista osa on jo kuolleita projekteja kylläkin.

### Express

[Express](http://expressjs.com/) on pieni mutta joustava node.js web-ohjelmistokehys, joka tarjoaa vankan joukon ominaisuuksia yksi- ja monisivuisten ohjelmistojen kehittämiseen.

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

### Koa

[Koa](http://koajs.com/) on uusi Express-kehittäjien suunnittelema ohjelmistokehys, jonka tarkoituksena on tarjota pienempi, ilmaisuvoimaisempi ja vakaampi perusta web-ohjelmistojen ja verkkorajapintojen kehitykseen. Hyödyntäen generaattoreita, Koa tekee callback-kutsut tarpeettomiksi ja tehostaa virheenkäsittelyä.

```javascript
var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello World';
});

if (!module.parent) app.listen(3000);
```

### Restify

[Restify](http://mcavage.me/node-restify/) on node.js-moduuli, joka on kehitetty oikeellisten REST-arkkitehtuurin mukaisten web-ohjelmistojen rakentamista varten. Se on ottanut runsaasti vaikutteita Expressistä, sillä se on aikalailla *de facto* rajapinta node.js web-applikaatioiden kirjoittamiseen.

```javascript
var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000);
```

### Flatiron

[Flatiron](http://flatironjs.org/) on mukautuva ohjelmistokehys modernien web-ohjelmistojen kehitykseen. Flatironin lähestymistapa on koota yhteen yksinkertaisia mutta eheitä komponentteja, ja antaa kehittäjien itse päättää mitä he niistä käyttävät.

### Geddy

[Geddy](http://geddyjs.org/) on yksinkertainen, rakenteinen web-ohjelmistokehys node.js:lle. (Lue: Rails-klooni)

## Testaus

### Mocha

[Mocha](https://github.com/visionmedia/mocha) - yksinkertainen, joustava, ehkä jopa hauska javascript testauskehys node.js:lle ja selaimeen. (BDD, TDD ja QUnit-tyylit tuettu rajapintojen kautta)

```javascript
describe('decoding error handing', function () {
  var err = { type: 'error', data: 'parser error' };
  
  it('should disallow bad format', function () {
    expect(decode(':::')).to.eql(err);
  });
  
  it('should disallow inexistent types', function () {
    expect(decode('94103')).to.eql(err);
  });
});
```

### Expect.js

[Expect.js](https://github.com/learnboost/expect.js) on should.js:ään perustuva minimalistinen työkalu BDD-vakuutusten määrittelyyn.

```javascript
expect(window.r).to.be(undefined);
expect({ a: 'b' }).to.eql({ a: 'b' })
expect(5).to.be.a('number');
expect([]).to.be.an('array');
expect(window).not.to.be.an(Image);
```

### Zuul

[Zuul](https://github.com/defunctzombie/zuul) is an easy way to test your javascript in browsers. Start testing your code in seconds locally and move to cloud based browsers seamlessly for better coverage.

## Flow-control

Miten taistella asynkronisuuden aiheuttamia ongelmia, kuten callback-helvettiä, vastaan?

### Async

[Async](https://github.com/caolan/async) is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.

```javascript
async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file
});

async.filter(['file1','file2','file3'], fs.exists, function(results){
    // results now equals an array of the existing files
});

async.parallel([
    function(){ ... },
    function(){ ... }
], callback);

async.series([
    function(){ ... },
    function(){ ... }
]);
```

### Highland

[Highland](http://highlandjs.org/) manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams. You may be familiar with Promises, EventEmitters and callbacks, but moving between them is far from seamless.

```javascript
var output = fs.createWriteStream('output');
var docs = db.createReadStream();

// wrap a node stream and pipe to file
_(docs).filter(isBlogpost).pipe(output);

// or, pipe in a node stream directly:
docs.pipe(_().filter(isBlogpost)).pipe(output);
```

## Muut kuin web-sovellukset

### node-webkit

[Node-webkit](https://github.com/rogerwang/node-webkit) is an app runtime based on Chromium and node.js. You can write native apps in HTML and Javascript with node-webkit. It also lets you call Node.js modules directly from the DOM and enables a new way of writing native applications with all Web technologies.

### blessed

[Blessed](https://github.com/chjj/blessed) is a newschool curses-like library. It features a complete terminfo, extended terminfo, and termcap parser, so it will work with any terminal if need be.

## Lisää!

Tunnettuja Node all-star -henkilöitä, joilla on paljon kivoja moduuleja:

 * [Substack](http://npmsearch.com/?q=author:substack)
 * [TJ](pmsearch.com/?q=author:tjholowaychuk)
 * [Rauchg](http://npmsearch.com/?q=author:rauchg)
