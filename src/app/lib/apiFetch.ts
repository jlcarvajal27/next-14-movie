import { Movies, ServerParams, SingleMovie } from "../types.d";

interface ApiFetch {
  getMovies: ({ searchParams }: ServerParams) => Promise<Movies>;
  getMovie: (id: string) => Promise<SingleMovie>;
}

const { BASE_URL, TMDB_TOKEN } = process.env;

const apiConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
  cache: "no-store",
};

const apiFetch: ApiFetch = {
  getMovies: async ({ searchParams }) => {
    const buildUrl = new URL(`${BASE_URL}`);
    const buildParams = new URLSearchParams("");

    if (searchParams.page) {
      buildParams.set("page", searchParams.page);
    }

    if (searchParams.query) {
      buildParams.set("query", searchParams.query);
      buildUrl.pathname = buildUrl.pathname + "/search/movie";
    } else {
      buildUrl.pathname = buildUrl.pathname + "/movie/popular";
    }
    try {
      const fetchMovies = await fetch(`${buildUrl}?${buildParams}`, apiConfig);
      if (fetchMovies.status !== 200) throw new Error("error fetching tmdb");

      const result: Movies = await fetchMovies.json();

      return result;
    } catch (error) {
      console.log(error);
      return {} as Movies;
    }
  },
  getMovie: async (id) => {
    try {
      const getMovie = await fetch(`${BASE_URL}/movie/${id}`, apiConfig);
      if (getMovie.status !== 200) throw new Error("error fetching tmdb");

      const result: SingleMovie = await getMovie.json();
      return result;
    } catch (error) {
      console.log(error);
      return {} as SingleMovie;
    }
  },
};

export default apiFetch;
