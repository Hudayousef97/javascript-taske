var form = document.getElementById("mobForm");
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    //Prevent Form Submission
    event.preventDefault();

    let nameValue = document.querySelector("input[name='useName']").value;
    let selectValue = document.querySelector("select[name='typeNameD']").value;
    //create object to store the data
    let device = { name: nameValue, type: selectValue };

    let devices = JSON.parse(localStorage.getItem("devices")) || [];
    devices.push(device);


    localStorage.setItem("devices", JSON.stringify(devices));

    updateTable();
}

function updateTable() {
    let devices = JSON.parse(localStorage.getItem("devices")) || [];
    let tableBody = document.getElementById("boadTa");
    tableBody.innerHTML = ' ';


    devices.forEach(device => {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        let typeCell = document.createElement('td');

        nameCell.textContent = device.name;
        typeCell.textContent = device.type;

        row.appendChild(nameCell);
        row.appendChild(typeCell);
        tableBody.appendChild(row);

    });
}
let clearDataBtn = document.getElementById("clearDataBtn");
clearDataBtn.addEventListener("click", handleClearData);


function handleClearData() {
localStorage.removeItem("devices");
updateTable();
}
updateTable();