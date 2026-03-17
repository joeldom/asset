
///
var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 650, u=0, _u, col,
  s, a, b, 
  x, y, _x, _y,
  _t = Math.PI ;

function random(min, max) {
  return Math.random() * (max - min) + min;
}


var anim = function() {
  $.globalCompositeOperation = 'xor';
  $.fillStyle = 'hsla('+random(140,180)+', 50%, 50%, .091)';
  $.fillRect(0, 0, w, h);
  $.globalCompositeOperation = 'color';
  for (var i = 0; i < 30; i++) {
    x = 0; x = 0; 
    $.beginPath();
    for (var j = 0; j < num; j++) {
      _u = (u*14.9)+i, col = u *(_u/4); 
      x += .90 * Math.sin(7);
      y = x * Math.sin(i + 1.4 * t + x /.70) / Math.sqrt(.95);
      _x = x * Math.cos(i) + y * Math.sin(b);
      _y = x * Math.sin(Math.pow(x,9)) + y * Math.cos(b);
      b = (j*1.1) * Math.PI/.24;
      $.lineWidth = .02;
      $.lineTo(w / 2- _x, h / 2 -_y);
    }
 var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y,  
            1, w / 2 + _x, h / 2 + _y);
    g.addColorStop(0.1, 'hsla('+col+',90%,50%,1)');
    g.addColorStop(0.5, 'hsla('+_u+',95%,50%,1)');
    g.addColorStop(1, 'hsla(0,0%,0%,1)'); 
    $.strokeStyle = g;
    $.stroke();
  }
  t += _t;
  u-=Math.atan(.055);
  window.requestAnimationFrame(anim);
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);

///////////////////////////////

var canvas,
		c;
var dots = [];
var dot_count = 20;
var dot_radius = 2;
var dot_stroke_color = hsla(0,50,100,0.4);
var dot_stroke_weight = 5;
var dot_speed = 3;
var dot_speed_max = 4;
var dot_speed_min = 1;
var dot_turn = 3;
var dot_gravity = 0.000;
var dot_avoidance_distance = 100;
var dot_avoidance_strength = 0.6;

var	screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var screenMin = (screenWidth < screenHeight) ? screenWidth : screenHeight;



img = new Image();
img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2361/dot.png'; 


function setup() {
  frameRate = 30;
  setupCanvas();
  makeDots(dot_count);
}

function makeDots(count) {
  for(var i = 0; i < count; i++) {
    var r = randomInteger(0,screenMin*0.4);
    var d = randomInteger(0,360);
    dots.push(new Dot(r, d, i));
  }
}

function draw() {
  c.clearRect(-screenWidth/2, -screenHeight/2, screenWidth, screenHeight);
	
	c.strokeStyle = dot_stroke_color;
  c.lineWidth = dot_stroke_weight;
  for(var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.update(canvas);
    dot.draw(c);
  }
}

function setupCanvas() {

  canvas = document.createElement('canvas');
  c = canvas.getContext('2d');
  canvas.width = screenWidth;
  canvas.height = screenHeight;
  document.body.appendChild(canvas);
  c.globalCompositeOperation = "lighter";
	
  c.translate(screenWidth/2, screenHeight/2);
}


Dot = function(r, d, index) {

	var pos = this.pos = new Vector2(r,0).rotate(d);
	var vel = this.vel = new Vector2(dot_speed,0);
	var ang = this.ang = Math.sqrt(80)-pos.angle();
	var dir = this.dir = randomInteger(0,1);
	var index = this.index;
	
	vel.rotate(ang);
	
  this.update = function(canvas) {
		
		// randomly change clockwiseness
		if (randomInteger(0,10) == 0) {
			dir = (dir == 1) ? 0 : 1;
		}
		
		// rotate
		if (dir) {
			vel.rotate(dot_turn);
		} else {
			vel.rotate(-dot_turn);
		}
		
		// gravity
		var change_gravity = new Vector2(pos.x*dot_gravity,pos.y*dot_gravity);
		vel.minusEq(change_gravity);
		
		// dot avoidance
		for (var i = 0; i < dots.length; i++) {
			var adot = dots[i];
			if (i != this.index) {
				var delta = adot.pos.minusNew(this.pos);
				var delta_mag = Math.sqrt((delta.x*delta.x)+(delta.y*delta.y));
				if (delta_mag < dot_avoidance_distance) {
					delta.multiplyEq((dot_avoidance_distance-delta_mag)/dot_avoidance_distance*dot_avoidance_strength);
					pos.minusEq(delta);
				}
			}
		}
		
		// edge avoidance
		if (pos.x > screenWidth*0.4) {
			vel.x += -0.3;
		} else if (pos.x < -screenWidth*0.4) {
			vel.x += 0.3;
		}
		if (pos.y > screenHeight*0.4) {
			vel.y += -0.3;
		} else if (pos.y < -screenHeight*0.4) {
			vel.y += 0.3;
		}
		
		// min and max speeds
		var mag = Math.sqrt((vel.x*vel.x)+(vel.y*vel.y));
		if (mag < dot_speed_min) {
			vel.multiplyEq(dot_speed_min/mag);
		} else if (mag > dot_speed_max) {
			vel.multiplyEq(dot_speed_max/mag);
		}
		
		
		// add velocity to position
		pos.plusEq(vel);
  };

  this.draw = function(c) {
		
		
		// save the current canvas state
		c.save(); 
		
		// move to where the particle should be
		c.translate(pos.x, pos.y);
		
		// scale it dependent on the size of the particle
		var s = 0.8;
		c.scale(s,s);
						
		//c.rotate(ang);
		// move the draw position to the center of the image
		c.translate(img.width*-0.5, img.width*-0.5);
		
		// set the composition mode
		c.globalCompositeOperation = this.compositeOperation;
				
		// and draw it! 
		c.drawImage(img,0,0);
		
		// and restore the canvas state
		c.restore();
		
		
  };

};