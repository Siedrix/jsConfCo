$(document).ready(function(){
	console.time('Render');
	var gridHeight = window.innerHeight / gridSize;
	var gridWidth = window.innerWidth / gridSize;

	var $grid = $('.grid');

	$('.grid-item').each(function(i,item){
		var y = parseInt(i/50, 10);
		var x = i%50;

		var $item = $(item);

		var top = gridHeight * y;
		var left = gridWidth * x;

		$item.css({
			height : gridHeight,
			width : gridWidth,
			top : top,
			left : left,
			"background-color" : Color.random()
		});
	});

	console.log('time to position n:', $('.grid-item').length , ' elements');

	console.timeEnd('Render');
});

// 200 with color: 3004.079ms <=> 3299.341ms
// 200 without color: 2642.591ms <=> 2954.288ms