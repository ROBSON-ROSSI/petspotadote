var icon_emoji = document.getElementById('envio-emoji');
var lista_emoji = document.querySelector('.div-menu-emoji');

icon_emoji.addEventListener('click', () => {
    lista_emoji.classList.toggle('close-menu');
});
