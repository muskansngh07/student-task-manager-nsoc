function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  li.appendChild(document.createTextNode(" "));

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

const cursor = document.querySelector(".cursor");
const sparkContainer = document.getElementById("spark-container");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move main cursor
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  // Create spark
  createSpark(x, y);
});

function createSpark(x, y) {
  const spark = document.createElement("div");
  spark.classList.add("spark");

  spark.style.left = x + "px";
  spark.style.top = y + "px";

  // Random slight offset for natural trail
  const offsetX = (Math.random() - 0.5) * 10;
  const offsetY = (Math.random() - 0.5) * 10;
  spark.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

  sparkContainer.appendChild(spark);

  // Remove after animation
  setTimeout(() => {
    spark.remove();
  }, 600);
}

// Click animation
document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});