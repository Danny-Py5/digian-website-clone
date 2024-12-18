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