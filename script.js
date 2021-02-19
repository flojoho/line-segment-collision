

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function createVector(x, y) {
  return {
    x,
    y
  }
}

function createRandomVector() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  return createVector(x, y);
}





function createLineSegment(vector1, vector2) {
  return {
    start: vector1,
    end: vector2
  }
}

function createRandomLineSegment() {
  const vector1 = createRandomVector();
  const vector2 = createRandomVector();
  return createLineSegment(vector1, vector2);
}

function getLineIntersection(segment1, segment2) {
  segment1.start;
  segment1.end;
  segment2.start;
  segment2.end;
}

function drawLineSegment(segment) {

}



function drawCross(vector) {
  const size = 10;

  const { x, y } = vector;
  
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);

  ctx.moveTo(x + size, y - size);
  ctx.lineTo(x - size, y + size);
  ctx.stroke();

  console.log('x - size, y - size:', x - size, y - size);
}


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const segment1 = createRandomLineSegment();
const segment2 = createRandomLineSegment();
const intersection = getLineIntersection(segment1, segment2);

drawLineSegment(segment1);
drawLineSegment(segment2);
// drawCross(intersection);
drawCross(createRandomVector());