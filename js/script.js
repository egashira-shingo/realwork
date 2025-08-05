document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slideshow ---
    const slides = document.querySelectorAll('.hero__slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // 5秒ごとに画像を切り替え
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-item__q');
        const answer = item.querySelector('.faq-item__a');

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
                otherItem.querySelector('.faq-item__a').style.maxHeight = null;
            });

            // Open the clicked item if it was closed
            if (!isOpen) {
                item.classList.add('is-open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing once it's visible
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }

    // --- Pricing Tabs ---
    const tabs = document.querySelectorAll('.pricing__tab');
    const panels = document.querySelectorAll('.pricing__panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // De-select all tabs for screen readers
            tabs.forEach(t => t.setAttribute('aria-selected', 'false'));

            // Activate clicked tab and corresponding panel
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const targetPanelId = tab.getAttribute('aria-controls');
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- Sticky Footer Visibility Control ---
    const heroSection = document.querySelector('.hero');
    const stickyFooter = document.querySelector('.sticky-footer');

    if (heroSection && stickyFooter) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero section is intersecting (visible), hide the footer.
                if (entry.isIntersecting) {
                    stickyFooter.classList.add('is-hidden');
                } else {
                    // If hero section is not intersecting, show the footer.
                    stickyFooter.classList.remove('is-hidden');
                }
            });
        }, {
            rootMargin: '-100% 0px 0px 0px' // Trigger when hero is completely out of view
        });

        footerObserver.observe(heroSection);
    }
});