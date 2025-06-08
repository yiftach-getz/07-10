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

// אנימציית הקלדה לטקסט handwrite-type
window.addEventListener('DOMContentLoaded', function() {
    const typeTarget = document.getElementById('typewriter-text');
    if (!typeTarget) return;
    const fullText = typeTarget.innerHTML.replace(/<br>/g, '\n');
    typeTarget.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            if (fullText[i] === '\n') {
                typeTarget.innerHTML += '<br>';
            } else {
                typeTarget.innerHTML += fullText[i];
            }
            i++;
            setTimeout(typeWriter, 55);
        } else {
            // בסיום ההקלדה, הסר את הסמן המהבהב
            typeTarget.style.borderLeft = 'none';
            typeTarget.style.animation = 'none';
        }
    }
    typeWriter();
}); 