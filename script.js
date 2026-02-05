document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    // Add click event listeners to tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.getAttribute('data-day');
            
            // Remove active class from all buttons and days
            tabBtns.forEach(b => b.classList.remove('active'));
            scheduleDays.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked button and corresponding day
            btn.classList.add('active');
            document.getElementById(day).classList.add('active');
        });
    });

    // Add animation effect when schedule items come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to schedule items
    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Add click effect to schedule items
    scheduleItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
        });
    });
});