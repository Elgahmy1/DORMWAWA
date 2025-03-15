document.addEventListener('DOMContentLoaded', function() {
    // Create navigation HTML
    function createNavigation() {
        const navLinks = navConfig.pages.map(page => `
            <a href="${page.href}" data-page="${page.href.replace('.html', '')}">
                <i class="fas ${page.icon}"></i> ${page.text}
            </a>
        `).join('');

        return `
            <nav class="main-nav">
                <div class="logo">
                    <a href="index.html">
                        <i class="fas fa-building"></i>
                        <span>STEM Dorm</span>
                    </a>
                </div>
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="nav-links">${navLinks}</div>
            </nav>
        `;
    }

    // Initialize navigation
    const nav = document.querySelector('.main-nav');
    if (!nav) {
        document.body.insertAdjacentHTML('afterbegin', createNavigation());
    }

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelector(`[data-page="${currentPage.replace('.html', '')}"]`)?.classList.add('active');

    // Handle navigation transitions
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target !== currentPage) {
                document.body.classList.add('page-transition');
            }
        });
    });
});
