
//assign the value of the pahe scroll height to the scrollTop variable
const handleScroll=() =>{
    const scrollTop=document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scrollTop',`${scrollTop}px`);
    // Set --root variable (scrollTop - 100vh)
    document.documentElement.style.setProperty('--scrollTop-one', `${scrollTop - window.innerHeight}px`);
    document.documentElement.style.setProperty('--scrollTop-two', `${scrollTop - 2*window.innerHeight}px`);

}
document.addEventListener('scroll',()=>{
    requestAnimationFrame(handleScroll);
});


const path = document.querySelector(".path");
const length = path.getTotalLength();
const path_box = document.querySelector(".path_box");
document.documentElement.style.setProperty("--length", length);

let wheel = 0;


function drawSvg(event) {
    let deltaY = event.deltaY;
    let wheelLength = wheel + deltaY*3;
    let drawLength = length - wheelLength;

    if (drawLength >= 0 && drawLength <= length) {
        wheel = wheelLength;
        path.style.strokeDashoffset = drawLength;
        
        event.preventDefault()
        // console.log("stop!");
    } else if (drawLength < 0) {
        wheelLength = 0;
        path.style.strokeDashoffset = 0;
        
    } else if (drawLength > length) {
        wheelLength = length;
        path.style.strokeDashoffset = length;
        
    }
}


function enableDrawing() {
    window.addEventListener('wheel', drawSvg, { passive: false });
}

function disableDrawing() {
    window.removeEventListener('wheel', drawSvg);
}

path_box.addEventListener('mouseenter', enableDrawing);
path_box.addEventListener('mouseleave', disableDrawing);



document.addEventListener('DOMContentLoaded', function () {
    // Get the layers container
    const layersContainer = document.querySelector('#firefly-container');

    // Get all firefly images
    const fireflies = document.querySelectorAll('.fireflies');

    // Function to generate a random position within a specified range
    function getRandomPosition(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Loop through each firefly and set a random position
    fireflies.forEach(firefly => {
        // Specify the range for X and Y positions (adjust as needed)
        const minX = 0;
        const maxX = layersContainer.clientWidth - firefly.clientWidth;
        const minY = 0;
        const maxY = layersContainer.clientHeight - firefly.clientHeight;

        // Set the firefly's position
        firefly.style.left = getRandomPosition(minX, maxX) + 'px';
        firefly.style.top = getRandomPosition(minY, maxY) + 'px';

    });
});


document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('#firefly-container');
    const fireflies = [];

    // Add fireflies dynamically
    for (let i = 0; i < 10; i++) {
      createFirefly();
    }

    function createFirefly() {
      const firefly = document.createElement('img');
      firefly.src = './img/firefly-1.png'; 
      firefly.classList.add('firefly');
      background.appendChild(firefly);
  
      // Randomize position within the background
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      firefly.style.left = posX + 'px';
      firefly.style.top = posY + 'px';
  
      // Randomize size and opacity
      const size = Math.random() * 20 + 10;
      const opacity = Math.random() * 0.5 + 0.5;
      firefly.style.width = size + 'px';
      firefly.style.opacity = opacity;
  
      // Apply noise effect using CSS3 transform
      const noiseOffsetX = Math.random() * 10 - 5;
      const noiseOffsetY = Math.random() * 10 - 5;
      firefly.style.transform = `translate(${noiseOffsetX}px, ${noiseOffsetY}px)`;
      
      // Store the firefly in the array
      fireflies.push(firefly);
    }

    // Function to toggle visibility with a flickering effect
    function toggleVisibility() {
      fireflies.forEach(firefly => {
        const isVisible = Math.random() > 0.3; // Adjust the threshold as needed
        firefly.style.visibility = isVisible ? 'visible' : 'hidden';
      });
    }

    // Set interval to toggle visibility every 500 milliseconds (adjust as needed)
    setInterval(toggleVisibility, 500);
});
