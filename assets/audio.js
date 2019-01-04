Game.Audio = function() {
	this._supported = !!window.Audio;
	var tmp = new Audio();
	this._ext = (tmp.canPlayType("audio/ogg") ? "ogg" : "mp3");
	
	this._effects = {
		step:	{ count: 3 },
		death:	{ count: 2 },
		hit:	{ count: 1 }
	};

	for (var name in this._effects) {
		var data = this._effects[name];
		data.audio = [];
		for (var i=0;i<data.count;i++) {
			var n = name;
			if (data.count > 1) { n += i; }
			var a = new Audio(this._expandName(n));
			a.volume = 0.6;
			a.load();
			data.audio.push(a);
		}
	}
}
	
Game.Audio.prototype.play = function(name) {
	if (!this._supported) { return; }
	var data = this._effects[name];
	if (!data) { return; }
	data.audio.random().play();
}

Game.Audio.prototype._expandName = function(name) {
	return "s/" + name  + "." + this._ext;
}
