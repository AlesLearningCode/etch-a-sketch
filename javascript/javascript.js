const content = document.querySelector(`#container`);
const btn = document.querySelector(`button`)
let size;
let trailStart;

    function createGrid(size){
        for(let i = 0; i < (size * size); i++){
            gridRow = document.createElement(`div`);
            content.appendChild(gridRow);
            gridRow.classList.add(`row`)  
            gridRow.style.height = `${959 / size}px`;  
            gridRow.style.width = `${959 / size}px`;   
    }
}
    

    btn.addEventListener(`click`, () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
})    



    btn.addEventListener(`click`, () =>{
        size = prompt("Enter a grid dimensions that's in range 0 to 100")
        while(size >= 100 || size < 0){
        size = prompt("Enter a grid dimensions that's in range 0 to 100");
    }
        createGrid(size);
        let pen = document.querySelectorAll(".row");
        console.log(pen)
        pen.forEach((i) => {
            i.addEventListener('mousedown', () =>{
                i.style.backgroundColor="black"
                trailStart = true;
            });   
            i.addEventListener(`mouseup`, () => {
                trailStart = false;
            })
            i.addEventListener(`mouseover`, () =>{
                if(trailStart === true){
                i.style.backgroundColor="black"
                }
            });    
        });
});

