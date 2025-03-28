import { useQuery } from "@tanstack/react-query";
import { apiFetch, ErrorReason, throwError } from "../../api/base";
import { MovieResultsList, movieResultsListSchema } from "@/api/schemas/movieSchema";

const fetchMovieResultsList = async (query: string, page: number) => {
  const response = await apiFetch<MovieResultsList>(`search/movie?query=${query}&page=${page}`);
  const parsedResponse = movieResultsListSchema.safeParse(response);
  return parsedResponse.success ? parsedResponse.data : throwError('invalid-response');
};

export const useMovieResultsList = (query: string, page: number = 1) => {
  return useQuery<MovieResultsList, ErrorReason>({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovieResultsList(query, page),
    enabled: query.length > 0,
  });
};
