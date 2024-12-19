function showReview(productName) {
    alert('You clicked on the review for ' + productName);
}

// Form validation (optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        this.reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});