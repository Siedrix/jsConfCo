var Neon = require('neon'),
	async = require('async'),
	_ = require('underscore'),
	fs = require('fs');

var Slides = Neon.Class()({
	prototype : {
		list : [],
		init : function (config) {
			this.list = config.list || [];
			this.slidesFolder = config.slidesFolder || './slides';
		},
		read : function (callback) {
			var self = this;

			var slidesFiles = _.map(this.list, function(slideName){ return self.slidesFolder + '/' + slideName; });

			async.map(slidesFiles, fs.readFile, function(err, results){
				if(err){
					callback(err, null);
					return;
				}

				var slides = _.map(results, function (buffer) {return buffer.toString();});

				callback(null, slides);
			});
		}
	}
});

module.exports = Slides;