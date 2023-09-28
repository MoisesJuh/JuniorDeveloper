const b_sobremim=document.getElementById('sobremim')
const article_p=document.getElementById('article_p')


b_sobremim.addEventListener('click',()=>{
  b_sobremim.style.display='flex'
  if(b_sobremim.style.display=='flex'){
    b_sobremim.style.display='none'
    article_p.style.display='flex'
  }
})