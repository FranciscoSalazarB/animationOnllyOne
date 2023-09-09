/**
 * animationOnllyOne es una función que busca elementos del dom
 * iniciando sus animaciones (en caso de tenerlas) una única vez al ser viasulizado
 * @param {string} qurySelector
 */
function animatedOnllyOne(qurySelector = ".animation_onlly_ones") {
    const animateds = [];
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entrie => {
            if (!entrie.isIntersecting) return null;
            const element = entrie.target;
            if (animateds.some(animated => element == animated)) return null
            animateds.push(element);
            element.getAnimations()?.forEach(animation => animation.play())
        });
    });
    document.querySelectorAll(qurySelector).forEach(element => {
        observer.observe(element);
    })
}