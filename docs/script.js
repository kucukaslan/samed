document.addEventListener('DOMContentLoaded', () => {
    const confettiBtn = document.getElementById('confettiBtn');
    let clickCount = 0;
    const messages = [
        "Hala kıskanç olduğunu biliyoruz! 😏",
        "İnkar etmek faydasız! 😅",
        "Tamam tamam, inandık(!) 😂",
        "Sen böyle dedikçe daha çok belli oluyor! 🤭",
        "Hadi hadi, kabul et artık! 🎭"
    ];

    confettiBtn.addEventListener('click', () => {
        // Confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Change button text
        clickCount = (clickCount + 1) % messages.length;
        confettiBtn.textContent = messages[clickCount];

        // Add some fun animations
        confettiBtn.classList.remove('animate__pulse');
        void confettiBtn.offsetWidth; // Trigger reflow
        confettiBtn.classList.add('animate__pulse');
    });

    // Add hover effect to list items
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('mouseenter', () => {
            li.style.transform = 'translateX(10px)';
            li.style.transition = 'transform 0.3s ease';
        });
        
        li.addEventListener('mouseleave', () => {
            li.style.transform = 'translateX(0)';
        });
    });
}); 