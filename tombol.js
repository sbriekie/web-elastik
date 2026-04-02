const tombol = document.querySelector('.bar');
const menu = document.querySelector('.navbar-nav');

// membuat event click
// pada saat tombol di click, tambahkan class aktif pada class menu
// saat diklik lagi, maka class aktif dihilangkan dari class menu (toggle)
if (tombol){
    tombol.addEventListener('click', () => {
        menu.classList.toggle('aktif');
        });   
}