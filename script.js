
const path = document.querySelector(".path");
const length = path.getTotalLength();
const path_box=document.getElementsByClassName(".path_box");
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
        console.log("stop!");
    } else if (drawLength < 0) {
        wheelLength = 0;
        path.style.strokeDashoffset = 0;
        
    } else if (drawLength > length) {
        wheelLength = length;
        path.style.strokeDashoffset = length;
        
    }
}

window.addEventListener('wheel', drawSvg, { passive: false });

document.addEventListener('DOMContentLoaded', function () {
    var scene = document.querySelector('.parallax-container');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
      hoverOnly: true,
    });
  });
