import { fetchJSON } from "./services/fetchJSON.js";

async function printResume() {
  const resumeData = await fetchJSON(`./assets/data/cristian_pencheff_resume.json`);
  console.log(resumeData);
}

printResume();


console.log("test")