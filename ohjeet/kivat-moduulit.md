**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Kivat moduulit](#kivat-moduulit)
	- [Web-frameworkit](#web-frameworkit)
		- [Express](#express)
		- [Koa](#koa)
		- [Geddy](#geddy)
		- [Restify](#restify)
	- [Testaus](#testaus)
		- [Mocha](#mocha)
		- [Expect.js](#expectjs)
		- [Zuul](#zuul)
	- [Lisää!](#lisää!)

# Kivat moduulit

Node.js projektina seuraa vahvasti unixin jalanjäljissä. Ideana on, että sovellukset koostuvat pienistä, uudelleenkäytettävistä moduuleista, joita yhdistelemällä saa aikaan helposti monimutkaisempia sovelluksia.

## Web-frameworkit

Pitkä lista: http://nodewebmodules.com/, joista osa on jo kuolleita projekteja kylläkin.

### Express

[Express](http://expressjs.com/) is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

### Koa

[Koa](http://koajs.com/) is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. Through leveraging generators Koa allows you to ditch callbacks and greatly increase error-handling.

```javascript
var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello World';
});

if (!module.parent) app.listen(3000);
```

### Restify

[Restify](http://mcavage.me/node-restify/) is a node.js module built specifically to enable you to build correct REST web services. It intentionally borrows heavily from express as that is more or less the de facto API for writing web applications on top of node.js.

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

[Flatiron](http://flatironjs.org/) is an adaptable framework for building modern web applications. Flatiron's approach is to package simple to use yet full featured components and let developers subtract or add what they want.

### Geddy

[Geddy](http://geddyjs.org/) is a simple, structured web framework for Node. (Lue: Rails-klooni)

## Testaus

### Mocha

[Mocha](https://github.com/visionmedia/mocha) - simple, flexible, fun javascript test framework for node.js & the browser. (BDD, TDD, QUnit styles via interfaces) 

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

[Expect.js](https://github.com/learnboost/expect.js) a minimalistic BDD assertion toolkit based on should.js.

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

## Lisää!

Tunnettuja Node all-star -henkilöitä, joilla on paljon kivoja moduuleja:

 * [Substack](http://npmsearch.com/?q=author:substack)
 * [TJ](pmsearch.com/?q=author:tjholowaychuk)
 * [Rauchg](http://npmsearch.com/?q=author:rauchg)
