document.addEventListener('DOMContentLoaded', function() {
    // Build navigation menu
    const navLinksContainer = document.querySelector('.nav-links');
    
    navConfig.pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page.href;
        link.innerHTML = `<i class="fas ${page.icon}"></i> ${page.text}`;
        link.classList.add('nav-link');
        
        // Highlight current page
        if (window.location.pathname.endsWith(page.href)) {
            link.classList.add('active');
        }
        
        navLinksContainer.appendChild(link);
    });

    // Add page transition
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            document.body.classList.add('page-transition');
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    });

    // Remove transition class when page loads
    window.addEventListener('load', () => {
        document.body.classList.remove('page-transition');
    });

    // Simplified scroll behavior
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    const mainNav = document.querySelector('.main-nav');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            mainNav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            mainNav.style.transform = 'translateY(0)';
        }

        // Add background when scrolled
        if (currentScroll > 50) {
            mainNav.classList.add('nav-scrolled');
        } else {
            mainNav.classList.remove('nav-scrolled');
        }

        lastScroll = currentScroll;
    });
});
