async function fetchJSON(jsonData) {
  try {
    const response = await fetch(jsonData);

    if (!response.ok) {
      throw new Error("Failed to load questions");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

export { fetchJSON }
