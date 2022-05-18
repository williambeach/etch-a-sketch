function add16X16Grids() {
    container = document.getElementById("container");
    width = (750 / 16);
    height = (500 / 16);
    for (let i = 0; i < 256; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add("grid");
        childDiv.style.width = `${width}px`;
        childDiv.style.height = `${height}px`;
        container.append(childDiv);
    }
    grid = document.querySelectorAll(".grid");
    for (let i=0; i<grid.length;i++) {
        grid[i].addEventListener("mouseover", () => {
            button = document.querySelector("#rainbowMode");
            if (button.value == "OFF") {
                grid[i].style.backgroundColor = "black";
            } else {
                randomColor = randomHsl();
                grid[i].style.backgroundColor = randomColor;
            }
        });
    }
}


function addCustomGrids(value) {
    container = document.getElementById("container");
    container.innerHTML = "";
    width = (750 / value);
    height = (500 / value);
    totalSquares = value * value;
    for (let i = 0; i < totalSquares; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add("grid");
        childDiv.style.width = `${width}px`;
        childDiv.style.height = `${height}px`;
        container.append(childDiv);
    }
    grid = document.querySelectorAll(".grid");
    for (let i=0; i<grid.length;i++) {
        grid[i].addEventListener("mouseover", () => {
            button = document.querySelector("#rainbowMode");
            if (button.value == "OFF") {
                grid[i].style.backgroundColor = "black";
            } else {
                randomColor = randomHsl();
                grid[i].style.backgroundColor = randomColor;
            }
        });
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

function toggle(button) {
    if (button.value == "OFF") {
      button.value = "ON";
      button.textContent = "Ink";
    } else {
      button.value = "OFF";
      button.textContent = "Rainbow";
    }
  }


function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}






add16X16Grids();
gridButtonClicked();
