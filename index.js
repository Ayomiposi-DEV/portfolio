console.log("hello");
const button = document.getElementById("btn");
const listItems = document.querySelector(".list-items");
button.addEventListener("click", function () {
	listItems.classList.toggle("active");
});
