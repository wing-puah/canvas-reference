(function(){
  //rotatingCircle

  let c = document.getElementById('rotatingCircle'),
      ctx = c.getContext('2d'),
      cWidth = c.width,
      cHeight = c.height,
      circle;

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

  function Circle2( angle, sign, radius, rotationRadius, initialX, initialY) {
    this.angle = angle;
    this.sign = sign;
    this.radius = radius;
    this.rotationRadius = rotationRadius;
    this.initialX = initialX;
    this.initialY = initialY;
    this.incrementer = 0.2 + Math.random() *.3;
  }

  Circle2.prototype.update = function(){
    this.angle += this.incrementer;
    this.currentX = this.initialX + this.rotationRadius * Math.cos(this.angle);
    this.currentY = this.initialY + this.rotationRadius * Math.sin(this.angle);

    if( this.angle >= ( Math.PI * 2 ) ){
      this.angle = 0;
      this.incrementer = 0.2 + Math.random() *.3;
    }

    ctx.beginPath();
    ctx.arc( this.currentX, this.currentY, this.radius, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(34, 220, 127, .6)';
    ctx.fill();
  }
  createCircle2();

  function createCircle2(){

    var radius = 5 + Math.random() * 80;
    var initialX = cWidth / 2;
    var initialY = cHeight / 2;
    var rotationRadius = 1 + Math.random() * 15;
    var angle = Math.random() * 2 * Math.PI;

    var signHelper = Math.floor( Math.random() * 2 );
    var sign;

    // Randomly specify the direction the circle will be rotating
    if (signHelper == 1) {
       sign = -1;
    } else {
       sign = 1;
    }

    //create circle object
    circle = new Circle2( angle, sign, radius, rotationRadius, initialX, initialY );

    draw2();
  };

  function draw2() {
    ctx.clearRect( 0, 0, cWidth, cHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, cWidth, cHeight);
    circle.update();
    requestAnimationFrame(draw2);
  }

})();
