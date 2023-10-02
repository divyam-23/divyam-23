const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');

// Function to flip the coin
function flipCoin() {
    coin.style.transform = 'rotateY(720deg)';
    setTimeout(() => {
        coin.style.transform = 'rotateY(0deg)';
    }, 2000);
}

// Event listener for the flip button
flipButton.addEventListener('click', flipCoin);

// Initial flip when the page loads
flipCoin();
