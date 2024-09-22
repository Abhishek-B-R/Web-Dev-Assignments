function addInputs(x){
    const div = document.getElementById(x + "1");
    const title = x + "Title";
    const desc = x + "Desc";
    div.innerHTML = `
        <p>Title:  <input id="${title}" type="text"></p>
        <p>Description:  <input id="${desc}" type="text"></p>
        <button onclick="addTask('${x}')">Submit</button>
    `;
}

function addTask(x){
    const div = document.getElementById(x + "2");
    const title = document.getElementById(x + "Title").value;
    const desc = document.getElementById(x + "Desc").value;
    const taskId = Date.now(); // unique ID for each task

    div.innerHTML += `
        <div style="background-color: rgb(219, 217, 217);" id="task-${taskId}" class="task" draggable="true" ondragstart="drag(event)">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    `;

    document.getElementById(x + "1").innerHTML = "";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const task = document.getElementById(data);
    const dropZone = ev.target.closest('.dropzone').querySelector('div[id$="2"]');
    dropZone.prepend(task);
}