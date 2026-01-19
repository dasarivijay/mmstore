

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const scrollContainer = document.querySelector('.products-scroll');

    if (scrollContainer) {
        const scrollAmount = 350; 
        let isHovered = false;

        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }

        
        let scrollSpeed = 1; 
        
        function step() {
            if (!isHovered) {
           
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += scrollSpeed;
                }
            }
            requestAnimationFrame(step);
        }

      
        requestAnimationFrame(step);

        scrollContainer.addEventListener('mouseenter', () => isHovered = true);
        scrollContainer.addEventListener('mouseleave', () => isHovered = false);
        
       
        if (prevBtn) {
            prevBtn.addEventListener('mouseenter', () => isHovered = true);
            prevBtn.addEventListener('mouseleave', () => isHovered = false);
        }
        
    }
});
