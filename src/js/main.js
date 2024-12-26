document.getElementById('menu-button').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('scale-0')) {
    menu.classList.remove('scale-0', 'opacity-0');
    menu.classList.add('scale-100', 'opacity-100');
  } else {
    menu.classList.remove('scale-100', 'opacity-100');
    menu.classList.add('scale-0', 'opacity-0');
  }
});
