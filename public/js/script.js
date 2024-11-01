// Select all name cards
document.querySelectorAll('.name-card').forEach(card => {
    // Add a click event listener to each card
    card.addEventListener('click', () => {
        // Redirect to the URL specified in the data-url attribute
        window.location.href = card.getAttribute('data-url');
    });
});
