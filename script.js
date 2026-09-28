function showMessage() {
 const message = document.getElementById("message");
 message.textContent = "JavaScript працює. Хмарний застосунок успішно запущено!";
 lightPipeline();
}

function showCloudInfo() {
 document.getElementById("cloudInfo").textContent =
 "Хмарні обчислення — модель надання обчислювальних ресурсів через мережу.";
}

// Послідовно підсвічує етапи шляху коду: Codespaces → Git → Actions → Pages
function lightPipeline() {
 const steps = document.querySelectorAll("[data-step]");
 steps.forEach(s => s.classList.remove("on"));
 steps.forEach((s, i) => setTimeout(() => s.classList.add("on"), i * 350));
}

// Ефект «закляття»: хвиля світла та іскри при натисканні кнопки
document.querySelectorAll("button").forEach(btn => {
 btn.addEventListener("click", e => {
  btn.classList.remove("cast");
  void btn.offsetWidth;
  btn.classList.add("cast");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 14; i++) {
   const ember = document.createElement("span");
   ember.className = "ember";
   ember.style.left = e.clientX + "px";
   ember.style.top = e.clientY + "px";
   ember.style.setProperty("--dx", (Math.random() * 120 - 60) + "px");
   ember.style.setProperty("--dy", (-30 - Math.random() * 90) + "px");
   document.body.appendChild(ember);
   setTimeout(() => ember.remove(), 1000);
  }
 });
});