
const closeImg = document.getElementById("close");
const imgSlider = document.getElementById("img-visible");
const renderImageCenter = document.getElementById("renderImageCenter");
const previousImg = document.getElementById("previous");
const nextImg = document.getElementById("next");


closeImg.addEventListener('click', ()=>{
    imgSlider.style.display = "none"
})

function createImg(){
    let imagesContainer = document.querySelector(".container");
    for(let i = 10; i<=95;i++){
        let img = document.createElement('img');
        img.src = `https://picsum.photos/id/${i}/200/150`;
        img.id = `${i}`;
        img.onclick = ()=>{
            renderImg(img.id)
        }
        imagesContainer.appendChild(img);
    }
}

function changeImg(images,direction){
    let counter = parseInt(images);
    if(direction == "previous"){
        counter--;
        if(counter < 10){
            counter = 95;
        }
    }else if(direction == "next"){
        counter++;
        if(counter > 95){
            counter = 10;
        }
    }
    let newImg = document.getElementById(counter);
    renderImageCenter.src = newImg.getAttribute("src");
    previousImg.onclick = ()=>{
        changeImg(newImg.id, 'previous')
    }
    nextImg.onclick = () => {
        changeImg(newImg.id,"next")
    }
}

function renderImg(imgId){
    let location = document.getElementById(imgId).getAttribute('src');
    renderImageCenter.src = location;
    imgSlider.style.display = 'flex';
    previousImg.onclick = () =>{
        changeImg(imgId, "previous")
    }
    nextImg.onclick = ()=>{
        changeImg(imgId, "next")
    }
}
createImg()