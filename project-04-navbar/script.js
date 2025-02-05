const navToggle = document.querySelector('.nav-toggle');
const Media = document.querySelector('.media');
const Socials = document.querySelector('.socials');


navToggle.addEventListener('click', function() {
  Media.classList.toggle('display-media')
  Socials.classList.toggle('display-socials')
});