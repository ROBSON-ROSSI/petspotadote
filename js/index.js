var btn_voltar = document.getElementById('bt-voltar');
var btn_next = document.getElementById('bt-next');
var btn_card = document.querySelector('.btn-card');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var marg = 0; 
btn_voltar.addEventListener('click', () => {

  if(marg == -1920) {
    btn_voltar.style.visibility = 'hidden';
    marg = marg + 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '1s';
  } else {
  
  marg = marg + 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '1s';
  btn_next.style.visibility = 'visible';
  }
});

btn_next.addEventListener('click', () => {
  if(marg == -3840){
    btn_next.style.visibility = 'hidden';
    marg = marg - 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '1s';
  
  } else {
  btn_voltar.style.visibility = 'visible';
  marg = marg - 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '1s';
  //alert(marg);
  }
})