const moreCards=document.getElementById('moreCards');
const viewMoreBtn=document.getElementById('viewMoreBtn');
moreCards.addEventListener('show.bs.collaps',function(){
    viewMoreBtn.innerHTML='View Less <i class="fa-solid fa-arrow-up"></i>';
})
moreCards.addEventListener('hidden.bs.collaps',function(){
    viewMoreBtn.innerHTML='View More <i class="fa-solid fa-arrow-up"></i>';
})

