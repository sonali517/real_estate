let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
}

let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}







// ================= counter js ========================

import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js'


function countStart(){
    const $counters = document.querySelectorAll(".counter"),
          options = {
            useEasing: true,
            useGrouping: true,
            separator: ",",
            decimal: "."
          };
  
    $counters.forEach( (item) => {
      const value = parseInt(item.dataset.target); // Parse the target value as an integer
      const counter = new CountUp(item, value, options);
      counter.start();
    });
  }
  
  // Call countStart() function when the 'level' section is reached
  new Waypoint({
    element: document.querySelector('.sect'),
    handler: function() {
      countStart();
    //   this.destroy(); // Destroy the waypoint after it's triggered once
    },
    offset: '50%'
  });

  

  // =========================== slider event and news============================
  window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
    const slideWidth = slides[0].clientWidth;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


  //=============== form alert=========================
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // This prevents the form from submitting and refreshing the page
    alert("Thank you for your enquiry!");
    form.reset();
  });
  