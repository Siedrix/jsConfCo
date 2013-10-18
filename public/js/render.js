$(document).ready(function(){
	// console.time('Render');
	var gridHeight = window.innerHeight / gridSize;
	var gridWidth = window.innerWidth / gridSize;

	var $grid = $('.grid');

	$('.grid-item').each(function(i,item){
		var $item = $(item);

		var top = gridHeight * $item.data('y');
		var left = gridWidth * $item.data('x');

		$item.css({
			height : gridHeight,
			width : gridWidth,
			top : top,
			left : left,
			"background-color" : Color.random()
		});
	});

	console.log('time to position n:', $('.grid-item').length , ' elements');

	// console.timeEnd('Render');
});