import axios from "axios";

const LANGUAGE = "en-US"; // ISO-639-1-ISO-3166-1 code
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTA5MGQ0OGMyZjEyMTk0NWJlMjc1Y2ZlMTc1NmU4MCIsInN1YiI6IjY1ZTYyNDFiMjBlNmE1MDE4NjU1YTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YrYvIuBMGea-_5G6MOXGRCXr9nBDyol7mFVxjRSUIZc";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

const tmdbAPI = {
  posterImagePath: IMAGE_PATH,

  getTrendingMovies: async function (timeWindow = "day", language = "") {
    // timeWindow === 'day' || timeWindow === 'week'
    const response = await axios.get(`/3/trending/movie/${timeWindow}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data.results;
  },

  getMovieDetais: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieReviews: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}/reviews`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieCast: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}/credits`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMoviesByQuery: async function (query, language = "") {
    const response = await axios.get(`/3/search/movie`, {
      params: { query, language: language || LANGUAGE, include_adult: false },
    });
    return response.data.results;
  },
};

export default tmdbAPI;
