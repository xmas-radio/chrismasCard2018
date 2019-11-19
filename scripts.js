const rectangleEmitter = {
	/**
	 * The canvas object
	 */
	canvas: null,

	/**
	 * CanvasContext  The canvas context object
	 */
	context: null,

	/**
	 * Object The blast zone for particles.
	 */
	blastZone: {
		x: 0,
		y: 0,
		width: 800,
		height: 600
	},

	/**
	 * Particle The type of particle to create.
	 */
	particle: null,

	/**
	 * array The list of particles in the emitter.
	 */
	particles: [],

	/**
	 * The max number of particles.
	 */
	maxParticles: 700,

	/**
	 * The intervalID for the FPS interval
	 */
	fpsId: null,

	/**
	 * The interval ID for the seconds tick.
	 */
	tickId: null,

	/**
	 * Sets the canvas object.
	 *
	 * @param canvas DOMCanvasElement  The canvas to draw on.
	 */
	setCanvas: function(canvas){
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
    this.context.fillStyle = '#ffffff';
	},

	/**
	 * Sets the blast zone.
	 *
	 * @param x      int  The x coord
	 * @param y      int  The y-coor
	 * @param width  int  The width
	 * @param height int  The height
	 */
	setBlastZone: function(x, y, width, height){
		this.blastZone = {
			'x': x,
			'y': y,
			'width': width,
			'height': height
		};
	},

	/** Starts the emitter.
	 *
	 * @param	fps	The frame rate or 30 by default
	 */
	start:function(fps){
		var rate = fps || 30;
		this.fpsId = setInterval(this.frameUpdate, 1000/rate, this); // Framerate update
		this.tickId = setInterval(this.tick, 1000, this); // Every second tick...
	},

	/**
	 * Pauses the emitter but doesn't clear the screen.
	 */
	pause:function(){
		clearInterval(this.intervalId);
	},

	/**
	 * Stops the emitter and clears the screen.
	 */
	stop:function(){
		clearInterval(this.intervalId);
		this.clear();
	},

	/**
	 * Clears off the particles.
	 */
	clear:function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},

	/**
	 * Adds a particle to the screen.
	 *
	 * @param	particle	The particle to add
	 */
	addParticle:function(particle){
		if (this.particles.length < this.maxParticles){
			var p = Object.create(particle);
			p.randomize(this.blastZone);

			// Add the particle
			this.particles.push(p);
		}
	},

	/**
	 * Draws the whole canvas.
	 */
	draw:function(r, g, b){
		this.clear();

		var i = this.particles.length;
		while (i--){
			this.particles[i].draw(this.context, r, g, b);
		}
	},

	/**
	 * Updates the particles on the screen.
	 */
	update:function(){
		var p; 
		var i = this.particles.length;
		
		while(i--){
			p = this.particles[i];
			p.update();

			// Remove the particle if it is "dead"
			if (p.y > this.canvas.height){
				this.particles.splice(i, 1);
			}
		}
	},

	/**
	 * Applies actions to all of the particles.
	 */
	applyActions:function(){
		var i = this.particles.length;
		
		while(i--){
			this.particles[i].action();
		}
	},

	/**
	 * Run the action ahead the number of seconds (so the screen isn't blank on init).
	 *
	 * @param seconds int  The number of seconds to run ahead.
	 */
	runAhead: function(seconds){
		for (i = 0; i < seconds; i += 1){
			this.frameUpdate(this);
		}
	},

	/**
	 * The FPS update
	 *
	 * @param	self	The reference to the emitter that is lost during setInterval.
	 */
	frameUpdate:function(self){
		self.addParticle(self.particle);
		self.update();
		self.draw();
	},

	/**
	 * The seconds "tick" interval
	 *
	 * @param	self	The reference to the emitter that is lost during setInterval.
	 */
	tick:function(self){
		self.applyActions();
	}

};

;const snow = {
  /**
   * float  The current x position
   */
  x: 0,

  /**
   * float  The current y position
   */
  y: 0,

  /**
   * float  Alpha
   */
  alpha: 0.5,

  /**
   * float  The radius of the circle.
   */
  radius: 3,

  /**
   * Velocity for the particle.
   */
  velocity: {
    x: 0,
    y: 5
  },

  /**
   * Draws the particle onto the canvas in context.
   *
   * @param  c   The canvas context to draw onto
   */
  draw: function (c, r = 255, g = 255, b = 255) {
    //c.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.fill();
  },

  /**
   * Updates the particle.
   */
  update: function () {
    this.x += this.velocity.x
    this.y += this.velocity.y;


  },

  /**
   * Randomizes the settings for the particle
   *
   * @param  zone  The blastZone
   */
  randomize: function (zone) {
    // Get a random point inside the blastzone and set the x/y
    var s = this.getLocation(zone);
    this.x = s.x;
    this.y = s.y;

    this.alpha = this.randomRange(0.3, 1);
    this.radius = this.randomRange(1, 5);

    this.velocity = {
      x: this.randomRange(-0.35, 0.35),
      y: this.randomRange(0.75, 1.5)
    }
  },

  /**
   * Adds a random drift type motion to the particle.
   * Taken from the Flint particle system....
   */
  action: function () {
    this.velocity.x += (Math.random() - 0.5) * 0.1;
  },

  /**
   * Take a low and high number and gets a random number between them.
   *
   * @param  low    The low number
   * @param  high  The high number
   * @return  Number
   */
  randomRange: function (low, high) {
    return (Math.random() * (high - low)) + low;
  },

  /**
   * Gets a random starting point for the particle.
   * Taken from the Flint particle system in AS3
   *
   * @param  zone  The zone to get a location from
   * @return  Object
   */
  getLocation: function (z) {
    var p = {};
    p.x = z.x + Math.random() * z.width;
    p.y = z.y + Math.random() * z.height;
    return p;
  }
};
(function () {

  function init() {
    letItSnow();
    // setMainStream();
  }

  function letItSnow() {
    console.log(document.readyState);
    // https://github.com/daveWid/canvas-snow
    const canvas = document.getElementById("snow");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Now the emitter
    const emitter = Object.create(rectangleEmitter);
    emitter.setCanvas(canvas);
    emitter.setBlastZone(0, -10, canvas.width, 1);
    emitter.particle = snow;
    emitter.runAhead(0);
    emitter.start(60);
  }

  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
      init();
    }
  }, 100);


})();


;
//# sourceMappingURL=scripts.js.map