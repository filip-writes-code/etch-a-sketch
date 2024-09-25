//container width and height in pixels
const containerSize = 600;

//creates a grid of squares in a container
function createGrid(resolution) {
    const container = document.querySelector('.container');
    const squareSize = (containerSize / resolution) + "px";
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";

    for (let i=1; i <= resolution * resolution; i++) {
    const square = document.createElement('div');
    square.className = "square";
    square.style.width = squareSize;
    square.style.height = squareSize;
    container.appendChild(square);
    }
}

//generates a random rgb color
function randomColor () {
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
return `rgb(${r}, ${g}, ${b})`;
}

//event listener for hovering over squares
const container = document.querySelector('.container');
container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomColor();
})


createGrid(16);