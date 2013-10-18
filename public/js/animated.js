$(document).ready(function(){
	var gridHeight = window.innerHeight / gridSize;
	var gridWidth = window.innerWidth / gridSize;

	var $grid = $('.grid');

	$('.grid-item').each(function(i,item){
		var $item = $(item);

		$item.css({
			height : gridHeight,
			width : gridWidth,
			top : gridHeight * $item.data('y'),
			left : gridWidth * $item.data('x'),
			"background-color" : Color.random()
		});

		setInterval(function(){
			// $item.toggle();
			$item.fadeToggle();
		}, Math.random() * 1000);
	});

	console.log('time to position n:', $('.grid-item').length , ' elements');

	console.timeEnd('Render');
});