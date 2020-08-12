const name = document.getElementById('name');

name.innerText = 'Przemek';

if (module.hot) {
    module.hot.accept();
}