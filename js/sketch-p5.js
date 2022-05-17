var s = '<=.=,-:-k"/-'
var s = ',-.:=//=<--"<==.--:-=-,.k,k"aoiqwueoiu'

// scramble
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffleArr(s) {
  var arr = s.split('');
  var n = arr.length;
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  s = arr.join('');
  return s;
}

s = shuffleArr(s);

const density = s;

// let testImg;
let asciiImg;

var images = ['./images/1-01.png', 'images/1-02.png', 'images/1-03.png', 'images/1-04.png', 'images/1-05.png', 'images/1-06.png', 'images/1-07.png', 'images/1-08.png', 'images/1-09.png', 'images/1-10.png']

var randomImage = images[Math.floor(Math.random()*images.length)]
function preload() {
  testImg = loadImage(images[Math.floor(Math.random()*images.length)]);
}

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  asciiDiv = createDiv();
  // asciiDiv.position(100,100);
  asciiDiv.addClass('divTest');
  
  background(0);
  // image(testImg, 0, 0, width, height);
  
  let w = width / testImg.width;
  let h = height / testImg.height;

  testImg.loadPixels();
  let asciiImage = '';
        //get random color
        var colorA1 = { namex: "colorA1", colorz: 'newTestA1' },
        colorA2 = { namex: "colorA2", colorz: 'newTestA2' },
        colorA3 = { namex: "colorA3", colorz: 'newTestA3' },
  
        colorB1 = { namex: "colorB1", colorz: 'newTestB1' },
        colorB2 = { namex: "colorB2", colorz: 'newTestB2' },
        colorB3 = { namex: "colorB3", colorz: 'newTestB3' },

        colorC1 = { namex: "colorC1", colorz: 'newTestC1' },
        colorC2 = { namex: "colorC2", colorz: 'newTestC2' },
        colorC3 = { namex: "colorC3", colorz: 'newTestC3' }

        colorD1 = { namex: "colorD1", colorz: 'newTestD1' },
        colorD2 = { namex: "colorD2", colorz: 'newTestD2' },
        colorD3 = { namex: "colorD3", colorz: 'newTestD3' }

        colorE1 = { namex: "colorE1", colorz: 'newTestE1' },
        colorE2 = { namex: "colorE2", colorz: 'newTestE2' },
        colorE3 = { namex: "colorE3", colorz: 'newTestE3' }
  
        var colorsA = [colorA1, colorA2, colorA3]
        var colorsB = [colorB1, colorB2, colorB3]
        var colorsC = [colorC1, colorC2, colorC3]
        var colorsD = [colorD1, colorD2, colorD3]
        var colorsE = [colorE1, colorE2, colorE3]
  
        var randomA = Math.floor(Math.random() * colorsA.length)
        var randomB = Math.floor(Math.random() * colorsB.length)
        var randomC = Math.floor(Math.random() * colorsC.length)
        var randomD = Math.floor(Math.random() * colorsD.length)
        var randomE = Math.floor(Math.random() * colorsE.length)

  for (let j = 0; j < testImg.height; j++) {
    document.body.style.fontSize = (Math.random() * (20 - 5) + 5) + "px";
    for (let i = 0; i < testImg.width; i++) {
      const pixelIndex = (i + j * testImg.width) * 4;
      const r = testImg.pixels[pixelIndex + 0];
      const g = testImg.pixels[pixelIndex + 1];
      const b = testImg.pixels[pixelIndex + 2];
      
      const avg = (r + g + b) / 3;   
      console.log(avg)

      var id = 'testDefault';
      
      var colorA = colorsA[randomA].colorz
      var colorB = colorsB[randomB].colorz
      var colorC = colorsC[randomC].colorz
      var colorD = colorsD[randomD].colorz
      var colorE = colorsE[randomE].colorz

      if (avg >= 150) {
        id = colorC;
      } else if (avg >= 100 && avg < 150) {
        id = colorA;
      } else if (avg >= 80 && avg < 100) {
        id = colorB;
      } else if (avg >= 40 && avg < 80) {
        id = colorD;
      } else if (avg >= 0 && avg < 40) {
        id = colorE;
      }

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      
      const c = density.charAt(charIndex);
      // if (c == ' ') asciiImage += '<div class="test" id="'+id+'">&nbsp;</div>';
      // if (c == 'Ñ') asciiImage += '<div class="test" id="'+id+'">Ñ</div>';
      // if (c == 'Ñ'&& Math.random() < 0.8) asciiImage += '<div class="test" id="'+id+'">Ñ</div>';

      
// var styles = ['sizeTest', 'sizeTest2'],
//       randomStyle = Math.floor(Math.random()*style.length)
      // result = '<div class="test' + randomStyle + 'id=""><</div>'

      if (c == '◉') asciiImage += '<div class="test" id="'+id+'">◉</div>';
      // else asciiImage += '<div class="test" id="'+id+'">'+ c +'</div>';

      // if (c == '<') asciiImage += '<div class="test sizeTest1" id="'+id+'"><</div>';
      // if (c == '-') asciiImage += '<div class="test sizeTest1" id="'+id+'">-</div>';
      // if (c == '=') asciiImage += '<div class="test sizeTest1" id="'+id+'">=</div>';

      if (c == '<') asciiImage += '<div class="test animate1 sizeTest1" id="'+id+'"><</div>';
      if (c == '-') asciiImage += '<div class="test animate2 sizeTest1" id="'+id+'">-</div>';
      if (c == '=') asciiImage += '<div class="test animate3 sizeTest1" id="'+id+'">=</div>';


      if (c == ',') asciiImage += '<div class="test animate4" id="'+id+'">,</div>';
      if (c == '-') asciiImage += '<div class="test sizeTest1 animate16" id="'+id+'">-</div>';
      if (c == '.') asciiImage += '<div class="test animate5" id="'+id+'">.</div>';
      if (c == ':') asciiImage += '<div class="test animate6" id="'+id+'">:</div>';
      if (c == '=') asciiImage += '<div class="test sizeTest1 animate15" id="'+id+'">=</div>';
      if (c == '/') asciiImage += '<div class="test animate7" id="'+id+'">/</div>';
      if (c == '<') asciiImage += '<div class="test sizeTest1 animate14" id="'+id+'"><</div>';
      if (c == '"') asciiImage += '<div class="test animate8" id="'+id+'">"</div>';
      if (c == 'k') asciiImage += '<div class="test animate9" id="'+id+'">k</div>';
      if (c == 'a') asciiImage += '<div class="test animate10" id="'+id+'">a</div>';
      if (c == 'q') asciiImage += '<div class="test animate11" id="'+id+'">q</div>';
      if (c == 'w') asciiImage += '<div class="test animate12" id="'+id+'">w</div>';
      if (c == 'e') asciiImage += '<div class="test animate13" id="'+id+'">e</div>';
      if (c == 'o') asciiImage += '<div class="test animate14" id="'+id+'">o</div>';
      if (c == 'i') asciiImage += '<div class="test animate15" id="'+id+'">i</div>';
      if (c == 'u') asciiImage += '<div class="test animate16" id="'+id+'">u</div>';
      
    }
    // var test = document.getElementsByClassName("test");
    // for(i = 0; i < test.length; i++){
    //   test[i].style.fontSize = Math.random()*1000 + "px";
    // }
    var sizeTest1 = document.getElementsByClassName("sizeTest1");
    for(i = 0; i < sizeTest1.length; i++){
      sizeTest1[i].style.fontSize = Math.random()*1000 + "px";
    }
      
    asciiImage += '<br/>';
    
  }
  asciiDiv.html(asciiImage);
  console.log(s);
}