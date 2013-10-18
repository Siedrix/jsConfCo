$(window).load(function(){
	setTimeout(function () {
		var xhr = $.post('/api/record/',{
			gridSize : window.gridSize,
			loadTime : window.performance.timing.loadEventEnd - window.performance.timing.fetchStart,
			renderTime : window.renderTime,
			memoryUsed : window.performance.memory.usedJSHeapSize,
			memoryAvailable : window.performance.memory.jsHeapSizeLimit
		});

		xhr.done(function (data) {
			console.log(data);
		});
	}, 100);
});