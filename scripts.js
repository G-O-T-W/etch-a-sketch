// debugger function
function log(message) {
    console.log(message);
}

function addListener(pixel) {
    log(pixel);
    pixel.addEventListener("mouseover", (e) => {
        pixel.setAttribute("style", "background-color: black;")
    });
}

function createGrid(num) {
    if (!(num < 100)) {
        alert("Grid Size is too large! Keep it below 100.");
    } else {
        const sketchspace = document.querySelector("div.sketchspace");
        // pixelSize is size of sketchspace divided by number of pixels
        const pixelSize = 480.0 / num;
        // total number of pixels is num * num
        for (let i = 0; i < num * num; i++) {
            let pixel = document.createElement("div");
            pixel.classList.toggle("pixel");
            pixel.setAttribute("style", `height: ${pixelSize}px; 
                                width: ${pixelSize}px;`);
            pixel.addEventListener("mouseover", () => {
                pixel.style["background-color"] = "black";
            });
            sketchspace.appendChild(pixel);
        }
    }  
}

const sizebtn = document.querySelector("button.sizebtn");
const resetbtn = document.querySelector("button.resetbtn");
let sizeOfGrid = parseInt(prompt("Enter the size of the grid: "));
createGrid(sizeOfGrid);


resetbtn.addEventListener("click", () => {
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "white";
    });
});