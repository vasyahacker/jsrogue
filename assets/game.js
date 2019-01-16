var Game =  {
	_display: null,
    _currentScreen: null,
    _screenWidth: 80,
    _screenHeight: 24,
    _referenseWidth: 27,
    _logHeight: 9,
    _audio: null,
	init: function() {
        // Any necessary initialization will go here.
        this._display = new ROT.Display({
            width: this._screenWidth + this._referenseWidth,
            height: this._screenHeight + this._logHeight,
            fontSize: 18
        });
        // Create audio manager
        this._audio = new Game.Audio();
        // Create a helper function for binding to an event
        // and making it send it to the screen
        var game = this; // So that we don't lose this
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(e) {
                // When an event is received, send it to the
                // screen if there is one
                if (game._currentScreen !== null) {
                    // Send the event type and data to the screen
                    game._currentScreen.handleInput(event, e);
                }
            });
        };
        // Bind keyboard input events
        bindEventToScreen('keydown');
        //bindEventToScreen('keyup');
        bindEventToScreen('keypress');
    },
	getDisplay: function() {
		return this._display;
	},
	getScreenWidth: function() {
        return this._screenWidth;
	},
    getScreenHeight: function() {
        return this._screenHeight;
    },
	getAudio: function() {
	    return this._audio;
	},
    refresh: function() {
        // Clear the screen
        this._display.clear();
        // Render the screen
        this._currentScreen.render(this._display);
    },
	switchScreen: function(screen) {
        // If we had a screen before, notify it that we exited
        if (this._currentScreen !== null) {
            this._currentScreen.exit();
        }
        // Clear the display
        this.getDisplay().clear();
        // Update our current screen, notify it we entered
        // and then render it
        this._currentScreen = screen;
        if (!this._currentScreen !== null) {
            this._currentScreen.enter();
            this.refresh();
        }
    }
};
