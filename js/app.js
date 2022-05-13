const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

for (x = 1; x < 101; x++) {
document.getElementById('galleryImages').innerHTML += `<div class="gallery-img" id="galleryImage${x}"><img src="images/${x}.png" class="grid-photo" id="photo${x}" alt=""><div class="caption" id="caption${x}">${x}</div></div>`
}

// test
const numbers = [];
for (let i = 0; i < 100; i++){
  numbers[i] = i + 1;
}
shuffle(numbers);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }
  return array;
}
// test

for (y = 1; y < 101; y++) {
  // document.getElementById('swiperWrapper').innerHTML += `<div class="swiper-slide"><img src="images/${y}.png" class="hero-photo" alt=""></div>`

  document.getElementById('swiperWrapper').innerHTML += `<div class="swiper-slide"><img src="images/${numbers[y]}.png" class="hero-photo" alt=""></div>`
  }

document.querySelectorAll('.gallery-img').forEach(element => {
  element.addEventListener('click', (e)=>{
    let idNum = element.id.replace('galleryImage', '');
    document.getElementById(`galleryImage${idNum}`).classList.toggle('zoom');
    document.getElementById(`photo${idNum}`).classList.toggle('grid-photo-zoom');
    console.log(idNum);
    document.getElementById('fade').classList.toggle('fade-zoom');
  });
});