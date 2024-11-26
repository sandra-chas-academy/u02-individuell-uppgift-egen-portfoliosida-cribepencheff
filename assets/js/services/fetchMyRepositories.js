const username = "cribepencheff";
const loader = document.getElementById("loader");

loader.classList.remove("hide");

async function fetchMyRepositories() {
  const url = `https://api.github.com/users/${username}/repos`;
  const minLoadingTime = new Promise(resolve => setTimeout(resolve, 2500));

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    await minLoadingTime;
    loader.classList.add("hide");
    return data;

  } catch (error) {
    const errorString = `<p class="error">An error occurred while getting projects.</p>`;
    loader.classList.add("hide");
    loader.insertAdjacentHTML('beforebegin', errorString);

    console.error("Failed to fetch my repositories:", error);
  }
}

export { fetchMyRepositories };