/* Progressive enhancement: content is visible without JavaScript or motion. */
(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const targets=[...document.querySelectorAll('.offerings h2,.themes-heading h2,.process-section h2,.comparison-section h2,.reviews-section h2,.industries-section h2,.pricing-section h2,.faq-heading h2,.offering-card,.process-step,.pricing-card,.team-section,.contact-proposal')];
  if(!reduced.matches && 'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
      }
    },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    targets.forEach(target=>{
      target.classList.add('scroll-reveal');
      if(target.matches('h2'))target.classList.add('heading-reveal');
      const siblings=target.parentElement.children;
      if(target.matches('.offering-card,.process-step,.pricing-card'))target.style.setProperty('--reveal-delay',`${[...siblings].indexOf(target)%3*.09}s`);
      observer.observe(target);
    });
    document.documentElement.classList.add('motion-ready');
    reduced.addEventListener('change',()=>{
      if(reduced.matches){observer.disconnect();targets.forEach(t=>t.classList.add('is-visible'))}
    });
  }
  // A local font can finish loading after the intro's initial word measurement.
  document.fonts.ready.then(()=>window.dispatchEvent(new Event('resize')));
})();
