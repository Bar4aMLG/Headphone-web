AOS.init();

const h1 = document.getElementById('bigtitle');
const info1 = document.getElementById('info1');
const what2 = document.getElementById('what');
const imgMain = document.getElementById('idk');

function changeImg() {
  imgMain.src = 'imgs/jbl__2-removebg-preview.png';
  h1.style.color = '#aa80ff';
  info1.style.color = '#aa80ff';
  what2.style.backgroundColor = '#aa80ff';
  what2.innerHTML = 'Buy Light Violet';
  document.getElementById('line5').style.backgroundColor = '#aa80ff';
}

function changeimg2() {
  imgMain.src = 'imgs/jbl__3-removebg-preview.png';
  h1.style.color = '#b30000';
  info1.style.color = '#b30000';
  what2.style.backgroundColor = '#b30000';
  what2.innerHTML = 'Buy Red';
  document.getElementById('line5').style.backgroundColor = '#b30000';
}

function changeimg3() {
  imgMain.src = 'imgs/jbl__4-removebg-preview.png';
  h1.style.color = '#0073e6';
  info1.style.color = '#0073e6';
  what2.style.backgroundColor = '#0073e6';
  what2.innerHTML = 'Buy Navy Blue';
  document.getElementById('line5').style.backgroundColor = '#0073e6';
}

function changeimg4() {
  imgMain.src = 'imgs/jbl__1-removebg-preview.png';
  h1.style.color = 'white';
  info1.style.color = 'white';
  what2.style.backgroundColor = 'white';
  what2.innerHTML = 'Buy White';
  document.getElementById('line5').style.backgroundColor = 'white';
}

function popin() {
  document.getElementById('popupDialog').classList.add('show');
}

function openPop() {
  document.getElementById('popupDialog').classList.remove('show');
}