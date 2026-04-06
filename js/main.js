document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }
  var els = document.querySelectorAll('.reveal');
  if (els.length) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function(el) { obs.observe(el); });
  }
});
