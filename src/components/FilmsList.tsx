import React from "react";
import { useFetch } from "../hooks/useFlims";

const FilmsList: React.FC = () => {
  const { data, error, isLoading } = useFetch("https://swapi.dev/api/films/");
  console.log({ data });

  if (isLoading) return "Loading ...";
  if (error)
    return (
      <div className="text-red-500">An error occurred: {error.message}</div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Star Wars Films</h1>
      <ul className="space-y-2">
        {data.results.map((film: any) => {
          return <li key={film.title}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilmsList;
