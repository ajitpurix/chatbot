document.getElementById('send-btn').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        displayMessage(message, 'user-message');
        userInput.value = '';

        // Simulate bot response after 1 second
        setTimeout(() => {
            displayMessage('This is a bot response!', 'bot-message');
        }, 1000);
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom after each message
    chatBox.scrollTop = chatBox.scrollHeight;
}
