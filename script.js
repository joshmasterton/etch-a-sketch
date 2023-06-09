function createGrid(gridSize)
{
    const gridCon = document.createElement("div");
    gridCon.id = "gridCon";
    gridCon.style.display = "grid";
    gridCon.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridCon.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    document.body.appendChild(gridCon);
    for(let i = 0; i < gridSize * gridSize; i++)
    {
        const gridElement = document.createElement("button");
        gridElement.style.width = "25px";
        gridElement.style.height = "25px";
        gridElement.addEventListener("mousemove", () => 
        {
            gridElement.style.background = "rgb(30, 30, 30)";
        });
        gridCon.appendChild(gridElement);
    };
};

function resetButton()
{
    const changeGridBtn = document.createElement("button");
    changeGridBtn.innerHTML = "change grid size";
    changeGridBtn.addEventListener("click", () => 
    {
        while(document.body.lastElementChild)
        {
            document.body.removeChild(document.body.lastElementChild);
        };
        gridSize = getGridSize();
        resetButton();
        createGrid(gridSize);
        clearButton();
    });    
    document.body.appendChild(changeGridBtn);
};

function clearButton()
{
    const clearBtn = document.createElement("button");
    clearBtn.innerHTML = "clear";
    clearBtn.addEventListener("click", () => 
    {
        while(document.body.lastElementChild)
        {
            document.body.removeChild(document.body.lastElementChild);
        };
        resetButton();
        createGrid(gridSize);
        clearButton();
    });
    document.body.appendChild(clearBtn);
};

function getGridSize()
{
    let isMax = false;
    while(!isMax)
    {
        let gridSize = parseInt(prompt("grid size?"));
        if(gridSize > 20)
        {
            alert("too big");
        }
        else
        {
            isMax = true;
            return gridSize;        
        }    
    }
};

let gridSize = 14;
resetButton();
createGrid(gridSize);
clearButton();
