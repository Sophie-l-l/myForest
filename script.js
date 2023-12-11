
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