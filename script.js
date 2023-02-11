"use strict";

//1

function getData(url) {
  let result = fetch(url);
  const titles = [];

  result
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let item of data)
        if (item.title[0] === "a") {
          titles.push(item);
        }
    });

  console.log(titles);
}

//2

async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  const titles = [];

  for (let item of data)
    if (item.title[0] === "a") {
      titles.push(item);
    }
  console.log(titles);
}

getData("https://jsonplaceholder.typicode.com/todos");

//3

const url = "https://jsonplaceholder.typicode.com/todos";
const divA = document.querySelector(".user-a");
const divAB = document.querySelector(".user-ab");

async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  let divA = document.querySelector(".user-a");
  let divAB = document.querySelector(".user-ab");
  divA.classList.add("active");
  divAB.classList.add("active");
      
  for (let item of data) {
    if (item.title[0] === "a") {
      let titleA = JSON.stringify(item) + "<br>";
      divA.innerHTML += titleA;
    }
    if (item.title[0] === "a" && item.title[1] === "b") {
      let titleAB = JSON.stringify(item) + "<br>";
      divAB.innerHTML += titleAB;
    }
  }
}

getData(url);

//4

async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  return data;
}

function showA() {
  divA.innerHTML = "";
  divA.classList.add("active");
  divAB.classList.remove("active");

  getData(url);
  let result = fetch(url);
  result
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data
        .filter((data) => data.title[0] === "a")
        .forEach((data) => {
          divA.innerHTML += JSON.stringify(data) + "<br>";
        });
    });
}

let btnA = document.querySelector(".add-a");
btnA.addEventListener("click", showA);

function showAB() {
  divAB.innerHTML = "";
  divAB.classList.add("active");
  divA.classList.remove("active");

  getData(url);
  let result = fetch(url);
  result
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data
        .filter((data) => data.title[0] === "a" && data.title[1] === "b")
        .forEach((data) => {
          divAB.innerHTML += JSON.stringify(data) + "<br>";
        });
    });
}

let btnAB = document.querySelector(".add-ab");
btnAB.addEventListener("click", showAB);

function showAll() {
  showA();
  showAB();
  divA.classList.add("active");
  divAB.classList.add("active");
}

let btnAll = document.querySelector(".add-all");
btnAll.addEventListener("click", showAll);




// let buttonA = document.createElement("button");
// buttonA.innerHTML = "Title start from A";

// let buttonAB = document.createElement("button");
// buttonAB.innerHTML = "Title start from AB";

// let buttonAll = document.createElement("button");
// buttonAll.innerHTML = "Title start from A and AB";

// let divA = document.querySelector(".user-a");
// let divAB = document.querySelector(".user-ab");
// let h2A = document.querySelectorAll("h2")[0];

// divAB.after(buttonA);
// buttonA.after(buttonAB);
// buttonAB.after(buttonAll);
