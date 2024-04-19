// Initial Data

let areas = {
    a: null,
    b: null,
    c: null
}

// Events

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach((drag) => {
    drag.addEventListener("dragover", dragOver);
    drag.addEventListener("dragleave", dragLeave);
    drag.addEventListener("drop", drop);
});

document.querySelector(".neutralArea").addEventListener("dragover", neutralAreaOver);
document.querySelector(".neutralArea").addEventListener("dragleave", neutralAreaLeave);
document.querySelector(".neutralArea").addEventListener("drop", neutralAreaDrop);

// Functions

function dragStart(event) {
    event.currentTarget.classList.add("dragging");
}

function dragEnd(event) {   
    event.currentTarget.classList.remove("dragging");
}

function dragOver(event) {      
    if(event.currentTarget.querySelector(".item") === null) {
        event.preventDefault();
        event.currentTarget.classList.add("hover"); 
    }    
}

function dragLeave(event) {
    event.currentTarget.classList.remove("hover");

}

function drop(event) {
    event.currentTarget.classList.remove("hover");
    
    if(event.currentTarget.querySelector(".item") === null) {
        const dragItem = document.querySelector(".item.dragging");
        event.currentTarget.appendChild(dragItem);
        updateAreas();
    }
   
}

function neutralAreaOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add("hover");  
}

function neutralAreaLeave(event) {
    event.currentTarget.classList.remove("hover");
}

function neutralAreaDrop(event) {
    event.currentTarget.classList.remove("hover");
    const dragItem = document.querySelector(".item.dragging");
    event.currentTarget.appendChild(dragItem);
    updateAreas();
}

// Logic functions 

function updateAreas() {
    document.querySelectorAll(".area").forEach((area) => {
        let name = area.getAttribute("data-name");

        if(area.querySelector(".item") !== null) {
            areas[name] = area.querySelector(".item").innerHTML;
        } else {
            areas[name] = null
        }
    });

    if(areas.a === "1" && areas.b === "2" && areas.c === "3") {
        document.querySelector(".areas").classList.add("correct");
    } else {
        document.querySelector(".areas").classList.remove("correct");
    }
}
