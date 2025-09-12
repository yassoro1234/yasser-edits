// Navbar mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
            navLinks.classList.remove('open');
        }
    });
});

// Gallery modal logic
const galleryCards = document.querySelectorAll('.gallery-card');
const modal = document.getElementById('videoModal');
const modalVideoContainer = document.getElementById('modalVideoContainer');
const closeModal = document.getElementById('closeModal');

galleryCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoSrc = card.getAttribute('data-video');
        const videoType = card.getAttribute('data-type');
        modal.classList.add('active');
        modalVideoContainer.innerHTML = '';

        if (videoType === 'youtube') {
            // YouTube embed
            const ytId = getYouTubeID(videoSrc);
            if (ytId) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.allow = "autoplay; encrypted-media";
                iframe.allowFullscreen = true;
                iframe.frameBorder = "0";
                modalVideoContainer.appendChild(iframe);
            }
        } else if (videoType === 'vimeo') {
            // Vimeo embed
            const vimeoId = getVimeoID(videoSrc);
            if (vimeoId) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.allow = "autoplay; fullscreen";
                iframe.allowFullscreen = true;
                iframe.frameBorder = "0";
                modalVideoContainer.appendChild(iframe);
            }
        } else {
            // Local video (MP4, WebM, OGG, etc.)
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = true;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.height = '100%';
            modalVideoContainer.appendChild(video);
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalVideoContainer.innerHTML = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalVideoContainer.innerHTML = '';
    }
});

// Helper to extract YouTube ID
function getYouTubeID(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Helper to extract Vimeo ID
function getVimeoID(url) {
    const regExp = /vimeo\.com\/(?:channels\/[\w]+\/|groups\/[^\/]*\/videos\/|album\/\d+\/video\/|video\/|)(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Contact form validation and fake submit
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#ff4d4d";
        return;
    }
    // Simulate sending
    formMessage.textContent = "Sending...";
    formMessage.style.color = "var(--neon)";
    setTimeout(() => {
        formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
        formMessage.style.color = "var(--neon)";
        contactForm.reset();
    }, 1200);
});

// Splash screen logic
window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.classList.add('hide');
        setTimeout(() => splash.style.display = 'none', 700);
    }, 1500); // Show splash for 1.5 seconds
});