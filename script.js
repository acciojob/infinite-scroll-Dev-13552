//your code here!

const list = document.getElementById("infi-list");
let count = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count}`;
    list.appendChild(li);
    count++;
  }
}

// Add 10 items initially
addItems(10);

// Scroll event to detect bottom
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items when bottom reached
    addItems(2);
  }
});
