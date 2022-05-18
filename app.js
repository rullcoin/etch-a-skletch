const container = document.querySelector(".grid-div")
const grid = document.getElementById("grid")
const defaultSize = 16
const maxWidth = 600;

let slider = document.getElementById("myRange")
let output = document.getElementById("output")
output.innerHTML = defaultSize

let currentSize = defaultSize

// Returns random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }

// Sets new main size
function setCurrentSize(newSize) {
    currentSize = newSize
}

// Function to change size and reload grid
function changeSize(value) {
    setCurrentSize(value)
    reloadGrid()
}

// Clears grid
function clearGrid() {
    grid.innerHTML = ""
}

// Function to reload grid and set a new grid.
function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
}

// Changes grid size and outputs current size
slider.oninput = (e) => {
    changeSize(e.target.value)
    output.innerHTML = e.target.value
}

// Function needed to create grid
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const col = document.createElement("div")
        col.className = 'grid'
    
        for (let j = 0; j < size; j++) {
            const row = document.createElement("div")
            row.className = 'box'
            // row.style.border = "1px solid black"
    
    
            //Change color on mouse over
            row.addEventListener("mouseover", function() {
                row.style.backgroundColor = getRandomColor()
            })
            col.appendChild(row)
        }
        container.appendChild(col)
    

        // Create size of div
        const boxes = document.getElementsByClassName("box")
        for (k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / size + "px"
            boxes[k].style.height = maxWidth / size + "px" 
        }
    
    }
}

btn = document.getElementById("clear-button")

btn.addEventListener("click", reloadGrid)

// Sets up main grid value
window.onload = () => {
    createGrid(defaultSize)
}

