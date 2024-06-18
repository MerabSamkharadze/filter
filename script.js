"use strict";
const members = document.getElementById("members");
const search = document.getElementById("search");
const membersArr = [];
let li;
const asyncCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("can not fetch data");
    const dataResponse = await response.json();

    createLists(dataResponse);
  } catch (error) {
    const errorText = document.createElement("h1");
    console.log(error);
    errorText.innerText = "server problem";
    document.body.appendChild(errorText);
  }
};

asyncCall();

function createLists(data) {
  data.forEach((element) => {
    li = document.createElement("li");
    li.classList.add("li_members");
    li.textContent = element.title;
    membersArr.push(li);
    members.appendChild(li);
  });
}
function filterItem(value) {
  membersArr.forEach((element) => {
    if (value === "") {
      element.classList.remove("active");
    } else if (element.innerText.includes(value.trim().toLowerCase())) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
search.addEventListener("keyup", function () {
  filterItem(this.value);
});
