(function(){

  var mainCanvas  = document.getElementById('amorphousCircle'),
      mainCtx     = mainCanvas.getContext('2d');

  var canvasWidth = mainCanvas.width,
      canvasHeight= mainCanvas.height;

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

  var circles = new Array();

  function Circle( angle, sign, radius, rotationRadius, initialX, initialY ){
    this.angle = angle;
    this.sign = sign;
    this.radius = radius;
    this.rotationRadius = rotationRadius;
    this.initialX = initialX;
    this.initialY = initialY;
    this.incrementer = .01 + Math.random() * .1;  //Math.random returns random no between 0(inclusive) and 1(exclusive)
  }

  Circle.prototype.update = function(){

    this.angle += this.incrementer;

    this.currentX = this.initialX + this.rotationRadius * Math.cos(this.angle);
    this.currentY = this.initialY + this.rotationRadius * Math.sin(this.angle);

    if( this.angle >= ( Math.PI * 2 ) ){
      this.angle = 0;
      this.incrementer = .01 + Math.random() * .1;
    }

    //draw circle
    mainCtx.beginPath();
    mainCtx.arc( this.currentX, this.currentY, this.radius, 0, Math.PI * 2, false );
    mainCtx.closePath();
    mainCtx.fillStyle = 'rgba( 0, 51, 204, .1 )';
    mainCtx.fill();
  };

  //create multiple circles
  function createCircles(){
    //control the number of circles
    for( var i = 0; i < 50; i++ ){
      var radius = 5 + Math.random() * 70;
      var initialX = canvasWidth / 2;
      var initialY = canvasHeight / 2;
      var rotationRadius = 1 + Math.random() * 15;
      var angle = Math.random() * 2 * Math.PI;

      var signHelper = Math.floor( Math.random() * 2 ); //Math.floor round no. down to nearest int
      var sign;

      // Randomly specify the direction the circle will be rotating
      if (signHelper == 1) {
         sign = -1;
      } else {
         sign = 1;
      }

      //create circle object
      var circle = new Circle( angle, sign, radius, rotationRadius, initialX, initialY );
      circles.push(circle);
    }
    draw();
  };
  createCircles();

  function draw(){
    mainCtx.clearRect( 0, 0, canvasWidth, canvasHeight );
    mainCtx.fillStyle = 'white';
    mainCtx.fillRect( 0, 0, canvasWidth, canvasHeight );

    for( var i = 0; i < circles.length; i++ ){
      var circle = circles[i];
      circle.update();
    }

    requestAnimationFrame(draw);
  }
})();
