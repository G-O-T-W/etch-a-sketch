// debugger function
function log(message) {
    console.log(message);
}

function createGrid(num) {
    const sketchspace = document.querySelector("div.sketchspace");
    // pixelSize is size of sketchspace divided by number of pixels
    const pixelSize = 472.0 / num;
    // total number of pixels is num * num
    for (let i = 0; i < num * num; i++) {
        const pixel = document.createElement("div");
        pixel.classList.toggle("pixel");
        pixel.setAttribute("style", `height: ${pixelSize}px; width: ${pixelSize}px; border: 1px solid red;`);
        sketchspace.appendChild(pixel);
    }
}

// const sketchspace() {}

createGrid(4);

const pixels = document.querySelectorAll("div.pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
        log(e.target);
    })
});