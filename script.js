window.onresize = function () {
    location.reload();
}

function drawImage() {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    var lineThickness = 6.5;

    var color = 'black';

    c.clearRect(0,0,canvas.width, canvas.height);

    sectionOne(lineThickness,color);
    sectionTwo(lineThickness,color);
    diamonShapeL();
    diamondShapeR();
    horizontalSectionOne(lineThickness,color);
    horizontalSectionTwo(lineThickness,color);
    horizontalSectionThree(lineThickness,color);
    horizontalSectionfour(lineThickness,color);

}

function sectionOne(width,color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;

    var maxHeight = window.innerHeight;
    var x1perecntHeight = 0.46;
    var y = maxHeight * 0.025;
    var maxWidth = innerWidth;

    for (var x = maxWidth * 0.06; x < maxWidth * 0.5; x += maxWidth * 0.04) {
        var x1 = x + width;
        if (count == 12) {
            break;
        }
        else {
            var y2 = maxHeight * x1perecntHeight;
        }
        var y1 = y + 1;
        c.beginPath();
        c.moveTo(x, y1);
        c.lineTo(x1, y1);

        c.lineTo(x1, y2);
        c.lineTo(x, y2);

        c.fillStyle = color;
        c.fill();
        c.closePath();
        x1perecntHeight -= 0.04;
        y += 1;
        count++;

    }

    count = 1;
    var x2percentHeight = 0.54;
    var y = maxHeight * 0.975;

    for (x = maxWidth * 0.06; x < maxWidth * 0.5; x += maxWidth * 0.04) {
        x1 = x + width;
        if (count == 12) {
            break;
        }
        else {
            y1 = maxHeight * x2percentHeight;
        }
        y2 = y - 1;
        c.beginPath();
        c.moveTo(x, y1);
        c.lineTo(x1, y1);
        c.lineTo(x1, y2);
        c.lineTo(x, y2);
        c.fillStyle = color;
        c.fill();
        c.closePath();
        x2percentHeight += 0.04;
        y -= 1;
        count++;
    }
}

function sectionTwo(width, color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;

    var maxHeight = window.innerHeight;
    var x1perecntHeight = 0.46;
    var y = maxHeight * 0.025;
    var maxWidth = innerWidth;

    for (var x = maxWidth * 0.91; x > maxWidth * 0.5; x -= maxWidth * 0.04) {
        var x1 = x + width;
        if (count == 12) {
            break;
        }
        else {
            var y2 = maxHeight * x1perecntHeight;
        }
        var y1 = y + 1;
        c.beginPath();
        c.moveTo(x, y1);
        c.lineTo(x1, y1);

        c.lineTo(x1, y2);
        c.lineTo(x, y2);

        c.fillStyle = color;
        c.fill();
        c.closePath();
        x1perecntHeight -= 0.04;
        y += 1;
        count++;

    }

    count = 1;
    var x2percentHeight = 0.54;
    var y = maxHeight * 0.975;

    for (var x = maxWidth * 0.91; x > maxWidth * 0.50; x -= maxWidth * 0.04) {
        x1 = x + width;
        if (count == 12) {
            break;
        }
        else {
            y1 = maxHeight * x2percentHeight;
        }
        y2 = y - 1;
        c.beginPath();
        c.moveTo(x, y1);
        c.lineTo(x1, y1);
        c.lineTo(x1, y2);
        c.lineTo(x, y2);
        c.fillStyle = color;
        c.fill();
        c.closePath();
        x2percentHeight += 0.04;
        y -= 1;
        count++;

    }

}

function diamonShapeL() {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var heightPercent = 0.06;
    var y = maxHeight * heightPercent;

    for (x = maxWidth * 0.485; x > maxWidth * 0.265; x -= maxWidth * 0.02) {
        x1 = x + 6.5;
        if (count == 12) {
            break;
        }
        else {
            y = maxHeight * heightPercent;
            y1 = maxHeight * (1 - heightPercent);
        }
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle = "black";
        c.fill();
        c.closePath();
        heightPercent += 0.04;
        count++;

    }

}

function diamondShapeR() {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var heightPercent = 0.06;
    var y = maxHeight * heightPercent;

    for (x = maxWidth * 0.485; x > maxWidth * 0.265; x += maxWidth * 0.02) {
        x1 = x + 6.5;
        if (count == 12) {
            break;
        }
        else {
            y = maxHeight * heightPercent;
            y1 = maxHeight * (1 - heightPercent);
        }
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle = "black";
        c.fill();
        c.closePath();
        heightPercent += 0.04;
        count++;

    }
}

