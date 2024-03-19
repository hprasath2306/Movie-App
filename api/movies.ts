export const TopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJiYjBiYzk4ZjEyNDEwZmMyYjM2YzQ2NzQzNmI4NCIsInN1YiI6IjY1ZjhlODk2MzkxYjljMDE3YmM4MTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_C6BnAGKy-OCeQWPJRMrbqaj7pYp-vBfiPvV8-z2SU",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.results;
  } catch (err) {
    console.error(err);
  }
};
