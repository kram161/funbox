const card = document.querySelectorAll('.important__list-unit-wrapper');
const selectButton = document.querySelectorAll('.js-select-button')

card.forEach(button => {
    select(button)
})
selectButton.forEach(button => {
    select(button)
})
function select(button){
    let clicked = false;
    let mouseLeave = false;
    button.addEventListener('click', () => {
        console.log(button)
        clicked = true;
        button.addEventListener('mouseleave', () => {
            mouseLeave = true;
            if (clicked && mouseLeave){
                const card = button.closest('.important__list-unit');
                card.classList.toggle('active');
                clicked = false;
                mouseLeave = false;
            }
        })
    })
}
