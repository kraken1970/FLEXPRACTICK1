let info = document.querySelector('#info');
let infoContent = document.querySelector('.wrap-info');

info.addEventListener('click', function (evt) {
  infoContent.classList.toggle('InfoBoxShow');
});