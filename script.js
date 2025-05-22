document.addEventListener('DOMContentLoaded', function() {
    // פתיחת קטעים מלאים
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const excerpt = this.parentElement;
            const fullText = excerpt.querySelector('p').textContent;
            alert(fullText); // במקום להציג את הטקסט המלא, מציגים אותו כ-alert. ניתן לשנות זאת בהתאם לדרישות.
        });
    });

    // קרוסלת גלריה
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
}); 