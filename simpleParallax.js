const gridItems = document.querySelectorAll('.grid');

gridItems.forEach((grid, index) => {
    grid.style.transform = `translateY(${index * 300}px)`;
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    gridItems.forEach((grid, index) => {
        const offset = index === 1 ? scrollY / 2 : scrollY;
        grid.style.transform = `translateY(${offset + index * 300}px)`;
    });
});