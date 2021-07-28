// Below One Is Example Of Click Event

function toggle() {
    let btn = document.getElementById(`btn`);
    let para = document.getElementById(`para`);

    if (para.style.display != `none`) {
        para.style.display = `none`;
    }
    else {

        para.style.display = `block`;
    }

    
}

para.addEventListener(`mouseover`, function mousein(){
    // alert(`Mouse Inside`);
     console.log(`Mouse Inside The Para`);
});

para.addEventListener(`mouseout`, function mouseout(){
    // alert(`Mouse Outside`);
     console.log(`Mouse Outside The Para`);
});