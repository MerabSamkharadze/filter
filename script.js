"use strict";
const asyncCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("can not fetch data");
    const dataResponse = await response.json();
    console.log(dataResponse);
    return dataResponse;
  } catch (error) {
    const errorText = document.createElement("h1");
    errorText.innerText = "server problem";
    document.body.appendChild(errorText);
  }
};

asyncCall();
