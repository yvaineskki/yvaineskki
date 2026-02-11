const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContent = document.getElementById('main-content');
const gifSection = document.getElementById('gif-section');
const continueBtn = document.getElementById('continue-btn');
const datePlanSection = document.getElementById('date-plan-section');
const backToGifBtn = document.getElementById('back-to-gif-btn');
const noSection = document.getElementById('no-section');
const yesAgainBtn = document.getElementById('yes-again-btn');

// No button
noBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    noSection.style.display = 'flex';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes disappear {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(style);

// Yes button
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    gifSection.style.display = 'flex';
});

// Yes Again button
yesAgainBtn.addEventListener('click', () => {
    noSection.style.display = 'none';
    gifSection.style.display = 'flex';
});

// Continue button: Hide GIF and show date plan
continueBtn.addEventListener('click', () => {
    gifSection.style.display = 'none';
    datePlanSection.style.display = 'flex';
});

// Back button: Return to main content 
backToGifBtn.addEventListener('click', () => {
    datePlanSection.style.display = 'none';
    mainContent.style.display = 'block';
});
