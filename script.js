// Get the flip container element from the HTML
const flipContainer = document.querySelector('.flip-container');

// Add an event listener that waits for a click on the container
flipContainer.addEventListener('click', () => {
    // When clicked, toggle the 'flipped' class.
    // This simple action triggers the CSS animation.
    flipContainer.classList.toggle('flipped');
});