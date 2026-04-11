/* ============================================================
   ALISHAN EVENTS — Enhanced Animated Script
   Includes: Lang system, scroll animations, particles,
             custom cursor, counter, magnetic buttons,
             page transitions, card tilts
============================================================ */

/* ── Custom Cursor ─────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let rafId;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    rafId = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .service-card, .work, .review-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();

/* ── Particle Canvas ───────────────────────────────────────── */
(function initParticles() {
  const welcome = document.querySelector('.welcome');
  if (!welcome) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  welcome.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = welcome.offsetWidth; canvas.height = welcome.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  const count = 60;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(249,168,38,${p.alpha})`;
      ctx.fill();
    });

    // draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(249,168,38,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
})();

/* ── Scroll Reveal (IntersectionObserver) ──────────────────── */
(function initReveal() {
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const allReveal = document.querySelectorAll(revealClasses.join(','));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // stagger siblings inside same parent
        const siblings = entry.target.parentElement.querySelectorAll(
          '.reveal, .reveal-left, .reveal-right, .reveal-scale'
        );
        siblings.forEach((el, i) => {
          setTimeout(() => el.classList.add('active'), i * 90);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  allReveal.forEach(el => obs.observe(el));
})();

/* ── Section highlight observer (for old .reveal usage) ───── */
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('active'), i * 80);
      });
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('section').forEach(s => sectionObs.observe(s));

/* ── Service Cards scroll buttons ─────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('services-scroll');
  const leftBtn  = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  if (scrollContainer && leftBtn && rightBtn) {
    leftBtn.addEventListener('click',  () => scrollContainer.scrollBy({ left: -340, behavior: 'smooth' }));
    rightBtn.addEventListener('click', () => scrollContainer.scrollBy({ left: 340, behavior: 'smooth' }));
  }
});

/* ── Animated Number Counter ───────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = target / 60;
      function tick() {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current < target) requestAnimationFrame(tick);
      }
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => obs.observe(el));
})();

/* ── Magnetic Buttons ──────────────────────────────────────── */
(function initMagnetic() {
  document.querySelectorAll('.primary-btn, .gold-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect   = btn.getBoundingClientRect();
      const cx     = rect.left + rect.width / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) * 0.3;
      const dy     = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-3px) scale(1.02)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ── Card 3D Tilt ──────────────────────────────────────────── */
(function initTilt() {
  document.querySelectorAll('.service-card, .review-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `
        perspective(800px)
        rotateX(${-y * 10}deg)
        rotateY(${x * 10}deg)
        translateY(-10px)
        scale(1.02)
      `;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ── Page Transition Overlay ───────────────────────────────── */
(function initPageTransition() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 99999;
    background: linear-gradient(135deg, #0b0c10, #1a1d2b);
    pointer-events: none;
    transform: scaleY(1); transform-origin: bottom;
    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
  `;
  document.body.appendChild(overlay);

  // Fade in on load
  requestAnimationFrame(() => {
    overlay.style.transformOrigin = 'top';
    overlay.style.transform = 'scaleY(0)';
  });

  // Fade out on link click
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      overlay.style.transformOrigin = 'bottom';
      overlay.style.transform = 'scaleY(1)';
      setTimeout(() => { window.location.href = href; }, 620);
    });
  });
})();

/* ── Parallax Hero on Scroll ───────────────────────────────── */
(function initParallax() {
  const hero = document.querySelector('.welcome');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const content = hero.querySelector('.welcome-content');
    if (content) content.style.transform = `translateY(${y * 0.25}px)`;
    hero.style.backgroundPositionY = `${y * 0.3}px`;
  }, { passive: true });
})();

