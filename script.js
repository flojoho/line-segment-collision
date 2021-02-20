const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.lineCap = "round";

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);



function createVector(x, y) {
  const vector = {
    x,
    y,
    plus(vector2) {
      const x = this.x + vector2.x;
      const y = this.y + vector2.y;

      return createVector(x, y);
    },
    times(num) {
      const x = this.x * num;
      const y = this.y * num;

      return createVector(x, y);
    },
    to(vector2) {
      const x = vector2.x - this.x;
      const y = vector2.y - this.y;

      return createVector(x, y);
    }
  }
  // minus
  // dot
  // cross
  return vector;
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
  const s1 = segment1;
  const s2 = segment2;

  const denominator = (s1.end.y - s1.start.y) * (s2.end.x - s2.start.x) - (s1.end.x - s1.start.x) * (s2.end.y - s2.start.y);

  if(denominator === 0) return null; // lines are parallel

  const numerator = (s1.end.x - s1.start.x) * (s2.start.y - s1.start.y) - (s1.end.y - s1.start.y) * (s2.start.x - s1.start.x);

  const factor = numerator / denominator;

  return s2.start.plus(s2.start.to(s2.end).times(factor));
}

function drawLineSegment(segment) {
  const { start, end } = segment;

  ctx.strokeStyle = 'green';

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
}



function drawCross(vector) {
  const size = 10;

  const { x, y } = vector;
  
  ctx.strokeStyle = 'red';

  ctx.beginPath();
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);

  ctx.moveTo(x + size, y - size);
  ctx.lineTo(x - size, y + size);
  ctx.stroke();
}


const segment1 = createRandomLineSegment();
const segment2 = createRandomLineSegment();
const intersection = getLineIntersection(segment1, segment2);

drawLineSegment(segment1);
drawLineSegment(segment2);
drawCross(intersection);