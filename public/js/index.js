window.addEventListener('scroll',function() {
    //When scroll change, you save it on localStorage.
   localStorage.setItem('scrollPosition',window.scrollY);
},false);

window.addEventListener('load',function() {
   if(localStorage.getItem('scrollPosition') !== null)
       window.scrollTo(0, localStorage.getItem('scrollPosition'));
},false);