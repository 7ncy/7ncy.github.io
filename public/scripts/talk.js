// Initialize the talk functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const talkButton = document.getElementById('talkButton');
    const chatBubble = document.getElementById('chatBubble');

    talkButton.addEventListener('click', () => {
        chatBubble.classList.remove('opacity-0');
        setTimeout(() => {
            chatBubble.classList.add('opacity-0');
        }, 5000);
    });
}); 