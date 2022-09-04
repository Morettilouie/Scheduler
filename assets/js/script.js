function createTimeBlocks() {
    var createTimeBlockDiv = document.createElement("div");
    createTimeBlockDiv.setAttribute("class", "row time-block");
    var createHourDiv = document.createElement("div");
    createHourDiv.setAttribute("class", "col-2 hour");
    createHourDiv.textContent = "hour";
    var createDescriptionDiv = document.createElement("div");
    createDescriptionDiv.setAttribute("class", "col-8 description");
    createDescriptionDiv.textContent = "description"
    var createSaveDiv = document.createElement("div");
    createSaveDiv.setAttribute("class", "col-2 save");
    createSaveDiv.textContent = "save";
    var container = document.querySelector(".container");
    container.appendChild(createTimeBlockDiv);
    createTimeBlockDiv.appendChild(createHourDiv);
    createTimeBlockDiv.appendChild(createDescriptionDiv);
    createTimeBlockDiv.appendChild(createSaveDiv);
}
createTimeBlocks()