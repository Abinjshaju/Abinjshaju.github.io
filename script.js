
// Getting the 'nav' element by its ID
const nav = document.getElementById("nav");

// Looping through each 'a' element within the 'nav' element
for(const link of nav.getElementsByTagName("a")) {  
  // Assigning an event handler for the 'mousemove' event on each 'a' element
  link.onmousemove = e => {
    // Getting the position and dimensions of the current 'a' element
    const rect = link.getBoundingClientRect(),
          // Getting the 'img' element within the current 'a' element
          img = link.querySelector("img");
    
    // Calculating and updating the position of the 'img' element based on the mouse movement
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  }
}

// Assigning an event handler for the 'mousemove' event on the window
window.onmousemove = e => {
  // Calculating the percentage of the mouse position along the vertical axis
  const percent = e.clientY / window.innerHeight;
  
  // Animating the 'nav' element's transform property to create a vertical scrolling effect
  nav.animate({
    transform: `translateY(${percent * nav.offsetHeight * -1}px)` // Translating the 'nav' element vertically
  }, {
    fill: "forwards", // Keeps the animated style after the animation finishes
    duration: 4000 // Animation duration of 4 seconds
  })
}

