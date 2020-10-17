const socket = io.connect("http://localhost:3000");
function setup(){
    createCanvas(500, 500);
    background(51);
    socket.on('qwe', newDrawing);
}

function newDrawing(mx, my) {
    noStroke();
    fill(255, 0, 100);
    ellipse(mx, my, 36, 36);
}
function mouseDragged(){
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36)
    console.log(mouseX, mouseY)
    socket.emit("coords", mouseX, mouseY)
}
function draw(){    
}

