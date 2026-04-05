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
