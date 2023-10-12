const content = document.querySelector(`#container`);
const btn = document.querySelector(`button`)
let size;
let clicked;
let secondClick

    function createGrid(size){
        for(let i = 0; i < (size * size); i++){
            gridRow = document.createElement(`div`);
            content.appendChild(gridRow);
            gridRow.classList.add(`row`)  
            gridRow.style.height = `${960 / size}px`;  
            gridRow.style.width = `${960 / size}px`;   
    }
}
    
    

    btn.addEventListener(`dblclick`, () =>{
        size = prompt("Enter a size of grid")
        createGrid(size)
        let pen = document.querySelectorAll(".row");
        console.log(pen.length)
        /*let again = document.querySelectorAll(".row")[0]
        while(content.again)
        content.removeChild(again)*/
        
        pen.forEach((i) => {
            i.addEventListener('mousedown', () =>{
                i.style.backgroundColor="green"
                clicked = true;
            });   
            i.addEventListener(`mouseup`, () => {
                clicked = false;
            })
            i.addEventListener(`mouseover`, () =>{
                if(clicked === true){
                i.style.backgroundColor="green"
                }
            });    
        });
    });


    btn.addEventListener(`click`, () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    })    