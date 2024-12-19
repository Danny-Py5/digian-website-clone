const headerButton = document.querySelector('.header__button');
const header__ul = document.querySelector('.header__ul');
const headerSection = document.querySelector('.header__section');


function headerHanduler() {
    let isToggle = false;
    headerButton.addEventListener('click', () => {
        isToggle = !isToggle;
        if (isToggle){
            headerButton.classList.add('hover');
            header__ul.classList.add('active');
            headerSection.style.alignItems = 'flex-start';
            headerSection.style.paddingTop = '10px';
        } else {
            reomveHeaderActiveCLasses();
        }  
    });
};
function reomveHeaderActiveCLasses() {
    header__ul.classList.remove('active');
    headerButton.classList.remove('hover');
}

window.addEventListener('resize', (e) => {
    if (e.target.outerWidth > 760){
        reomveHeaderActiveCLasses();
    }
});
headerHanduler();


let currentContent = document.querySelector('.js-hero__div');

function slideHeroContent() {
    currentContent.classList.add('slideOut');
    currentContent.classList.remove('slideInRight');

    setTimeout(()=> {
        currentContent.classList.remove('slideOut');
        currentContent.classList.add('slideInRight');
    }, 1000);
};


document.querySelectorAll('.hero__slider-button').forEach(button => {
    button.addEventListener('click', slideHeroContent);
})