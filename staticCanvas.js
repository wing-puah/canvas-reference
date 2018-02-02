function drawStraight(){
  let c = document.getElementById('straightLine'),
      ctx = c.getContext('2d');
  ctx.moveTo(0,100);
  ctx.lineTo(200,100);
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function drawDiagonal(){
  let c = document.getElementById('diagonalLine'),
      ctx = c.getContext('2d');
  ctx.moveTo(0,0);
  ctx.lineTo(200,200);
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function drawGradientLine(){
  let c = document.getElementById('gradientLine'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');
  ctx.moveTo(0,200);
  ctx.lineTo(200,0);
  ctx.lineWidth = 5;
  ctx.strokeStyle = gradient;
  ctx.stroke();
}

function drawGradientRect(){
  let c = document.getElementById('gradientRect'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');

  ctx.rect(25,25,150,150);
  ctx.fillStyle = gradient;
  ctx.fill();
}

function drawGradientRectStroke(){
  let c = document.getElementById('gradientRectStroke'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');

  ctx.rect(25,25,150,150);
  ctx.lineWidth = 5;
  ctx.strokeStyle = gradient;
  ctx.stroke();
}

function drawGradientCircle(){
  let c = document.getElementById('gradientCircle'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');

  ctx.beginPath();
  ctx.arc(100,100,80,0,2*Math.PI);  // x, y, radius, starting angle (radians), ending angle (radians), counterclockwise
  ctx.fillStyle = gradient;
  ctx.fill();
}

function drawGradientCircleStroke(){
  let c = document.getElementById('gradientCircleStroke'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');
  ctx.lineWidth = 10;
  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.arc(100,100,80,1.5*Math.PI,1.2*Math.PI);
  ctx.stroke();
}

function drawQuadraticCurve(){
  let c = document.getElementById('quadraticCurve'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(25,175);
  ctx.quadraticCurveTo(100,-150,175,175);  // ctrl point-x, ctrl point-y, end point-x, end point-y

  ctx.strokeStyle = gradient;
  ctx.stroke();
}

function drawBezierCurve(){
  let c = document.getElementById('bezierCurve'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(25,175);
  ctx.bezierCurveTo(100,-150,150,350,180, 5); // ctrl point-x1, ctrl point-y1, ctrl point-x2, ctrl point-y2, end point-x, end point-y

  ctx.strokeStyle = gradient;
  ctx.stroke();
}

function drawStrokeText(){
  let c = document.getElementById('strokeText'),
      ctx = c.getContext('2d'),
      gradient = ctx.createLinearGradient(0,0,200,0);

  ctx.font="50px Verdana";
  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('0.5', 'blue');
  gradient.addColorStop('1', 'red');
  ctx.lineWidth = 3;
  ctx.strokeStyle = gradient;
  ctx.strokeText('Hello', 30, 100, 150);
}



drawStraight();
drawDiagonal();
drawGradientLine();
drawGradientRect();
drawGradientRectStroke();
drawGradientCircle();
drawGradientCircleStroke();
drawQuadraticCurve();
drawBezierCurve();
drawStrokeText();
