/**
   * Función que permite modificar la canción a reproducir en el reproductor
   * @param {*} image Imagen que se utilizará para reemplazar la portada del disco
   * @param {*} song Canción que se debe situar en el reproductor
   */
window.changeSong = function changeSong(image, song) {
    var img = document.getElementById('current-song');
    var player = document.getElementById('player');
    img.className = "r-box r-box-1_1 imagen ";
    img.className = "r-box r-box-1_1 imagen " + image + " visible";
    player.setAttribute('src', 'https://open.spotify.com/embed/track/' + song);
}