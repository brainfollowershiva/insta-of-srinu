// JavaScript for basic interactions, like Follow button functionality
document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.getElementById('followBtn');

    followBtn.addEventListener('click', () => {
        if (followBtn.textContent === 'Follow') {
            followBtn.textContent = 'Following';
            followBtn.style.backgroundColor = '#c4c4c4';
        } else {
            followBtn.textContent = 'Follow';
            followBtn.style.backgroundColor = '#0095f6';
        }
    });
});
