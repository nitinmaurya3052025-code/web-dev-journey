let msg = document.getElementById("message");

// document.getElementById("btn").onclick = function () {
//   if (msg.innerText == "Hello") {
//     msg.innerText = "Clicked!";
//     msg.style.color = "red";
//   } else {
//     msg.innerText = "Hello";
//     msg.style.color = "green";
//   }
// };
document.getElementById("btn").addEventListener("click", function () {
  if (msg.innerText == "Hello") {
    msg.innerText = "Clicked!";
    msg.style.color = "red";
  } else {
    msg.innerText = "Hello";
    msg.style.color = "green";
  }
});
// input.addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     let name = input.value;

//     if (name === "") {
//       msg.innerText = "";
//     } else {
//       msg.innerText = "Hello " + name;
//     }
//   }
// });
