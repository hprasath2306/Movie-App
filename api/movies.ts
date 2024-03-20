const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJiYjBiYzk4ZjEyNDEwZmMyYjM2YzQ2NzQzNmI4NCIsInN1YiI6IjY1ZjhlODk2MzkxYjljMDE3YmM4MTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_C6BnAGKy-OCeQWPJRMrbqaj7pYp-vBfiPvV8-z2SU",
}


export const TopRatedMovies = async (page:number) => {
  const url =
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.results;
  } catch (err) {
    console.error(err);
  }
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }

};



