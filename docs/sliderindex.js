function slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider Passed!!');
    }

    let prev;
    let current;
    let next;
    const slides = slider.querySelector('.slides');
    const ButPrev = slider.querySelector('.goToPrev')
    const ButNext = slider.querySelector('.goToNext')

    function startslider() {
        current = slides.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyclasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        const classesToRemove = ['prev', 'current', 'next'];

        current.classList.remove(...classesToRemove);
        prev.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current
            ]
        } else {
            [prev, current, next] = [
                current,
                next,
                next.nextElementSibling || slides.firstElementChild
            ]
        }
        applyclasses();
    }

    startslider();
    applyclasses();

    ButPrev.addEventListener('click', () => move('back'));
    ButNext.addEventListener('click', move);
}


const sliderTop = slider(document.querySelector('.slider'));
const sliderBot = slider(document.querySelector('.dog-slider'));