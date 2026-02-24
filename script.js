// Smooth scroll + resaltar enlace activo
const links = document.querySelectorAll('#navbar a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

links.forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth', block:'start'});
  });
});

const highlight = ()=>{
  const y = window.scrollY + 120;
  sections.forEach((sec, i)=>{
    if(!sec) return;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const link = links[i];
    if(y >= top && y < bottom){ link.classList.add('active'); }
    else { link.classList.remove('active'); }
  });
};
window.addEventListener('scroll', highlight);
highlight();

// Modo oscuro / claro persistente
const root = document.documentElement;
const btn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }
btn.addEventListener('click', ()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
