document.getElementById('archiveForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const story = document.getElementById('story').value.trim();
    const file = document.getElementById('file').files[0];

    if (!name || !email || !story || !file) {
        alert("Please fill all fields and upload a file.");
        return;
    }

    // Simulate submission to moderation queue
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Thank you, ${name}! Your submission has been received and is under review.`;

    // Reset form
    this.reset();
});
