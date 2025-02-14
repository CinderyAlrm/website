
const titleElement = document.querySelector('.BIGahhtitle');

window.addEventListener('scroll', () => {
    
    const scrollY = window.scrollY;

    
    const opacity = 1 - scrollY / 500; 

   
    titleElement.style.opacity = Math.max(0, Math.min(1, opacity));
});


                    
const audio = document.getElementById('audio');
const BEGGING = document.getElementById('BEGGING');
const Imfetty = document.getElementById('Imfetty');

BEGGING.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        BEGGING.textContent = 'Gulp';
        Imfetty.style.display = 'block';
    } else {
        audio.pause();
        BEGGING.textContent = '';
        Imfetty.style.display = 'none';
    }
});

