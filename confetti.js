function launchConfetti() {
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f00', '#00f'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.zIndex = 9999;
        confetti.style.borderRadius = '50%';
        document.body.appendChild(confetti);
        
        const fall = confetti.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${Math.random() * 100 + 100}vh)` }
        ], {
            duration: Math.random() * 2000 + 2000,
            iterations: 1,
            easing: 'ease-out'
        });

        fall.onfinish = () => confetti.remove();
    }
}

launchConfetti();
