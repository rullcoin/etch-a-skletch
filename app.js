const container = document.querySelector(".grid-div")
const grid = document.getElementById("grid")


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }

const defaultSize = 16
const maxWidth = 400;

let currentSize = defaultSize

let slider = document.getElementById("myRange")

function setCurrentSize(newSize) {
    currentSize = newSize
}

function changeSize(value) {
    setCurrentSize(value)
    reloadGrid()
}

function clearGrid() {
    grid.innerHTML = ""
}

function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
}

slider.oninput = (e) => {
    console.log(e.target.value);
    changeSize(e.target.value)
}

// Create 16x16 grid
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
    
        const boxes = document.getElementsByClassName("box")
        for (k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / size + "px"
            boxes[k].style.height = maxWidth / size + "px" 
        }
    
    }
}

window.onload = () => {
    createGrid(defaultSize)
}

