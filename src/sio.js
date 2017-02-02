JSMpeg.Source.Sio = (function(){ "use strict";

var SioSource = function(conn, options) {
	this.conn = conn;
    this.camera = options.camera;
	this.destination = null;
	this.established = true;
	this.completed = false;
	this.progress = 1;
};

SioSource.prototype.connect = function(destination) {
	this.destination = destination;
};

SioSource.prototype.start = function() {

    var self = this;

    this.conn.on('cameraFrame', function (frame) {
	    if (self.destination && frame.camera === self.camera) {
		    self.destination.write(frame.image);
	    }
    });
};

SioSource.prototype.resume = function(secondsHeadroom) {
	// Nothing to do here
};

return SioSource;

})();

