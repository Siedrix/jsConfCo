$(document).ready(function(){
	console.time('Render');
	var startRender = window.performance.now();

	var itemDataTime = 0;
	var gridHeight = window.innerHeight / gridSize;
	var gridWidth = window.innerWidth / gridSize;


	var $grid = $('.grid');

	$('.grid-item').each(function(i,item){
		var $item = $(item);

		// var top = 100;
		// var left = 100;
		var start = window.performance.now();
		var top = gridHeight * $item.data('y');
		var left = gridWidth * $item.data('x');
		var elapsed = window.performance.now() - start;

		itemDataTime = itemDataTime + elapsed;

		// console.log('elapsed', elapsed);

		$item.css({
			height : gridHeight,
			width : gridWidth,
			top : top,
			left : left,
			"background-color" : Color.random()
		});
	});

	console.log('time to position n:', $('.grid-item').length , ' elements');
	console.log('time from item.data', itemDataTime);

	window.renderTime = window.performance.now() - startRender;
	console.timeEnd('Render');

	setTimeout(function () {
		console.log('Total time', window.performance.timing.loadEventEnd - window.performance.timing.fetchStart);
	}, 100);
});

// 200 with color: 3004.079ms <=> 3299.341ms
// 200 without color: 2642.591ms <=> 2954.288ms