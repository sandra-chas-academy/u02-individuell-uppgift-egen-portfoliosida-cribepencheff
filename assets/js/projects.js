import { fetchJSON } from "./services/fetchJSON.js";
import { fetchMyRepositories } from "./services/fetchMyRepos.js";

const projectsList = document.getElementById("projects");
const localProjects = await fetchJSON("./assets/data/cristian_pencheff_projects.json");

console.log("FETCH: ", localProjects);

async function displayProjects() {
  const myRepositories = await fetchMyRepositories();
  const reposWithLangs = localProjects;
  const filteredRepos = myRepositories.filter(repo => repo.homepage);

  for (const repo of filteredRepos) {
    try {
      const languagesResponse = await fetch(repo.languages_url);
      const languages = await languagesResponse.json();

      reposWithLangs.unshift({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        homepage: repo.homepage,
        url: repo.html_url,
        languages: Object.keys(languages).join(", "),
      });

      console.log(reposWithLangs);
    } catch (error) {
      console.error(`Failed to fetch languages for ${repo.name}:`, error);
    }
  }

  reposWithLangs.forEach(item => {
    const project = document.createElement("article");
    project.classList.add("project");

    project.innerHTML = `
      <a href="${item.homepage}" target="_blank" rel="noopener noreferrer" class="project-repo">
        <img class="project-image" src="./assets/img/projects/project-${item.id}.jpg" alt="${item.name} Image">
      </a>
      <div class="project-content">
        <h3 class="project-title">${item.name}</h3>
        <p class="project-description">${item.description}</p>
        <p class="project-tech-stack">
          Tech stack : <span>${item.languages}</span>
        </p>

        <div class="project-footer">
          <a href="${item.homepage}" target="_blank" rel="noopener noreferrer" class="project-url">
            <i class="fa-solid fa-link"></i> <span>Live Preview</span>
          </a>
          ${item.url ? `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="project-repo">
              <i class="fa-brands fa-github-alt"></i> <span>View Code</span>
            </a>
            ` : ''}
        </div>
      </div>`;

      projectsList.appendChild(project);
  })
}

displayProjects()
