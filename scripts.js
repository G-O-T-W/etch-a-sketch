// debugger function
function log(message) {
    console.log(message);
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
            addListener(pixel);
            sketchspace.appendChild(pixel);
        }
    }  
}

function addListener(pixel) {
    pixel.addEventListener("mouseover", () => {
        // Randomize the color of pixels
        r_rgb = Math.round(Math.random()*256);
        b_rgb = Math.round(Math.random()*256);
        g_rgb = Math.round(Math.random()*256);
        pixel.style["background-color"] = `rgb(${r_rgb}, ${g_rgb}, ${b_rgb})`;
    }); 
}

function changeGridSize() {
    // Removing previous grid first before adding new one
    const sketchspace = document.querySelector("div.sketchspace");
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        sketchspace.removeChild(pixel);
    });
    // Add new grid
    sizeOfGrid = parseInt(prompt("Enter the size of the grid: "));
    createGrid(sizeOfGrid);
}

function resetGrid() {
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "white";
    });
}

const sizebtn = document.querySelector("button.sizebtn");
const resetbtn = document.querySelector("button.resetbtn");
let sizeOfGrid = parseInt(prompt("Enter the size of the grid: "));
createGrid(sizeOfGrid);

sizebtn.addEventListener("click", changeGridSize);

resetbtn.addEventListener("click", resetGrid);

