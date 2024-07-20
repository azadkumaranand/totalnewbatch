

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let index = 0;
if(index == 0){
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'none';
}
nextBtn.addEventListener('click', function(){
    index++;
    if(index < slides.length){
        let slide = slides[index];
        slide.style.left = 0;
        let prevSlide = slides[index-1];
        prevSlide.style.left = `-${index * 100}%`;
    }
    prevBtn.style.display = 'block';
    if(index == slides.length-1){
        nextBtn.style.display = 'none';
    }
    if(index > 0 && index < slides.length-1){
        nextBtn.style.display = 'block';
    }
});

prevBtn.addEventListener('click', function(){
    index--;

    if(index<=0){
        prevBtn.style.display="none";
    }
    
    if(index>=0){
        let slide = slides[index];
        slide.style.left = 0;
        let nextSlide = slides[index+1];
        nextSlide.style.left = `${(index+1) * 100}%`;
    }
    // console.log(index);
    if(index <= slides.length-1 && index > 0 ){
        nextBtn.style.display = 'block';
    }
})