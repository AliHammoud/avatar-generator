function setup() {
  var canvas = createCanvas(320, 320);
  canvas.parent('c');
  background(0);
  frameRate(1);
  
}

var palette = [
  ['#FE938C', '#FFE4D9'],
  ['#4B7F52', '#7DD181'],
  ['#9D45B6', '#8DDBE0'],
  ['#50FFB1', '#4FB286'],
  ['#624DEE', '#D8A7CA'],
  ['#84A07C', '#C3D351'],
  ['#3554D1', '#34D1BF'],
  ['#CCFF66', '#5D2E8C'],
  ['#FF9506', '#FFB627']
]

function draw() {
  var id = int(Math.random() * palette.length);
  var boxes = color(palette[id][0]);
  var bg = color(palette[id][1]);
  
  var c_width = 40;
  var epochs = 8;
  
  var ruleset = Array(8).fill().map(
    () => Math.round(Math.random())
  );
  
  var cells = Array(8).fill().map(
    () => Math.round(Math.random())
  );
  
  var new_cells = []
  
  background(0)
  noStroke()

  function rules(a, b, c){
    return ruleset[
      parseInt(a.toString() + b.toString() + c.toString(), 2)
    ]
  }
  
  
  for (var x = 0; x < epochs; x++) {
    new_cells.push(cells[0]);
    
    for (var i = 0; i < cells.length; i++) {
      if (cells[i] === 1) {
        fill(boxes)
      } else {
        fill(bg);
      }

      rect(i * c_width, x * c_width, c_width, c_width);
    }
    
    for (var i = 1; i < cells.length - 1; i++) {
      var left = cells[i-1];
      var middle = cells[i];
      var right = cells[i+1];
      
      var new_state = rules(left, middle, right);
      new_cells.push(new_state);
    }
    
    new_cells.push(cells[cells.length - 1]);
    
    cells = Array.from(new_cells);
    new_cells = [];
    
  }
}

function pauseGeneration() {
  frameRate(0);
}


function resumeGeneration() {
  frameRate(1);
}