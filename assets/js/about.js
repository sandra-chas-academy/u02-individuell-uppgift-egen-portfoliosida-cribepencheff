import { fetchJSON } from "./services/fetchJSON.js";

const workExperienceEl = document.getElementById("work-experience-list");
const educationEl = document.getElementById("education-list");
const showMoreWorkBtn = workExperienceEl.parentElement.querySelectorAll(".show-more")[0];

let displayLimit = 3;
let isExpanded = false;
let workExperienceData = []
let educationData = []

async function displayResume() {
  const resumeData = await fetchJSON(`./assets/data/cristian_pencheff_resume.json`);

  workExperienceData = resumeData.work_experience;
  educationData = resumeData.education;
  const workExperienceItems = workExperienceData.slice(0, displayLimit);

  /* Work Experience */
  workExperienceEl.innerHTML = "";
  workExperienceItems.forEach(item => {
    const itemEl = document.createElement("article");

    itemEl.innerHTML = `
      <h3 class="job-title">
        ${item.title}
        <span class="job-detail label">${item.detail}</span>
      </h3>
      <h4 class="job-project__title">
        <i class="fa-solid fa-building"></i>
        ${item.homepage ? `
          <a href="${item.homepage}" target="_blank" rel="noopener noreferrer">${item.workplace}</a>
          ` : item.workplace}
      </h4>
      <p class="job-project__location">
        <i class="fa-solid fa-location-dot"></i>
        ${item.location}
      </p>
      <p class="job-project__duration">
        <i class="fa-regular fa-calendar-days"></i>
        <time datetime="${item.duration}">${item.duration}</time>
      </p>
    `;

    workExperienceEl.appendChild(itemEl);
  });

  /* Education */
  educationEl.innerHTML = "";
  educationData.forEach(item => {
    const itemEl = document.createElement("article");

    itemEl.innerHTML = `
      <h3 class="education__degree">
        ${item.title}
        <span class="item-detail label">${item.detail}</span>
      </h3>
      <h4 class="education__school">
        <i class="fa-solid fa-building"></i>
        ${item.workplace}, ${item.location}
      </h4>
      <p class="education__duration">
        <i class="fa-regular fa-calendar-days"></i>
        <time datetime="${item.duration}">${item.duration}</time>
      </p>
    `;

    educationEl.appendChild(itemEl);
  });

  if (workExperienceData.length > 3) {
    showMoreWorkBtn.classList.remove("hide");
    showMoreWorkBtn.innerHTML = isExpanded ?
      `Show Less<i class="icon fa-solid fa-arrow-up"></i>` :
      `Show more<i class="icon fa-solid fa-arrow-down"></i>`;
  } else {
    showMoreWorkBtn.classList.add("hide");
  }
}

function showMoreHandler(e) {
  e.preventDefault();
  if (isExpanded) {
    displayLimit = 3;
    isExpanded = false;
  } else {
    displayLimit = workExperienceData.length;
    isExpanded = true;
  }

  displayResume();
}

displayResume();
showMoreWorkBtn.addEventListener("click", showMoreHandler);
