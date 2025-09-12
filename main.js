// JavaScript functionality for the video portfolio website

document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoSrc = document.getElementById('videoSrc');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');

    // Open video modal on thumbnail click
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoUrl = thumbnail.dataset.videoUrl;
            videoSrc.src = videoUrl;
            videoModal.style.display = 'block';
        });
    });

    // Close video modal
    closeModal.addEventListener('click', () => {
        videoModal.style.display = 'none';
        videoSrc.pause();
        videoSrc.currentTime = 0;
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you can handle the form data, e.g., send it to a server
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});