//container width and height in pixels
const containerSize = 600;

//creates a grid of squares in a container
function createGrid(resolution) {
    const container = document.querySelector('.container');
    container.innerHTML = "";
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

// event listener for the resolution button
const resolutionBtn = document.querySelector('.resolution');
resolutionBtn.addEventListener("click", (e) => {
    let userInput = prompt("How many squares per side would you like? Max - 100");
    userInput = Number (userInput);
    if (Number.isInteger(userInput) && userInput >0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert ("There was an error somehwere :/")
    }
})

createGrid(4);