document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 1. CAROUSEL
    // ========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let current = 0;
    let autoplay;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        updateCarouselHeight();
    }

    function updateCarouselHeight() {
        const activeSlide = slides[current];
        const img = activeSlide.querySelector('img');
        const track = document.getElementById('carousel-track');
        
        if (img && track) {
            const setHeight = () => {
                // Usar naturalHeight da imagem para manter proporção
                if (img.naturalHeight > 0) {
                    const ratio = img.naturalWidth / img.naturalHeight;
                    const containerWidth = track.offsetWidth;
                    const calculatedHeight = containerWidth / ratio;
                    track.style.height = calculatedHeight + 'px';
                }
            };
            
            if (img.complete) {
                setHeight();
            } else {
                img.onload = setHeight;
            }
        }
    }

    function startAutoplay() {
        autoplay = setInterval(() => goToSlide(current + 1), 5000);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        startAutoplay();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => { goToSlide(current - 1); resetAutoplay(); });
        nextBtn.addEventListener('click', () => { goToSlide(current + 1); resetAutoplay(); });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.index));
            resetAutoplay();
        });
    });

    startAutoplay();
    updateCarouselHeight();
    window.addEventListener('resize', updateCarouselHeight);

    // ========================================
    // 2. MOBILE MENU
    // ========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const categoryNav = document.getElementById('category-nav');

    if (mobileMenuBtn && categoryNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            categoryNav.classList.toggle('open');
        });
    }

    // ========================================
    // 3. ADD TO CART
    // ========================================
    const addCartBtns = document.querySelectorAll('.btn-add-cart');
    const cartBadge = document.getElementById('cart-badge');
    let cartCount = 0;

    addCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            cartBadge.textContent = cartCount;
            cartBadge.classList.remove('bump');
            void cartBadge.offsetWidth;
            cartBadge.classList.add('bump');

            // Visual feedback
            const originalHTML = btn.innerHTML;
            btn.classList.add('added');
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> ADICIONADO!';
            
            setTimeout(() => {
                btn.classList.remove('added');
                btn.innerHTML = originalHTML;
            }, 2000);
        });
    });

    // ========================================
    // 4. WISHLIST TOGGLE
    // ========================================
    const wishlistBtns = document.querySelectorAll('.wishlist-toggle');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // ========================================
    // 4b. PRODUCT CARD NAVIGATION
    // ========================================
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const isInteractive = event.target.closest('.btn-add-cart, .wishlist-toggle, .pao-btn, .product-actions-overlay');
            if (!isInteractive) {
                const targetPage = card.dataset.productPage || 'produto.html';
                window.location.href = targetPage;
            }
        });
        card.style.cursor = 'pointer';
    });

    // ========================================
    // 5. NEWSLETTER FORM
    // ========================================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const submitBtn = newsletterForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'CADASTRADO!';
            submitBtn.style.background = '#16a34a';
            input.value = '';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ========================================
    // 6. SCROLL ANIMATIONS (Intersection Observer)
    // ========================================
    const animateElements = document.querySelectorAll('.product-card, .benefit-item, .cat-icon-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

});
