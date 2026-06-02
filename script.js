
    (function () {
      'use strict';

      /* â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
      const equipment = [
        { id: 1, name: 'Crushers', type: 'rental', price: 'Enquire', unit: '', desc: 'Track mounted mobile crusher units for road and infrastructure projects.', specs: 'Make: TEREX / METSO / PROPEL, Capacity: 200-300 TPH', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
        { id: 2, name: 'Milling Machine', type: 'rental', price: 'Enquire', unit: '', desc: 'Road milling machines for controlled removal of asphalt and concrete layers.', specs: 'Road rehabilitation, highway maintenance, resurfacing applications', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
        { id: 3, name: 'Soil Stabilizer', type: 'rental', price: 'Enquire', unit: '', desc: 'Soil stabilizer and cold recycler solutions for durable road foundations.', specs: 'Stabilization, cold recycling, sub-base improvement', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { id: 4, name: 'Transit Mixer', type: 'used', price: 'Enquire', unit: '', desc: 'Pre-owned transit mixers for concrete transport and site batching workflows.', specs: 'Used equipment category: Transit Mixer', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { id: 5, name: 'Wheel Loader', type: 'used', price: 'Enquire', unit: '', desc: 'Pre-owned wheel loaders for loading, stockpile handling, and plant support.', specs: 'Used equipment category: Wheel Loader', img: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&q=80' },
        { id: 6, name: 'Paver', type: 'used', price: 'Enquire', unit: '', desc: 'Used pavers for asphalt roadwork, highway construction, and resurfacing.', specs: 'Used equipment category: Paver', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
        { id: 7, name: 'Sensor Paver', type: 'rental', price: 'Enquire', unit: '', desc: 'Sensor paver machines for accurate asphalt paving and quality road finishes.', specs: 'Rental equipment category: Sensor Paver Machine', img: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=600&q=80' },
        { id: 8, name: 'Diesel Generator', type: 'used', price: 'Enquire', unit: '', desc: 'Reliable DG sets and generators for project sites and backup power needs.', specs: 'Used equipment category: DG Sets / Diesel Generator', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
        { id: 9, name: 'Road Milling Machine', type: 'used', price: 'Enquire', unit: '', desc: 'Pre-owned road milling machines for pavement removal and rehabilitation.', specs: 'Used equipment category: Road Milling Machine', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      ];

      const projects = [
        { name: 'Maharashtra Samruddhi Mahamarg Expressway', loc: 'Maharashtra', desc: 'Benchmark expressway project supported by VIESL equipment solutions.', bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' },
        { name: 'Mumbai Pune Expressway', loc: 'Maharashtra', desc: 'Contribution to one of India\'s key road connectivity corridors.', bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { name: 'Meerut Aligarh Ghaziabad Expressway', loc: 'North India', desc: 'Equipment support for major expressway construction and expansion.', bg: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=600&q=80' },
        { name: 'Ahmedabad Vadodara Expressway', loc: 'Gujarat', desc: 'Infrastructure equipment contribution for a high-value highway corridor.', bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
        { name: 'Delhi Jaipur Expressway', loc: 'Delhi - Rajasthan', desc: 'Road construction equipment support for a major national route.', bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' },
        { name: 'Delhi Vadodara Expressway', loc: 'North-West India', desc: 'Fleet support for large-scale expressway execution.', bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { name: 'MOPA, Goa Airport', loc: 'Goa', desc: 'Equipment contribution to airport infrastructure development.', bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
        { name: 'Noida International Airport', loc: 'Uttar Pradesh', desc: 'Support for one of India\'s major greenfield airport projects.', bg: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=600&q=80' },
        { name: 'Ahmedabad-Mumbai-C9 High Speed Rail Project', loc: 'Gujarat - Maharashtra', desc: 'Equipment contribution to the high speed rail corridor.', bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' },
      ];

      const team = [
        { name: 'Sachin Gandhi', pos: 'Chairman & Managing Director', exp: 20, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
        { name: 'Chetan Gandhi', pos: 'Director', exp: 15, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
        { name: 'Sameer Gandhi', pos: 'Director', exp: 14, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
        { name: 'Nilesh Pokharna', pos: 'Chief Financial Officer (CFO)', exp: 14, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
      ];

      /* â”€â”€ RENDER HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
      function equipCard(e) {
        return `<div class="reveal d1">
  <div class="equip-card" onclick="showEquipDetail(${e.id})" style="cursor:pointer">
    <div class="equip-img-wrap">
      <img src="${e.img}" alt="${e.name}" loading="lazy" />
      <div class="equip-badge ${e.type === 'used' ? 'used' : ''}">${e.type === 'rental' ? 'For Rent' : 'Used'}</div>
    </div>
    <div class="equip-body">
      <h5>${e.name}</h5>
      <p>${e.desc}</p>
      <div class="equip-price">${e.price}</div>
      <div class="equip-specs">${e.specs}</div>
      <button class="btn-primary btn-sm">View Details <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</div>`;
      }

      function projCard(p) {
        return `<div class="reveal d1">
  <div class="proj-card" style="background-image:url('${p.bg}')">
    <div class="proj-content">
      <h5>${p.name}</h5>
      <div class="proj-badge">${p.loc}</div>
      <p class="small" style="color:rgba(255,255,255,.72);margin-top:8px;font-size:.8rem">${p.desc}</p>
    </div>
  </div>
</div>`;
      }

      function teamCard(m) {
        return `<div class="reveal d1">
  <div class="team-card">
    <img class="team-img" src="${m.img}" alt="${m.name}" loading="lazy" />
    <h5>${m.name}</h5>
    <p class="team-pos">${m.pos}</p>
    <p class="team-exp"><i class="fas fa-briefcase"></i> ${m.exp}+ Years</p>
  </div>
</div>`;
      }

      /* â”€â”€ EQUIPMENT DETAIL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
      function showEquipDetail(id) {
        const e = equipment.find(x => x.id === id);
        if (!e) return;
        const isRental = e.type === 'rental';
        const html = `
<div class="page-banner">
  <div class="container">
    <div class="banner-badge"><span class="dot"></span>${isRental ? 'Rental Equipment' : 'Used Equipment'}</div>
    <h1>${e.name}</h1>
    <p class="lead">${e.desc}</p>
  </div>
</div>
<section class="py-5 bg-off">
  <div class="container">
    <div class="row cols-2" style="align-items:start;gap:48px">
      <div class="reveal">
        <div class="detail-img"><img src="${e.img}" alt="${e.name}" /></div>
      </div>
      <div class="reveal d2">
        <div class="detail-badge ${!isRental ? 'used' : ''}">${isRental ? 'Available for Rent' : 'Used Equipment'}</div>
        <h2 style="font-family:var(--ff-head);font-size:1.8rem;font-weight:700;color:var(--white);margin-bottom:16px;letter-spacing:.03em">${e.name}</h2>
        <div class="price-tag"><div class="price-big">${e.price}</div></div>
        <h5 style="font-family:var(--ff-head);font-size:.85rem;font-weight:700;margin-bottom:12px;color:var(--white);letter-spacing:.06em">Specifications</h5>
        <table class="spec-table">
          <tr><td>Specs</td><td>${e.specs}</td></tr>
          <tr><td>Type</td><td>${isRental ? 'Rental Equipment' : 'Pre-Owned'}</td></tr>
          <tr><td>Availability</td><td style="color:#22c55e;font-weight:700">Available Now</td></tr>
        </table>
        <div style="margin-top:28px">
          <button class="enquire-btn" onclick="showPage('contact')"><i class="fas fa-envelope"></i>Enquire About This Equipment</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-5">
  <div class="container">
    <div class="text-center mb-60 reveal"><div class="section-tag">More Equipment</div><h2 class="section-title">More Equipment Available</h2></div>
    <div class="row cols-3">${equipment.filter(x => x.id !== id).slice(0, 3).map(equipCard).join('')}</div>
  </div>
</section>
<section class="vi-cta"><div class="container reveal"><h2>Ready to Rent or Buy?</h2><p class="sub">Contact us today for best pricing and availability.</p><button class="btn-amber" onclick="showPage('contact')"><i class="fas fa-envelope"></i>Contact Us Now</button></div></section>`;

        let detailPage = document.getElementById('page-detail');
        if (!detailPage) {
          detailPage = document.createElement('div');
          detailPage.className = 'page';
          detailPage.id = 'page-detail';
          document.getElementById('main-content').appendChild(detailPage);
        }
        detailPage.innerHTML = html;
        showPage('detail');
      }
      window.showEquipDetail = showEquipDetail;

      /* â”€â”€ PAGE ROUTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
      function byId(id) { return document.getElementById(id); }
      function setGrid(id, html) { const el = byId(id); if (el) el.innerHTML = html; }

      function populate() {
        const rental = equipment.filter(e => e.type === 'rental');
        const used = equipment.filter(e => e.type === 'used');
        setGrid('featured-equip-grid', equipment.slice(0, 3).map(equipCard).join(''));
        setGrid('rental-grid', rental.map(equipCard).join(''));
        setGrid('used-grid', used.map(equipCard).join(''));
        setGrid('home-proj-grid', projects.slice(0, 3).map(projCard).join(''));
        setGrid('all-proj-grid', projects.map(projCard).join(''));
        setGrid('team-grid', team.map(teamCard).join(''));
      }

      function showPage(id) {
        const routes = {
          home: 'index.html', company: 'about-us.html', contact: 'contact.html', projects: 'projects.html',
          rental: 'services.html#rental', used: 'services.html#used', team: 'team.html', investor: 'investor.html',
          career: 'career.html', Clients: 'clients.html', clients: 'clients.html', faq: 'faq.html'
        };
        const localPage = byId('page-' + id);
        if (localPage) {
          document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
          localPage.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(initReveal, 50);
          setTimeout(initCounters, 300);
          return;
        }
        if (routes[id]) window.location.href = routes[id];
      }
      window.showPage = showPage;

      function closeMobile() {
        const navToggle = byId('nav-toggle');
        const navMobile = byId('nav-mobile');
        if (!navToggle || !navMobile) return;
        navToggle.classList.remove('open');
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
      window.closeMobile = closeMobile;

      const navbar = byId('navbar');
      if (navbar) {
        window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
      }

      let revealObserver;
      function initReveal() {
        if (!('IntersectionObserver' in window)) {
          document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
          return;
        }
        if (revealObserver) revealObserver.disconnect();
        revealObserver = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
      }

      function animCount(el, target) {
        let start = 0, dur = 1600, startTime = null;
        const suffix = el.dataset.suffix || '';
        function step(ts) {
          if (!startTime) startTime = ts;
          const prog = Math.min((ts - startTime) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          el.textContent = Math.round(start + (target - start) * ease) + (prog >= 1 ? suffix : '');
          if (prog < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      let counterObserver;
      function initCounters() {
        if (!('IntersectionObserver' in window)) return;
        if (counterObserver) counterObserver.disconnect();
        counterObserver = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              const target = parseInt(e.target.dataset.target);
              if (!isNaN(target)) { animCount(e.target, target); counterObserver.unobserve(e.target); }
            }
          });
        }, { threshold: 0.5 });
        document.querySelectorAll('.counter,.counter-card').forEach(el => {
          el.textContent = el.dataset.suffix ? '0' + el.dataset.suffix : '0';
          counterObserver.observe(el);
        });
      }

      function initMobileNav() {
        const navToggle = byId('nav-toggle');
        const navMobile = byId('nav-mobile');
        if (!navToggle || !navMobile) return;

        const setOpen = isOpen => {
          navToggle.classList.toggle('open', isOpen);
          navMobile.classList.toggle('open', isOpen);
          document.body.classList.toggle('nav-open', isOpen);
          navToggle.setAttribute('aria-expanded', String(isOpen));
        };

        navToggle.addEventListener('click', () => {
          setOpen(!navMobile.classList.contains('open'));
        });

        navMobile.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', closeMobile);
        });

        document.addEventListener('click', e => {
          if (!navMobile.classList.contains('open')) return;
          if (e.target.closest('#nav-mobile') || e.target.closest('#nav-toggle')) return;
          closeMobile();
        });

        document.addEventListener('keydown', e => {
          if (e.key === 'Escape') closeMobile();
        });

        window.addEventListener('resize', () => {
          if (window.innerWidth > 1024) closeMobile();
        });
      }

      function initDropdowns() {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
          let closeTimer;
          const open = () => { clearTimeout(closeTimer); dropdown.classList.add('open'); };
          const close = () => { closeTimer = setTimeout(() => dropdown.classList.remove('open'), 120); };
          dropdown.addEventListener('mouseenter', open);
          dropdown.addEventListener('mouseleave', close);
          dropdown.addEventListener('focusin', open);
          dropdown.addEventListener('focusout', () => {
            setTimeout(() => { if (!dropdown.contains(document.activeElement)) dropdown.classList.remove('open'); }, 0);
          });
        });
      }

      function initFaq() {
        document.querySelectorAll('.faq-item').forEach(item => {
          const button = item.querySelector('.faq-question') || item.querySelector('h5');
          const answer = item.querySelector('.faq-answer');
          if (!button) return;
          if (button.tagName === 'H5') {
            const text = button.textContent;
            const p = item.querySelector('p');
            item.innerHTML = `<button class="faq-question" type="button"><span>${text}</span><span class="faq-icon"><i class="fas fa-plus"></i></span></button><div class="faq-answer"><div class="faq-answer-inner">${p ? p.innerHTML : ''}</div></div>`;
          }
        });
        document.querySelectorAll('.faq-question').forEach(button => {
          button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const shell = button.closest('.faq-shell') || button.closest('section');
            if (!item || !shell) return;
            shell.querySelectorAll('.faq-item.active').forEach(openItem => { if (openItem !== item) openItem.classList.remove('active'); });
            item.classList.toggle('active');
          });
        });
      }

      function markActiveNav() {
        const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        document.querySelectorAll('.nav-link,.dropdown-item').forEach(link => {
          const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase() || 'index.html';
          if (href === current) link.classList.add('active');
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        populate();
        initMobileNav();
        initDropdowns();
        initFaq();
        initReveal();
        initCounters();
        markActiveNav();
      });

    })();
