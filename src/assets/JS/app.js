// всплывающее окно реквизитов
(function () {
  document.querySelector('#info').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.wrap-info').classList.toggle('InfoBoxShow');
  });
})();