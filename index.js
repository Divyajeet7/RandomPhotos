const imageContainerElement =  document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < 10; index++) {
        const newImgElement = document.createElement("img");
        newImgElement.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerElement.appendChild(newImgElement);        
    };  
};