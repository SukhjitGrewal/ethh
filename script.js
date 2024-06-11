// Canvas setup
var cnv = document.getElementById("my-canvas");
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 400;
let rVal = 173;
let bVal = 215;
let gVal = 240;

let snowr = 255;
let snowb = 255;
let snowg = 255;

let cloud1X = 210;
let cloud2X = 100;
let cloud3X = 300;
let sun1X = 55;
let coyoteX = 100;
requestAnimationFrame(canvas);
function canvas() {
  // Sky
  ctx.fillStyle = ` rgb(${rVal}, ${bVal}, ${gVal})`;
  ctx.fillRect(0, 0, 500, 500);

  // Grass
  ctx.fillStyle = `green`;
  ctx.fillRect(0, 280, 500, 500);

  // Moutains Gray

  // Moutain 1
  ctx.fillStyle = `gray`;
  ctx.beginPath();
  ctx.moveTo(0, 280);
  ctx.lineTo(130, 50);
  ctx.lineTo(250, 280);
  ctx.moveTo(0, 280);
  ctx.fill();

  // Moutain 2
  ctx.fillStyle = `gray`;
  ctx.beginPath();
  ctx.moveTo(120, 280);
  ctx.lineTo(240, 50);
  ctx.lineTo(370, 280);
  ctx.moveTo(120, 280);
  ctx.fill();

  // Moutain 3
  ctx.fillStyle = `gray`;
  ctx.beginPath();
  ctx.moveTo(230, 280);
  ctx.lineTo(370, 50);
  ctx.lineTo(500, 280);
  ctx.moveTo(230, 280);
  ctx.fill();

  // Snow 1
  ctx.fillStyle = `rgb(${snowr}, ${snowg}, ${snowb})`;
  ctx.beginPath();
  ctx.moveTo(130, 50);
  ctx.lineTo(156, 100);
  ctx.lineTo(102, 100);
  ctx.moveTo(130, 50);
  ctx.fill();
  // Snow 2
  ctx.fillStyle = `rgb(${snowr}, ${snowg}, ${snowb})`;
  ctx.beginPath();
  ctx.moveTo(370, 50);
  ctx.lineTo(340, 100);
  ctx.lineTo(399, 100);
  ctx.moveTo(370, 50);
  ctx.fill();
  // Snow 3
  ctx.fillStyle = `rgb(${snowr},  ${snowg}, ${snowb})`;
  ctx.beginPath();
  ctx.moveTo(240, 50);
  ctx.lineTo(214, 100);
  ctx.lineTo(268, 100);
  ctx.moveTo(240, 50);
  ctx.fill();

  // Sun
  ctx.fillStyle = `yellow`;
  ctx.beginPath();
  ctx.arc(sun1X, 40, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, 17, 65, 60);
  ctx.drawImage(cloud, cloud2X, 25, 65, 60);
  ctx.drawImage(cloud, cloud3X, 15, 65, 60);

  // Pond
  ctx.fillStyle = `blue`;
  ctx.beginPath();
  ctx.arc(300, 340, 55, 0, 2 * Math.PI);
  ctx.fill();

  // Fishhead
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(300, 330, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Fishtail
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(300, 330);
  ctx.lineTo(320, 320);
  ctx.lineTo(320, 345);
  ctx.lineTo(300, 330);
  ctx.fill();

  // Title
  ctx.fillStyle = "rgb(139,69,20)";
  ctx.font = "20px Arial";
  ctx.fillText("The Forest", 20, 20);

  // Wolf
  let coyote = document.getElementById("my-canvas2");
  ctx.drawImage(coyote, coyoteX, 300, 105, 80);

  // Animation
  // Snow Melting
  snowr -= 0.25; // 0 > 255
  if (snowr < 128) {
    snowr = 128;
  }

  snowg -= 0.25; // 0 > 255
  if (snowg < 128) {
    snowg = 128;
  }

  snowb -= 0.25; // 255 > 0
  if (snowb < 128) {
    snowb = 128;
  }
  // Sky change

  // Block color change

  rVal -= 0.5; // 0 > 255
  if (rVal == 0) {
    rVal = 0;
  }

  gVal -= 0.5; // 0 > 255
  if (gVal == 0) {
    gVal = 0;
  }

  bVal -= 0.5; // 255 > 0
  if (bVal == 0) {
    bVal = 0;
  }

  // Cloud change

  // Animation
  cloud1X = cloud1X + 1;
  cloud2X = cloud2X + 1.75;
  cloud3X = cloud3X + 1.25;

  if (cloud1X >= 400) {
    cloud1X = -85;
    cloud1Y = Math.random() * 250;
  }
  if (cloud2X >= 400) {
    cloud2X = -85;
    cloud2Y = Math.random() * 250;
  }
  if (cloud3X >= 400) {
    cloud3X = -85;
    cloud3Y = Math.random() * 250;
  }

  // Sun change
  sun1X = sun1X + 1.5;

  // Sun change
  coyoteX = coyoteX + 1.5;

  requestAnimationFrame(canvas);
}
