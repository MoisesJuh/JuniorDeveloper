const sectiontrabalho=document.getElementById('sectiontrabalho')
const b_vermais=document.getElementById('b_vermais')
const maindivs=document.getElementById('maindivs')

b_vermais.addEventListener('click',()=>{
  b_vermais.style.display='flex'
  if(b_vermais.style.display=='flex'){
    b_vermais.style.display='none'
    maindivs.style.height='100%'
    sectiontrabalho.style.maxHeight='100%'
    sectiontrabalho.style.overflowY='visible'
    sectiontrabalho.style.translate='0px -320px'
    sectiontrabalho.style.padding='15px'
    sectiontrabalho.style.marginBottom='15px'
  }
})