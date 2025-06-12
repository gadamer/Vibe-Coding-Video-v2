// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to benefit cards on scroll
const benefitCards = document.querySelectorAll('.benefit-card');
const animateOnScroll = () => {
  benefitCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

// Initialize card styles
benefitCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
window.addEventListener('load', animateOnScroll);

// Add hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.boxShadow = '0 6px 20px rgba(108, 99, 255, 0.4)';
  });
  
  ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.boxShadow = 'none';
  });
  
  ctaButton.addEventListener('click', () => {
    // Scroll to featured video section
    const featuredVideo = document.querySelector('.featured-video');
    if (featuredVideo) {
      window.scrollTo({
        top: featuredVideo.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
}

// Add fade-in animation for video sections
const videoSections = document.querySelectorAll('.video-section');
const animateVideoSections = () => {
  videoSections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;
    
    if (sectionPosition < screenPosition) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

// Initialize video section styles
videoSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add scroll event listener for video sections
window.addEventListener('scroll', animateVideoSections);
// Trigger once on load
window.addEventListener('load', animateVideoSections);
