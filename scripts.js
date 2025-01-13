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
        log(pixel.getAttribute("style"));
        sketchspace.appendChild(pixel);
    }
}

// const sketchspace() {}
createGrid(16);
