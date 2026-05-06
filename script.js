// 1. Search Logic
function searchGames() {
    const input = document.getElementById('gameSearch').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        const category = cards[i].querySelector('p').innerText.toLowerCase();

        if (title.includes(input) || category.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 2. Click Logging Logic
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btn')) {
        const gameTitle = e.target.closest('.card-info').querySelector('h3').innerText;
        const time = new Date().toLocaleTimeString();
        
        // Log to browser console
        console.log(`%c[ACTIVITY] %cPlaying: ${gameTitle} at ${time}`, "color: #38bdf8; font-weight: bold", "color: white");
        
        // Local Counter (keeps track of how many times you played a specific game)
        let playCount = localStorage.getItem(gameTitle) || 0;
        playCount++;
        localStorage.setItem(gameTitle, playCount);
        console.log(`${gameTitle} total plays: ${playCount}`);
    }
});
