const circle = document.querySelector('#circle')
circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('akash')) {
      circle.classList.add('akash');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('akash')) {
        circle.classList.remove('akash');
    }
});






















