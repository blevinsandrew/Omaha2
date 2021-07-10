//// get modal element

const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;




/////////////////modal ///////////////////
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function outsideClick(e) {
  if (e.target == modal) modal.style.display = "none";
}
//////////////sticky navbar //////////////////
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// time





function time() {
  const fullDate = new Date();
  
  
  
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = ":" + mins;
  document.getElementById("seconds").innerHTML = ":" + secs;
}






setInterval(time, 1000);

// ///////////event listeners////////////
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
