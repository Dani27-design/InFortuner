const menuToggle = document.querySelector('.menu-toggle input');
const nav  = document.querySelector('nav ul');
const hamSatu = document.querySelector('.menu-toggle span:nth-child(2)');
const hamDua = document.querySelector('.menu-toggle span:nth-child(3)');
const hamTiga = document.querySelector('.menu-toggle span:nth-child(4)');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
    hamSatu.classList.toggle('active');
    hamDua.classList.toggle('active');
    hamTiga.classList.toggle('active');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('slide');
    hamSatu.classList.toggle('active');
    hamDua.classList.toggle('active');
    hamTiga.classList.toggle('active');
});
