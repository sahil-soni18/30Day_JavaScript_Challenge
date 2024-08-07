// Establish WebSocket connection
// import WebSocket from 'ws';
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', (event) => {
    console.log('Message from server', event.data);
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    messages.appendChild(messageElement);
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});

// Get user input elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Prompt user for a username
let username = prompt('Enter your username');
username = username ? username : 'Anonymous';

// Function to send messages
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        const fullMessage = `${username}: ${message}`;
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(fullMessage);
            messageInput.value = '';
        } else {
            console.log('WebSocket is not open');
        }
    }
}


// Add event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});