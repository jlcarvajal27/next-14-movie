import { FC } from "react";
import MovieList from "./components/MovieList";
import apiFetch from "./lib/apiFetch";
import { ServerParams } from "./types.d";
import Paginations from "./components/Paginations";

const Home: FC<ServerParams> = async ({ searchParams }) => {
  const getMovies = await apiFetch.getMovies({ searchParams });
  const page = searchParams.page || "1";

  return (
    <main className="md:container mx-auto pt-5">
      <h1 className="text-center font-bold text-2xl my-4"> Next Movie App </h1>

      <MovieList movies={getMovies} />
      <div className="flex flex-col items-center pb-28">
        <Paginations
          pages={getMovies.total_pages > 500 ? 500 : getMovies.total_pages}
          page={Number(page)}
        />
      </div>
    </main>
  );
};

export default Home;
