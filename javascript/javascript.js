const content = document.querySelector(`#container`);
const btn = document.querySelector(`button`)



function createGrid(size){
    for(let i = 0; i < (size * size); i++){
    gridRow = document.createElement(`div`);
    content.appendChild(gridRow);
    gridRow.classList.add(`row`)  
    gridRow.style.height = `${960 / size}px`;  
    gridRow.style.width = `${960 / size}px`;   
}
}



/*btn.addEventListener(`click`, () =>{
    btn = createGrid(prompt(`How big do you want your grid?`))

})*/



    let highlight = document.querySelectorAll(".row")
    highlight.forEach((i) => {
        i.addEventListener('click mouseover', () =>{
            i.style.backgroundColor="white";
        });
        i.addEventListener('mouseout', () =>{
            i.style.backgroundColor="blue";
        }); 
    });

    