document.addEventListener('DOMContentLoaded', () => {
  const heroTL = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
  });

  heroTL
    .add({targets: 'header', translateY: [-50, 0], opacity: [0, 1], duration: 800})
    .add({ targets: '.social-link', opacity: [0, 1], translateY: [-10, 0], delay: anime.stagger(100) }, '-=400')
    .add({ targets: '.hero-sub', opacity: [0, 1], translateY: [20, 0] }, '-=600')
    .add({ targets: '.hero-title', opacity: [0, 1], scale: [0.9, 1] }, '-=700')
    .add({ targets: '.hero-desc', opacity: [0, 1], translateY: [20, 0] }, '-=600');

  anime({ targets: '.cursor-blink', opacity: [1, 0.2], duration: 800, easing: 'easeInOutQuad', direction: 'alternate', loop: true });

  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({ targets: entry.target, opacity: [0, 1], translateY: [40, 0], duration: 900, easing: 'easeOutCubic'
        });

        const cards = entry.target.querySelectorAll('.project-card');
        if (cards.length > 0) {
          anime({ targets: cards, opacity: [0, 1], scale: [0.9, 1], delay: anime.stagger(150), duration: 700, easing: 'easeOutBack' });
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-section').forEach(sec => {
    sec.style.opacity = '0';
    observer.observe(sec);
  });

  const slider = document.getElementById('slider-container');
  if (slider) {
    slider.innerHTML += slider.innerHTML;
    const totalWidth = slider.scrollWidth / 2;

    const carouselAnimation = anime({ targets: slider, scrollLeft: [0, totalWidth], duration: 35000, easing: 'linear', loop: true });

    slider.addEventListener('mouseenter', () => carouselAnimation.pause());
    slider.addEventListener('mouseleave', () => carouselAnimation.play());

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 179, 8, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.subheader-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 110; // Desconto dos headers fixos
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        anime({ targets: [document.documentElement, document.body], scrollTop: targetPosition, duration: 900, easing: 'easeInOutCubic' });
      }
    });
  });

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        let current = '';

        sections.forEach(section => {
          const sectionTop = section.offsetTop - 140;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        isTicking = false;
      });

      isTicking = true;
    }
  });

  const svgPaths = document.querySelectorAll('.footer-circuit-path');
  if (svgPaths.length > 0) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({ targets: '.footer-circuit-path', strokeDashoffset: [anime.setDashoffset, 0], easing: 'easeInOutCubic', duration: 2500, delay: anime.stagger(150), direction: 'alternate', loop: true });
          footerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const footerElement = document.querySelector('footer');
    if (footerElement) footerObserver.observe(footerElement);
  }

});