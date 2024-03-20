export const addMovieToWatchList = async (movieId: number) => {
  const url = "https://api.themoviedb.org/3/account/21116921/watchlist";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJiYjBiYzk4ZjEyNDEwZmMyYjM2YzQ2NzQzNmI4NCIsInN1YiI6IjY1ZjhlODk2MzkxYjljMDE3YmM4MTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_C6BnAGKy-OCeQWPJRMrbqaj7pYp-vBfiPvV8-z2SU",
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      watchlist: true,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const fetchWatchlistMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/account/21116921/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc";
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
