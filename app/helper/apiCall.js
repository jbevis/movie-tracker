export const fetchMovies = () => {
  const movieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=de2f6f839f875c177539f24f874dc62e&language=en-US&page=1`

  fetch(movieApi)
  .then((resp) => {
    return resp.json()
  })
  .then((moviesJSON) => {
    return cleaner(moviesJSON)
  })
}
