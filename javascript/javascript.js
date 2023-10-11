const content = document.querySelector(`#container`);

function createGrid(size){
content.style.width = 12 * size + "px";
for(let i = 0; i < (size * size); i++){
    const gridRow = document.createElement(`div`)
    content.appendChild(gridRow);
    gridRow.classList.add(`row`)
}
}
 createGrid(100)


