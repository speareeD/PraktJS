const tableBlocks = document.querySelectorAll(".table");

tableBlocks.forEach(tableBlock => {
    const cells = tableBlock.querySelectorAll("td");

    cells.forEach((cell, i) => {
        if((i + 1) % 2 === 0) cell.classList.add("selected");
    })
})