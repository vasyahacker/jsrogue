Game.RTEngine = function(scheduler) {
    this._delay = 180;
    this._scheduler = scheduler;
    this._started = false;
};
Game.RTEngine.prototype.delay = function(delay) {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
}
Game.RTEngine.prototype.mainLoop = async function() {
    var i = 0;
    while (this._started) {
        if( i++ == this._scheduler._repeat.length )
        {
            i = 0;
            await this.delay(this._delay);
        }
        let actor = this._scheduler.next();
        if (!actor) { console.log("empty actor!"); break; }
        var now = Date.now();
        var lat = actor.getLAT();
        var speed = actor.getSpeed();
        if(now >= lat+speed){
            await actor.act();
            actor.setLAT(now);
        }
        else
            continue;
    }
};
Game.RTEngine.prototype.lock = function(){};
Game.RTEngine.prototype.unlock = function(){};
Game.RTEngine.prototype.start = function(){
    this._started = true;
    this.mainLoop();
};
Game.RTEngine.prototype.stop = function(){
    this._started = false;
};