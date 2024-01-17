// remove classes from buttons
function resetButtons(buttonsList) {
    buttonsList.forEach(button => {
        button.className = 'button';
    })
}

// main function body
document.addEventListener('DOMContentLoaded', () => {
    let playerCount = 4;

    // add event listeners to player select buttons
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

    // add event listener to create room button
    document.getElementById('createButton').addEventListener('click', async () => {
        try {
            // send request to backend
            let response = await fetch(`http://localhost:3000/createRoom?playerCount=${playerCount}`);
            let data = await response.json();

            // redirect to game page
            window.location.href = `http://localhost:3000/game/${data.roomId}`;
        } catch (err) {
            console.log(err);
        };
    });
});
