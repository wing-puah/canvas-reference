(function(){
  let c = document.getElementById('xMovingCircle'),
      ctx = c.getContext('2d'),
      cWidth = c.width;

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

  let ball = {
    x: 30,
    y: 100,
    vx: 5,
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x,this.y,30,0,2*Math.PI);  // x, y, radius, starting angle (radians), ending angle (radians), counterclockwise
      ctx.fillStyle = 'lightcoral';
    }
  }
  function draw(){
    let reverse = false;
    ctx.clearRect(0, 0, 200, 200);
    ctx.fill();
    ball.draw();

    if( ball.x < 0 || ball.x > c.width ){
      ball.vx = -ball.vx;
    }

    ball.x += ball.vx;
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
})();
