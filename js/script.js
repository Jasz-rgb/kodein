window.addEventListener("scroll", () => {
    const welcomeSection = document.getElementById('welcome-section');
    const infoSection = document.getElementById('info-section');
    const footer = document.getElementById('footer');

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Set the opacity of each section based on scroll position
    if (scrollY < 100) {
        // Show welcome section fully
        welcomeSection.style.opacity = '1';
        infoSection.style.opacity = '0';
    } else if (scrollY >= 100 && scrollY < windowHeight) {
        // Fade out welcome section and fade in info section
        const welcomeOpacity = 1 - (scrollY - 100) / (windowHeight - 100);
        const infoOpacity = (scrollY - 100) / (windowHeight - 100);
        welcomeSection.style.opacity = welcomeOpacity;
        infoSection.style.opacity = infoOpacity;
    } else {
        // Keep footer at full opacity and hide other sections
        welcomeSection.style.opacity = '0';
        infoSection.style.opacity = '1'; // Ensure info section stays visible
        footer.style.opacity = '1'; // Footer always visible
    }
});