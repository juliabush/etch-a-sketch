// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// const div4 = document.createElement("div");
// const div5 = document.createElement("div");
// const div6 = document.createElement("div");
// const div7 = document.createElement("div");
// const div8 = document.createElement("div");
// const div9 = document.createElement("div");
// const div10 = document.createElement("div");
// const div11 = document.createElement("div");
// const div12 = document.createElement("div");
// const div13 = document.createElement("div");
// const div14 = document.createElement("div");
// const div15 = document.createElement("div");
// const div16 = document.createElement("div");

// const containerDiv = document.getElementById("container-div");

// Here is a more concise way of doing what i just did above

const containerDiv = document.getElementById("container-div");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  containerDiv.appendChild(div);
  div.addEventListener("click", () => {
    div.classList.add("visible");
  });
}
