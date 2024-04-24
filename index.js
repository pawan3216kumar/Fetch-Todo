let container = document.querySelector("#cont");
let load = document.querySelector("#fetch");

function getData(URL) {
  fetch(URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      showData(res);
    });
}

function showData(arr) {
  container.innerHTML = "";
  console.log(arr);
  arr.forEach(function (ele) {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerHTML = ele.title;

  
    let checkbox = document.createElement("input");
    checkbox.checked = ele.completed && true
    checkbox.type = "checkbox";

    let status = document.createElement("p")
    status.innerHTML = ele.completed;


    div.append(title, checkbox);
    container.append(div);
  });
}

function fetchTodod() {
  getData("https://jsonplaceholder.typicode.com/todos");
}

load.addEventListener("click", fetchTodod);