function horizontalSectionOne(width, color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var widthPercent2 = 0.286;
    var heightPercent = 0.46;

    for (var x = maxWidth * 0.06; x < maxWidth * 0.5; x += maxWidth * 0.04) {
        if (count == 12) {
            break;
        }
        else {
            var y = maxHeight * heightPercent;
            var y1 = y + width;
            var x1 = maxWidth * widthPercent2;
        }

        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle = color;
        c.fill();
        c.closePath();
        widthPercent2 += 0.02;
        heightPercent -= 0.04;
        count++;
    }

}

function horizontalSectionTwo(width,color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var widthPercent2 = 0.5142;
    var heightPercent = 0.06;

    for (var x = maxWidth * 0.486; x < maxWidth * 99; x += maxWidth * 0.02) {
        if (count == 12) {
            break;
        }
        else {
            var x1 = maxWidth * widthPercent2;
            var y = maxHeight * heightPercent;
            var y1 = y + width;
        }

        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle=color;
        c.fill();
        c.closePath();
        widthPercent2 += 0.04;
        heightPercent += 0.04;
        count++;
    }

}


function horizontalSectionThree(width, color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var widthPercent2 = 0.5142;
    var heightPercent = 0.931;

    for (var x = maxWidth * 0.486; x < maxWidth * 99; x += maxWidth * 0.02) {
        if (count == 12) {
            break;
        }
        else {
            var x1 = maxWidth * widthPercent2;
            var y = maxHeight * heightPercent;
            var y1 = y + width;
        }

        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle=color;
        c.fill();
        c.closePath();
        widthPercent2 += 0.04;
        heightPercent -= 0.04;
        count++;
    }

}

function horizontalSectionfour(width, color) {
    var canvas = document.getElementById('riley-image');
    var c = canvas.getContext("2d");

    var count = 1;
    var maxHeight = innerHeight;
    var maxWidth = innerWidth;
    var widthPercent2 = 0.286;
    var heightPercent = 0.5312;

    for (var x = maxWidth * 0.06; x < maxWidth * 0.5; x += maxWidth * 0.04) {
        if (count == 12) {
            break;
        }
        else {
            var y = maxHeight * heightPercent;
            var y1 = y + width;
            var x1 = maxWidth * widthPercent2;
        }

        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x1, y);
        c.lineTo(x1, y1);
        c.lineTo(x, y1);
        c.fillStyle=color;
        c.fill();
        c.closePath();
        widthPercent2 += 0.02;
        heightPercent += 0.04;
        count++;
    }

}

if (window.DeviceMotionEvent) {
    console.log("Supports Device Motion");

    window.addEventListener('devicemotion', deviceMotionEvent, true);

}
else {
    console.log("Device orientation is not supported");
}

function deviceMotionEvent(e) {

    var x = e.accelerationIncludingGravity.x;
    var y = e.accelerationIncludingGravity.y;
    var z = e.accelerationIncludingGravity.z;

    //document.getElementById('x').innerHTML = x;
    //document.getElementById('y').innerHTML = y;
    //document.getElementById('z').innerHTML = z;

    console.log("x", x);
    console.log("y", y);
    console.log("z", z);

    //bottom motion
    if (y > 0) {
        requestAnimationFrame(yBMotion(e.accelerationIncludingGravity.y));
    }
    //top motion
    if (y < 0) {
        requestAnimationFrame(yTMotion(e.accelerationIncludingGravity.y));
    }
    //left motion
    if (e.accelerationIncludingGravity.x > 0) {
        requestAnimationFrame(xLMotion(e.accelerationIncludingGravity.x));
    }
    //right motion
    if (e.accelerationIncludingGravity.x < 0) {
        requestAnimationFrame(xRMotion(e.accelerationIncludingGravity.x));
    }

}

function xRMotion(v) {
    drawImage();
    var color = 'red'
    horizontalSectionTwo(v,color);
    horizontalSectionThree(v,color);
}

function xLMotion(v){
    drawImage();
    var color = 'red'
    horizontalSectionOne(v,color);
    horizontalSectionfour(v,color)
}

function yBMotion(v){
    drawImage();
    var color = 'red';
    sectionOne(v,color);
}

function yTMotion(v){
    drawImage();
    var color = 'red';
    sectionTwo(v,color);
}