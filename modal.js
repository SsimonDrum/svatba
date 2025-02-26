function openModal() {
    let modal = document.getElementById('mapModal');
    let modalImg = document.getElementById('mapImage');
    modal.style.display = 'flex';
    modalImg.src = 'assets/images/mapa.png';
}

// Close the modal
function closeModal() {
    let modal = document.getElementById('mapModal');
    modal.style.display = 'none';
}