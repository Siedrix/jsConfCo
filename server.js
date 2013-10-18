var express = require('express.io'),
	swig  = require('swig'),
	Slides = require('./slides'),
	_ = require('underscore');

var server = express();

server.http().io();

swig.setDefaults({ cache: false });

var slides = new Slides({
	list : [
		'intro.html',
		// 'how-am-i.html',
		'whats-tooling.html',
		'why-it-matters.html',
		'why-it-matters-quote.html',
		'browser-as-ide.html',
		'browser-as-ide-question.html',
		'conditinal-breakpoints.html',
		'network-and-latency.html',
		'performance.html',
		'measure.html',
		'console-time.html',
		'window-performance-now.html',
		'compile.html',
		'window-performance.html',
		'add-it.html',
		'timeline.html',
		'thanks.html'
	]
});

// Static files
server.use( express.static('./public') );

server.use(express.bodyParser());
server.use(express.cookieParser());

server.get('/', function (req, res) {
	slides.read(function (err, slidesHtml) {
		var index = swig.renderFile('./s5.html', {
			slides : slidesHtml
		});

		res.send(index);
	});
});

server.get('/e/:example', function (req, res) {
	var performanceTest = swig.renderFile('./examples/'+req.params.example+'.html',{
		grid : _.range( req.query.grid || 10 )
	});

	res.send(performanceTest);
});

server.get('/api/*', function (req, res, next) {
	console.log('using latency middleware');
	// setTimeout(function () {
		next();
	// }, 1000);
});

server.get('/api/success/', function (req, res) {
	res.send({
		success : true,
		timestamp : new Date(),
		data : req.query
	});
});

server.get('/api/request/', function (req, res) {
	var random = _.random(0, 100);

	if(random < 50){
		res.send({
			success : true,
			timestamp : new Date(),
			data : req.query
		});
	}else{
		res.send(500, {
			success : false,
			timestamp : new Date()
		});
	}
});

server.post('/api/record/', function (req, res) {
	console.log('got benchmark from user', req.body);

	server.io.broadcast('measure', req.body);
	res.send({thanks: true});
});

server.listen(3000);