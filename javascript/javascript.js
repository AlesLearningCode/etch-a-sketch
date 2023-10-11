const content = document.querySelector(`#container`);
let gridRow;

function createGrid(size){
content.style.width = 5 * size + "px";
for(let i = 0; i < (size * size); i++){
    gridRow = document.createElement(`div`)
    content.appendChild(gridRow);
    gridRow.classList.add(`row`)
}
}

createGrid(50)



    let highlight = document.querySelectorAll(".row")
    highlight.forEach((i) => {
        i.addEventListener('mouseover', () =>{
            i.setAttribute("style", "background-color:white;")
        });
        i.addEventListener('mouseout', () =>{
            i.setAttribute("style", "background-color:green;")
        });
    });


  


    