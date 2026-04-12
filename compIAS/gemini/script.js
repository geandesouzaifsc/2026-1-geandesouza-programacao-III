document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    mobileBtn.addEventListener('click', () => {
        const isVisible = navMenu.style.display === 'block';
        
        if (isVisible) {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '75px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = '#fff';
            navMenu.style.padding = '30px';
            navMenu.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
            
            const ul = navMenu.querySelector('ul');
            ul.style.flexDirection = 'column';
            ul.style.textAlign = 'center';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style = "";
        }
    });
});