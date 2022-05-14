const container = document.querySelector(".grid-div")

// Create 16x16 grid
for (let i = 0; i < 16; i++) {
    const col = document.createElement("div")
    col.className = 'box'

    for (let j = 0; j < 16; j++) {
        const row = document.createElement("div")
        row.className = 'box'
        row.style.border = "2px solid black"
        col.appendChild(row)
    }

    container.appendChild(col)
}
