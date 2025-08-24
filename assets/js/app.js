(function(){
  const path = location.pathname.replace(/\/+$/,'').toLowerCase() || '/';
  document.querySelectorAll('nav.top a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/+$/,'').toLowerCase();
    if ((path === '/' && href === '/') || (href !== '/' && path.endsWith(href))) {
      a.classList.add('active');
    }
  });
})();
