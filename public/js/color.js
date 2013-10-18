Color = {};
Color.random = function () {
	return  "#" + parseInt(Math.random() * 10, 10) +
	parseInt(Math.random() * 10, 10) +
	parseInt(Math.random() * 10, 10) +
	parseInt(Math.random() * 10, 10) +
	parseInt(Math.random() * 10, 10) +
	parseInt(Math.random() * 10, 10);
};

Color.randomRbg = function () {
	return  "rgb(" +
	parseInt(Math.random() * 1000 / 4, 10) + "," +
	parseInt(Math.random() * 1000 / 4, 10) + "," +
	parseInt(Math.random() * 1000 / 4, 10) +
	")";
};