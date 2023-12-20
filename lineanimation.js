const line = document.getElementById('scroll-line');

window.addEventListener('scroll', () => {
   const scrollHeight = window.innerHeight;
   const scrollY = window.scrollY;

   line.setAttribute('stroke-dashoffset', scrollY * 2);
   line.setAttribute('stroke-dasharray', `${scrollHeight * 2} ${scrollHeight * 2}`);
});