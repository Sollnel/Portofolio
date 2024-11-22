const form = document.getElementById('contact-form');
const messageStatus = document.getElementById('message-status');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('your-email-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            messageStatus.textContent = 'Message sent successfully!';
            form.reset();
        } else {
            messageStatus.textContent = 'Error sending message. Please try again later.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        messageStatus.textContent = 'An error occurred. Please try again later.';
    });
});