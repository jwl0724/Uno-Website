// remove classes from buttons
function resetButtons(buttonsList) {
    buttonsList.forEach(button => {
        button.className = 'button';
    })
}

// main function body
document.addEventListener('DOMContentLoaded', () => {
    let playerCount = 4;

    // add event listeners to all buttons
    document.querySelectorAll('#playerCount button').forEach(button => {
        button.addEventListener('click', (clickTarget) => {
            // remove color from non-selected buttons
            resetButtons(document.querySelectorAll('#playerCount button')); 

            // change selected button color
            if (clickTarget.target.tagName === 'SPAN') {
                playerCount = Number(clickTarget.target.parentNode.id.slice(-1))
                clickTarget.target.parentNode.className = 'selected';
            } else {
                playerCount = Number(clickTarget.target.id.slice(-1));
                clickTarget.target.className = 'selected';
            };
        });
    });
});
