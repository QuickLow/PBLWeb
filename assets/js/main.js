// NAV TOGGLE
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) navToggle.addEventListener('click', ()=> navMenu.classList.toggle('show'));

// ====== SLIDES GAMBAR (opsional bisa tambah) ======
const slides = [
  'assets/img/hero1.jpg',
  // 'assets/img/hero2.jpg',
  // 'assets/img/hero3.jpg'
];

// ====== SLIDES TEKS (judul, subjudul, caption) ======
const textSlides = [
  { title:'DESA SERUAT 2', subtitle:'Menuju Desa Digital', caption:'Tahun 2025' },
  { title:'LAYANAN MUDAH',   subtitle:'Transparan & Akuntabel', caption:'24/7 Online' },
  { title:'WARGA BERDAYA',   subtitle:'Partisipasi Pembangunan', caption:'Gotong Royong' },
  { title:'DESA SEJAHTERA', subtitle:'Pelayanan Prima', caption:'Bersih • Melayani' }

];

let idx = 0;
const slideEl = document.querySelector('.hero-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// elemen teks
const elTitle   = document.getElementById('heroTitle');
const elSubtitle= document.getElementById('heroSubtitle');
const elCaption = document.getElementById('heroCaption');

function renderSlide(){
  // gambar
  if (slides.length) {
    slideEl.style.setProperty('--bg', `url('${slides[idx % slides.length]}')`);
  }
  // teks (dengan fade)
  [elTitle, elSubtitle, elCaption].forEach(el => el.classList.add('hide'));
  setTimeout(()=>{
    const t = textSlides[idx % textSlides.length];
    elTitle.textContent    = t.title;
    elSubtitle.textContent = t.subtitle;
    elCaption.textContent  = t.caption;
    [elTitle, elSubtitle, elCaption].forEach(el => el.classList.remove('hide'));
  }, 250); // sinkron dengan CSS transition
}

function next(){ idx = (idx + 1) % Math.max(slides.length, textSlides.length); renderSlide(); }
function prev(){ idx = (idx - 1 + Math.max(slides.length, textSlides.length)) % Math.max(slides.length, textSlides.length); renderSlide(); }

if (prevBtn && nextBtn){ prevBtn.addEventListener('click', prev); nextBtn.addEventListener('click', next); }

// auto-rotate tiap 5 detik
let timer = setInterval(next, 5000);
['click','touchstart','mousemove','keydown'].forEach(evt=>{
  window.addEventListener(evt, ()=>{ clearInterval(timer); timer=setInterval(next, 5000); }, {once:false});
});

// initial render
renderSlide();

// ====== KUNJUNGAN DEMO (optional) ======
const visitCount = document.getElementById('visitCount');
if (visitCount){ visitCount.textContent = 180 + Math.floor(Math.random()*40); }
