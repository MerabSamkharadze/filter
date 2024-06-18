"use strict";
const members = document.getElementById("members");
const asyncCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("can not fetch data");
    const dataResponse = await response.json();

    createLists(dataResponse);
  } catch (error) {
    const errorText = document.createElement("h1");
    errorText.innerText = "server problem";
    document.body.appendChild(errorText);
  }
};

asyncCall();

function createLists(data) {
  console.log(data);
  let fragment = new DocumentFragment();
  data.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.title;
    fragment.appendChild(li);
  });
  members.appendChild(fragment);
}
