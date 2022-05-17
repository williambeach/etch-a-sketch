function add16X16Grids() {
    container.innerHTML = "";
    container = document.getElementById("container");
    childDiv = document.createElement("div");
    for (let i = 0; i < 256; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add("grid16x16");
        container.append(childDiv);
    }
}


function addCustomGrids() {
    container.innerHTML = "";
    container = document.getElementById("container");
    childDiv = document.createElement("div");
    for (let i = 0; i < 1024; i++) {//i < userInput via popup window text input <= 100.
        childDiv = document.createElement("div");
        childDiv.classList.add("grid32x32");//style with javascript related to size inputted
        container.append(childDiv);
    }
}

add16X16Grids();
addCustomGrids();