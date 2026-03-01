// Smooth scroll for banner button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});