const moreCards=document.getElementById('moreCards');
const viewMoreBtn=document.getElementById('viewMoreBtn');
moreCards.addEventListener('show.bs.collapse',function(){
    viewMoreBtn.innerHTML='View Less <i class="fa-solid fa-arrow-up"></i>';
})
moreCards.addEventListener('hidden.bs.collapse',function(){
    viewMoreBtn.innerHTML='View More <i class="fa-solid fa-arrow-right"></i>';
})

