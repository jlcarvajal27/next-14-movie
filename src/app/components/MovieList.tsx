import { Movies } from "../types.d";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface MovieList {
  movies: Movies;
}

const MovieList: FC<MovieList> = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const { results } = movies;
  return (
    <div className="md:grid md:grid-cols-4 gap-4 pt-4 mb-10">
      {results.length > 0 &&
        results.map((item) => (
          <Link key={item.id} href={`/movie/${item.id}`}>
            <Card
              isFooterBlurred
              className="w-full h-[300px] border dark:border-slate-500 transition ease-in-out delay-15 hover:-traslate-y-px hover:scale-110 hover:opacity-60 duration-300 cursor-pointer "
            >
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={`${baseUrl}${item.backdrop_path}`}
              />
              <CardFooter className=" items-start flex-col text-white absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <h3 className="font-bold text-large">{item.title}</h3>
                <p className="text-tiny font-bold"> {item.release_date}</p>
                <small className="font-bold">Category: Movie</small>
              </CardFooter>
            </Card>
          </Link>
        ))}
    </div>
  );
};

export default MovieList;