/* ── Language System ───────────────────────────────────────── */
const translations = {
  en: {
    site_name: "Alishan Events",
    tagline: "We Crave Perfection",
    explore_services: "Explore Services",
    our_services: "Our Services",
    wedding_events: "Wedding Events",
    wedding_description: "Luxury wedding planning with premium decoration and lighting.",
    corporate_events: "Corporate Events",
    corporate_description: "Professional conferences and corporate event management.",
    birthday_events: "Birthday Events",
    birthday_description: "Stylish and fun birthday celebrations with custom themes, decoration, and entertainment.",
    boro_somabesh: "Large Gatherings",
    boro_somabesh_description: "Expert management of large-scale gatherings, social events, and community programs with seamless execution.",
    concert_and_parties: "Concert & Parties",
    concert_and_parties_description: "Energetic concerts and unforgettable celebrations.",
    view_details: "View Details",
    book_your_event: "Book Your Event",
    book_now: "Book Now",
    some_of_our_works: "Some of Our Works",
    explore_more: "Explore More",
    about_alishan_events_description: "We craft luxury weddings, corporate events, concerts, and unforgettable celebrations with perfection.",
    quick_links: "Quick Links",
    home: "Home", services: "Services", gallery: "Gallery", contact: "Contact",
    footer_credit: "© 2026 Alishan Events. All Rights Reserved. Developed by RAMS Tech.",
    wedding_events_description: "Exquisite wedding planning with premium décor, lighting, and bespoke event design",
    decor_theme: "Decor & Theme",
    decor_desc: "Custom luxury decor and theme design for your dream wedding.",
    catering_cuisine: "Catering & Cuisine",
    catering_desc: "Premium multi-cuisine catering to impress your guests.",
    photography_videography: "Photography & Videography",
    photography_desc: "Capture every magical moment with professional photography.",
    entertainment: "Entertainment",
    entertainment_desc: "Live music, DJs, and performers for an unforgettable celebration.",
    wedding_gallery: "Wedding Gallery",
    corporate_events_description: "Professional corporate event planning with premium decor, audiovisual solutions, and seamless coordination.",
    event_design: "Event Design & Theme",
    event_design_desc: "Customized corporate event concepts with premium staging and decor.",
    catering: "Catering & Hospitality",
    audiovisual: "Audiovisual Solutions",
    audiovisual_desc: "High-quality sound, lighting, and visual production for a flawless event.",
    entertainment_corp: "Entertainment & Networking",
    entertainment_corp_desc: "Live performances and team-building activities for corporate engagement.",
    corporate_gallery: "Corporate Event Gallery",
    back: "← Back",
    birthday_events_description: "Memorable birthday celebrations with themed decor, custom cakes, and full entertainment packages.",
    birthday_theme: "Birthday Theme & Decor",
    birthday_theme_desc: "Customized party themes with luxurious decor for an unforgettable birthday.",
    birthday_cake: "Custom Cakes & Catering",
    birthday_cake_desc: "Delicious birthday cakes and premium catering to delight your guests.",
    birthday_photography: "Photography & Videography",
    birthday_photography_desc: "Professional photography to capture every joyful moment.",
    birthday_entertainment: "Entertainment",
    birthday_entertainment_desc: "Live music, performers, and fun activities for guests of all ages.",
    birthday_gallery: "Birthday Event Gallery",
    large_gatherings: "Large Gatherings",
    large_gatherings_description: "Seamless planning for large-scale events with premium decor, logistics, and full entertainment coordination.",
    venue_setup: "Venue Setup & Decor",
    venue_setup_desc: "Spacious venue arrangements with elegant decor tailored for large crowds.",
    catering_large: "Catering & Hospitality",
    catering_large_desc: "High-quality catering solutions for hundreds of guests with diverse menus.",
    audio_lighting: "Audio & Lighting",
    audio_lighting_desc: "Professional sound, lighting, and stage management for large events.",
    event_entertainment: "Entertainment & Activities",
    event_entertainment_desc: "Live performances, interactive activities, and crowd engagement for unforgettable experiences.",
    large_gatherings_gallery: "Large Gatherings Gallery",
    concert_events: "Concerts & Parties",
    concert_events_description: "Exciting concerts and vibrant parties with full-scale production, lighting, and entertainment services.",
    concert_production: "Event Production",
    concert_production_desc: "Professional production setup including stage, sound, and lighting for concerts and parties.",
    concert_catering: "Catering & VIP Services",
    concert_catering_desc: "Exclusive catering and VIP arrangements for attendees and performers.",
    concert_photography: "Photography & Videography",
    concert_photography_desc: "Capture every high-energy moment with professional photography and videography.",
    concert_entertainment: "Entertainment Coordination",
    concert_entertainment_desc: "Live performances, DJs, and entertainment planning for memorable events.",
    concert_gallery: "Concert & Party Gallery",
    booking_page: "Book Your Event",
    booking_description: "Share your details below and we will help plan your perfect celebration with our premium services.",
    start_journey: "Start Your Journey With Us",
    booking_instructions: "Fill out the form and we'll contact you to discuss your event details, availability, and ideas.",
    full_name: "Full Name",
    email_address: "Email Address",
    phone_number: "Phone Number",
    preferred_date: "Preferred Date",
    event_location: "Event Location",
    estimated_budget: "Estimated Budget",
    choose_budget: "Choose Your Budget Range",
    event_vision: "Tell Us About Your Vision",
    reviews_title: "What Our Customers Say",
    review1_text: "Alishan Events made my wedding unforgettable! Highly recommend.",
    review1_rating: "⭐⭐⭐⭐⭐",
    review2_text: "Professional, timely, and creative. The event went smoothly thanks to them.",
    review2_rating: "⭐⭐⭐⭐⭐",
    review3_text: "Amazing decorations and excellent customer service. Will use again!",
    review3_rating: "⭐⭐⭐⭐⭐",
    more_reviews: "More Reviews",
    events_completed: "Events Completed",
    happy_clients: "Happy Clients",
    years_experience: "Years Experience",
    cities_served: "Cities Served",
    login: 'Log In',
    signup: 'Sign Up',
  },
  bn: {
    site_name: "আলিশান ইভেন্টস",
    tagline: "আমরা নিখুঁততাকে ভালোবাসি",
    explore_services: "সার্ভিস দেখুন",
    our_services: "আমাদের সেবাসমূহ",
    wedding_events: "বিয়ের আয়োজন",
    wedding_description: "প্রিমিয়াম ডেকোরেশন ও লাইটিংসহ বিলাসবহুল বিয়ের আয়োজন।",
    corporate_events: "কর্পোরেট ইভেন্ট",
    corporate_description: "পেশাদার কনফারেন্স ও কর্পোরেট ইভেন্ট ব্যবস্থাপনা।",
    birthday_events: "জন্মদিনের আয়োজন",
    birthday_description: "থিম, ডেকোরেশন ও বিনোদনসহ আকর্ষণীয় জন্মদিনের আয়োজন।",
    boro_somabesh: "বড় সমাবেশ",
    boro_somabesh_description: "বড় আকারের সমাবেশ, সামাজিক অনুষ্ঠান ও প্রোগ্রামের দক্ষ ব্যবস্থাপনা।",
    concert_and_parties: "কনসার্ট ও পার্টি",
    concert_and_parties_description: "উদ্দীপনাময় কনসার্ট ও স্মরণীয় আয়োজন।",
    view_details: "বিস্তারিত দেখুন",
    book_your_event: "আপনার ইভেন্ট বুক করুন",
    book_now: "এখনই বুক করুন",
    some_of_our_works: "আমাদের কিছু কাজ",
    explore_more: "আরও দেখুন",
    about_alishan_events_description: "আমরা বিলাসবহুল বিয়ে, কর্পোরেট ইভেন্ট, কনসার্ট ও স্মরণীয় আয়োজন তৈরি করি।",
    quick_links: "দ্রুত লিংক",
    home: "হোম", services: "সার্ভিস", gallery: "গ্যালারি", contact: "যোগাযোগ",
    footer_credit: "© ২০২৬ আলিশান ইভেন্টস | বিলাসবহুল অভিজ্ঞতার জন্য তৈরি",
    wedding_events_description: "প্রিমিয়াম সাজসজ্জা, আলো এবং ব্যক্তিগতভাবে পরিকল্পিত ইভেন্ট ডিজাইনের মাধ্যমে অভিজাত বিয়ের আয়োজন",
    decor_theme: "সাজসজ্জা ও থিম",
    decor_desc: "আপনার স্বপ্নের বিয়ের জন্য কাস্টম লাক্সারি সাজসজ্জা ও থিম ডিজাইন।",
    catering_cuisine: "ক্যাটারিং ও রন্ধনশৈলী",
    catering_desc: "অতিথিদের মুগ্ধ করতে প্রিমিয়াম মাল্টি-কুইজিন ক্যাটারিং।",
    photography_videography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    photography_desc: "পেশাদার ফটোগ্রাফি দিয়ে প্রতিটি জাদুকরী মুহূর্ত ধরে রাখুন।",
    entertainment: "বিনোদন",
    entertainment_desc: "লাইভ মিউজিক, ডিজে এবং পারফর্মার সহ অবিস্মরণীয় উদযাপন।",
    wedding_gallery: "বিয়ের গ্যালারি",
    corporate_events_description: "প্রিমিয়াম সাজসজ্জা, অডিওভিজ্যুয়াল সমাধান এবং নিখুঁত সমন্বয়ের সাথে পেশাদার কর্পোরেট ইভেন্ট পরিকল্পনা।",
    event_design: "ইভেন্ট ডিজাইন ও থিম",
    event_design_desc: "প্রিমিয়াম স্টেজিং ও সাজসজ্জা সহ কাস্টমাইজড কর্পোরেট ইভেন্ট কনসেপ্ট।",
    catering: "ক্যাটারিং ও আতিথেয়তা",
    audiovisual: "অডিওভিজ্যুয়াল সমাধান",
    audiovisual_desc: "নিখুঁত ইভেন্টের জন্য উচ্চমানের সাউন্ড, লাইটিং ও ভিজ্যুয়াল প্রোডাকশন।",
    entertainment_corp: "বিনোদন ও নেটওয়ার্কিং",
    entertainment_corp_desc: "কর্পোরেট এনগেজমেন্টের জন্য লাইভ পারফর্মেন্স ও টিম-বিল্ডিং।",
    corporate_gallery: "কর্পোরেট ইভেন্ট গ্যালারি",
    back: "← ফিরে যান",
    birthday_events_description: "থিমযুক্ত সাজসজ্জা, কাস্টম কেক এবং সম্পূর্ণ বিনোদন প্যাকেজের মাধ্যমে স্মরণীয় জন্মদিন উদযাপন।",
    birthday_theme: "জন্মদিনের থিম ও সাজসজ্জা",
    birthday_theme_desc: "অভিজাত সাজসজ্জা সহ কাস্টম পার্টি থিম।",
    birthday_cake: "কাস্টম কেক ও ক্যাটারিং",
    birthday_cake_desc: "সুস্বাদু জন্মদিনের কেক এবং প্রিমিয়াম ক্যাটারিং।",
    birthday_photography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    birthday_photography_desc: "প্রফেশনাল ফটোগ্রাফি প্রতিটি আনন্দময় মুহূর্ত ক্যাপচার করে।",
    birthday_entertainment: "বিনোদন",
    birthday_entertainment_desc: "লাইভ মিউজিক, পারফর্মার এবং মজার কার্যক্রম।",
    birthday_gallery: "জন্মদিনের গ্যালারি",
    large_gatherings: "বড় সমাবেশ",
    large_gatherings_description: "প্রিমিয়াম সাজসজ্জা, লজিস্টিক এবং বিনোদন সমন্বয়ের মাধ্যমে নির্বিঘ্ন পরিকল্পনা।",
    venue_setup: "ভেন্যু সেটআপ ও সাজসজ্জা",
    venue_setup_desc: "বৃহৎ জনসমাবেশের জন্য কাস্টমাইজড অভিজাত সাজসজ্জা।",
    catering_large: "ক্যাটারিং ও আতিথেয়তা",
    catering_large_desc: "শতাধিক অতিথির জন্য উচ্চমানের ক্যাটারিং সমাধান।",
    audio_lighting: "অডিও ও লাইটিং",
    audio_lighting_desc: "বৃহৎ ইভেন্টের জন্য পেশাদার সাউন্ড, লাইটিং এবং স্টেজ ম্যানেজমেন্ট।",
    event_entertainment: "বিনোদন ও কার্যক্রম",
    event_entertainment_desc: "লাইভ পারফর্মেন্স ও ইন্টারঅ্যাকটিভ কার্যক্রম।",
    large_gatherings_gallery: "বড় সমাবেশ গ্যালারি",
    concert_events: "কনসার্ট ও পার্টি",
    concert_events_description: "সম্পূর্ণ প্রোডাকশন, লাইটিং এবং বিনোদন সেবা সহ উত্তেজনাপূর্ণ কনসার্ট।",
    concert_production: "ইভেন্ট প্রোডাকশন",
    concert_production_desc: "স্টেজ, সাউন্ড এবং লাইটিং সহ পেশাদার প্রোডাকশন সেটআপ।",
    concert_catering: "ক্যাটারিং ও ভিআইপি সেবা",
    concert_catering_desc: "একচেটিয়া ক্যাটারিং এবং ভিআইপি ব্যবস্থা।",
    concert_photography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    concert_photography_desc: "প্রফেশনাল ফটোগ্রাফি ও ভিডিওগ্রাফি।",
    concert_entertainment: "বিনোদন সমন্বয়",
    concert_entertainment_desc: "লাইভ পারফর্মেন্স, ডিজে এবং বিনোদন পরিকল্পনা।",
    concert_gallery: "কনসার্ট ও পার্টি গ্যালারি",
    booking_page: "আপনার ইভেন্ট বুক করুন",
    booking_description: "নীচে আপনার তথ্য দিন এবং আমরা আপনার উদযাপন পরিকল্পনা করতে সাহায্য করব।",
    start_journey: "আমাদের সঙ্গে আপনার যাত্রা শুরু করুন",
    booking_instructions: "ফর্মটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করব।",
    full_name: "পূর্ণ নাম",
    email_address: "ইমেইল ঠিকানা",
    phone_number: "ফোন নম্বর",
    preferred_date: "পছন্দসই তারিখ",
    event_location: "ইভেন্টের স্থান",
    estimated_budget: "অনুমানিত বাজেট",
    choose_budget: "আপনার বাজেট সীমা নির্বাচন করুন",
    event_vision: "আপনার ধারণা আমাদের জানান",
    reviews_title: "আমাদের গ্রাহকদের মতামত",
    review1_text: "আলিশান ইভেন্টস আমার বিয়েটিকে অসাধারণ করে তুলেছে!",
    review1_rating: "⭐⭐⭐⭐⭐",
    review2_text: "পেশাদার, সময়মত এবং সৃজনশীল। দারুন অভিজ্ঞতা।",
    review2_rating: "⭐⭐⭐⭐⭐",
    review3_text: "দারুন সজ্জা এবং চমৎকার গ্রাহক সেবা।",
    review3_rating: "⭐⭐⭐⭐⭐",
    more_reviews: "অন্যান্য রিভিউ",
    events_completed: "সম্পন্ন ইভেন্ট",
    happy_clients: "সন্তুষ্ট ক্লায়েন্ট",
    years_experience: "বছরের অভিজ্ঞতা",
    cities_served: "শহরে সেবা",
    login: 'লগইন',
    signup: 'সাইনআপ',
  }
};

