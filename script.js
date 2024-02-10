const toggleBtn = document.querySelector('.toggle');
const toggleBtnIcon = document.querySelector('.toggle i');
const dropDown = document.querySelector('.dropdown');
dropDown.classList.remove('open');
toggleBtn.onclick= function() {
  
    dropDown.classList.toggle('open');
    const isOpen=dropDown.classList.contains('open');

    toggleBtnIcon.classList= isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


let modebtn= document.querySelector("#mode");
let body=document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click",() => {
    console.log("trying to change mode");
})

modebtn.addEventListener("click",() => {
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebtn.innerText="Light mode";
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn.innerText="Dark mode";
    }

    console.log(currMode);
})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}