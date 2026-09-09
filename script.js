const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>500?'block':'none'});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')});
},{threshold:.08});
document.querySelectorAll('.section > *, .card, .stack, .process article, .timeline article, .project-feature, .learning-item, .values-grid article, .highlights-grid article').forEach(el=>el.classList.add('reveal'));
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const data=new FormData(this);
  const subject=encodeURIComponent(data.get('subject'));
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href=`mailto:ravi.thakur.in1@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formMessage').textContent='Opening your email app…';
});
