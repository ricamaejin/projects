document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".recipe-cards");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Handle tab classes
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Handle tab content visibility
      sections.forEach(section => {
        if (section.id === tab.dataset.target) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    });
  });

  // Profile form toggle
  const editBtn = document.getElementById("editBtn");
  const form = document.getElementById("profileForm");
  const display = document.getElementById("profileDisplay");
  const cancelBtn = document.getElementById("cancelBtn");

  editBtn.addEventListener("click", () => {
    form.classList.add("active");
    display.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    form.classList.remove("active");
    display.style.display = "block";
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("displayName").textContent = form.inputName.value;
    document.getElementById("displayEmail").textContent = form.inputEmail.value;
    document.getElementById("displayBio").textContent = form.inputBio.value;
    document.getElementById("profilePic").src = form.inputPic.value;
    form.classList.remove("active");
    display.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".recipe-cards");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      sections.forEach(section => {
        section.classList.toggle("active", section.id === tab.dataset.target);
      });
    });
  });

  const editBtn = document.getElementById("editBtn");
  const form = document.getElementById("profileForm");
  const display = document.getElementById("profileDisplay");
  const cancelBtn = document.getElementById("cancelBtn");

  // Load from localStorage
  const savedProfile = JSON.parse(localStorage.getItem("profile"));
  if (savedProfile) {
    document.getElementById("displayName").textContent = savedProfile.name;
    document.getElementById("displayEmail").textContent = savedProfile.email;
    document.getElementById("displayBio").textContent = savedProfile.bio;
    document.getElementById("profilePic").src = savedProfile.pic;

    form.inputName.value = savedProfile.name;
    form.inputEmail.value = savedProfile.email;
    form.inputBio.value = savedProfile.bio;
    form.inputPic.value = savedProfile.pic;
  }

  editBtn.addEventListener("click", () => {
    form.classList.add("active");
    display.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    form.classList.remove("active");
    display.style.display = "block";
  });

  form.addEventListener("submit", e => {
    e.preventDefault();

    const profileData = {
      name: form.inputName.value,
      email: form.inputEmail.value,
      bio: form.inputBio.value,
      pic: form.inputPic.value
    };

    document.getElementById("displayName").textContent = profileData.name;
    document.getElementById("displayEmail").textContent = profileData.email;
    document.getElementById("displayBio").textContent = profileData.bio;
    document.getElementById("profilePic").src = profileData.pic;

    localStorage.setItem("profile", JSON.stringify(profileData));

    form.classList.remove("active");
    display.style.display = "block";
  });
});