function toggleLang() {
  const isChecked = document.getElementById('switch-yes-no').checked;
  setLang(isChecked ? 'bn' : 'en');
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.body.classList.remove('en', 'bn');
  document.body.classList.add(lang);

  const elements = document.querySelectorAll('[data-key]');

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.2s, transform 0.2s';
  });

  setTimeout(() => {
    elements.forEach((el) => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 30);
    });
  }, 220);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  document.querySelectorAll('[data-key]').forEach(el => el.classList.add('fade-slide'));

  // sync toggle state
  const toggle = document.getElementById('switch-yes-no');
  if (toggle) toggle.checked = savedLang === 'bn';

  setLang(savedLang);
});

/* ── Booking Form ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const form   = document.querySelector('form.contact-form');
  const result = document.getElementById('result');
  if (!form || !result) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const formData = new FormData(form);
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          result.innerHTML = `<span style="color:#1f8a70;font-size:18px;">✓ Thank you! We'll be in touch shortly.</span>`;
          form.reset();
        } else {
          result.textContent = 'Something went wrong. Please try again.';
        }
      })
      .catch(() => { result.textContent = 'Error submitting form.'; })
      .finally(() => { btn.textContent = translations[localStorage.getItem('lang')||'en'].book_now; btn.disabled = false; });
  });
});

/* ── Logo click → home ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo img');
  if (logo) logo.addEventListener('click', () => window.location.href = 'index.html');
});

/* ── Staggered Hero text on load ───────────────────────────── */
window.addEventListener('load', () => {
  document.querySelectorAll('.welcome-content > *').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.15}s`;
  });
});
