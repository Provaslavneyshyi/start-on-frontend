const header = document.querySelector(".header");


window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;

    if(scrollPos > 100){
        header.classList.add('shadow');
    }
    else{
        header.classList.remove('shadow');
    }

    console.log(scrollPos);
});
