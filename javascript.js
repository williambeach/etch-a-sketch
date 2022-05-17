function add16X16Grids() {
    container = document.getElementById("container");
    width = (576 / 16);
    height = (576 / 16);
    for (let i = 0; i < 256; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add("grid");
        childDiv.style.width = `${width}px`;
        childDiv.style.height = `${height}px`;
        container.append(childDiv);
    }
}



function addCustomGrids(value) {
    container = document.getElementById("container");
    container.innerHTML = "";
    width = (576 / value);
    height = (576 / value);
    totalSquares = value * value;
    for (let i = 0; i < totalSquares; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add("grid");
        childDiv.style.width = `${width}px`;
        childDiv.style.height = `${height}px`;
        container.append(childDiv);
    }
}

function popUpWindow() {
    Swal.fire({
        title: 'How many grids per side?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Number of grids',
        inputAttributes: {
          min: 16,
          max: 100,
          step: 1
        }
    }).then((result) => {
        if (result.value) {
            addCustomGrids(result.value);
        }
    });
}

function gridButtonClicked() {
    gridButton = document.getElementById("gridButton");
    gridButton.addEventListener("click", popUpWindow);
}


add16X16Grids();
gridButtonClicked();