function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to load skill.html content into #skills section
function loadSkill() {
  fetch("skills.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("skills-content").innerHTML = data;
      })
      .catch(error => console.error('Error loading skills.html:', error));
}
