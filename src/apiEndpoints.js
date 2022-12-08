const apiKey = process.env.REACT_APP_API_KEY;

const apiEndpoints = {
    popularTvShows:`tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    topRatedTvShows:`tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    tvShowGenresList:`genre/tv/list?api_key=${apiKey}&language=en-US`,
    topRatedMovies:`movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    currentPopularMovies:`movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    nowPlayingMovies:`movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
    upcomingMovies:`movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    imageBaseURL:'https://image.tmdb.org/t/p/original',
}

export default apiEndpoints;