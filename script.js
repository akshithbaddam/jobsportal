var menu = document.getElementById("menu");
function closemenu () {
    document.querySelector('.js-menuitems').innerHTML = ""; 
}

function openmenu () {
    menu.style.top = "17%";
}

function generatemenu () {
document.querySelector('.js-menuitems').innerHTML = 
` <div class="container">
  <div class="menu-links">
    <a class="options" style="display: inline-block" href="#"
    onclick="closemenu(); " ><img height="40px" src="close.png"></a>
    <a class="options" style="display: inline-block" href="signuppage.html">Sign up</a> <br>
    <a class="options" style="display: inline-block" href="loginpage.html">Login</a> <br>
    <a class="options" style="display: inline-block" href="forms.html">Forms</a> <br>
    <a class="options" style="display: inline-block" href="#" >Notifications</a>  <br>
    <a class="options" style="display: inline-block" href="#">Downloads</a> <br>
    <a class="options" style="display: inline-block" href="chat.html">Chat</a>
  </div>
</div>
</div> `; }


 
 const videoSlides = document.querySelectorAll('.video-slide');
 let currentSlide = 0;
 
 function showSlide(index) {
     videoSlides[currentSlide].style.display = 'none';
     videoSlides[index].style.display = 'block';
     currentSlide = index;
 }
 
 function nextSlide() {
     if (currentSlide < videoSlides.length - 1) {
         showSlide(currentSlide + 1);
     } else {
         showSlide(0); 
     }
 }
 
 
 showSlide(0);
 
 
 setInterval(nextSlide, 5000);