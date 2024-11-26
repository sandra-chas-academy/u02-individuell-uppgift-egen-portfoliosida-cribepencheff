const username = "cribepencheff";

async function fetchMyRepositories() {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;

  } catch (error) {
    console.error("Failed to fetch my repositories:", error);
  }
}

export { fetchMyRepositories };