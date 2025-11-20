document.addEventListener('DOMContentLoaded', () => {
    const cardVideos = document.querySelectorAll('.card-video');

    cardVideos.forEach(img => {
        const staticSrc = img.src;
        const gifSrc = img.dataset.gif; 

        // Adiciona o evento: Mouse entra no card (hover ON)
        img.addEventListener('mouseenter', () => {
            img.src = gifSrc; 
        });

        // Adiciona o evento: Mouse sai do card (hover OFF)
        img.addEventListener('mouseleave', () => {
            img.src = staticSrc; 
        });
    });
});