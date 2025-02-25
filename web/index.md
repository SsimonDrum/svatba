---
layout: default
title: Vítejte
---

<!-- Welcome Page with Full-Screen Background -->
<div class="welcome-page">
</div>

<!-- Countdown Timer & Buttons -->
<div class="countdown-container">
    <div id="countdown">
        <span id="days">00</span>:<span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
    </div>
</div>

<div class="button-container">
    <a href="#jak-se-k-nam-dostat" class="info-button">Jak se k nám dostat</a>
    <a href="#co-si-vzit-na-sebe" class="info-button">Co si vzít na sebe</a>
    <a href="#dalsi-informace" class="info-button">Další informace</a>
</div>

<!-- Info Sections -->
<div id="jak-se-k-nam-dostat" class="info-section">
    <h1>Jak se k nám dostat</h1>
    <p>Podrobnosti o cestě k nám...</p>

    <!-- Displaying the map image with description -->
    <div class="map-container">
        <a href="https://www.google.com/maps/place/Opajda/@49.4995071,16.1908677,762m/data=!3m2!1e3!4b1!4m6!3m5!1s0x470d7853a2a15d51:0x7ed45f743219cd39!8m2!3d49.4995036!4d16.1934426!16s%2Fg%2F11clp5pv54?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank">
            <img src="Mapa.png" alt="Map showing location" class="map-image">
        </a>
        <p class="map-description">Mapa areálu</p>
    </div>

    <!-- Directions Button with GPS emoji -->
    <div class="directions-button-container">
        <a href="https://www.google.com/maps/dir/?api=1&destination=49.4995071,16.1908677" class="directions-button" target="_blank">
            📍 Klikni pro navigaci
        </a>
    </div>
</div>

<div id="co-si-vzit-na-sebe" class="info-section">
    <h1>Co si vzít na sebe</h1>
    <p>Tipy na oblečení...</p>
</div>

<div id="dalsi-informace" class="info-section">
    <h1>Další informace</h1>
    <p>Ostatní užitečné detaily...</p>
</div>

<style>
html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

.welcome-page {
    position: relative;
    height: 100vh;
    background: url('/welcome.jpg') no-repeat center center/cover;
}

.countdown-container {
    text-align: center;
    padding: 20px;
    margin-top: 100px;
}

#countdown {
    font-family: 'Roboto Mono', monospace;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: 10px;
    color: #000;
    background-color: #fff;
    padding: 20px;
    display: inline-block;
    border-radius: 10px;
    border: 5px solid #000; /* Black border for the frame */
}

.button-container {
    text-align: center;
    padding: 20px;
    background: #fff;
}

.info-button {
    display: inline-block;
    padding: 40px 80px;
    font-size: 2em;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border: 2px solid #000;
    border-radius: 10px;
    margin: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease;
}

.info-button:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.info-section {
    padding: 20px;
    margin-top: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-container {
    text-align: center;
    margin-top: 30px;
}

.map-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.map-image:hover {
    transform: scale(1.05);
}

.map-container a {
    display: inline-block;
    text-decoration: none;
}

.map-description {
    font-size: 1.2em;
    margin-top: 10px;
    color: #333;
    font-style: italic;
}

/* Directions Button Styles */
.directions-button-container {
    text-align: center;
    margin-top: 30px;
}

.directions-button {
    display: inline-block;
    padding: 15px 40px;
    font-size: 1.5em;
    background-color: #4CAF50;
    color: #fff;
    text-decoration: none;
    border: 2px solid #4CAF50;
    border-radius: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease;
}

.directions-button:hover {
    background-color: #45a049;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
</style>

<script>
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2025-06-28T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdownElement.innerHTML = 'Dnes je ten velký den!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
</script>
