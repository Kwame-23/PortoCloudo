document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for toggle dropdown functionality
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('open');
            if (content.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Existing alert button functionality
    const alertButton = document.getElementById('alert-button');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            const userName = document.getElementById('user-name').innerText;
            alert(`User's name is: ${userName}`);
        });
    }
});
