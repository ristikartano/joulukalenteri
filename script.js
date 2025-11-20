
// Lumihiutaleiden luonti
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Unicode lumihiutale
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2–5 sekuntia
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px'; // 10–20px
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    // Poistetaan lumihiutale kun animaatio päättyy
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Luo lumihiutaleita jatkuvasti
setInterval(createSnowflake, 300);
