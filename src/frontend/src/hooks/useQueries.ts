import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllRecipes() {
  const { actor, isFetching } = useActor();
  return useQuery<Recipe[]>({
    queryKey: ["recipes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRecipes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRecipeById(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Recipe | null>({
    queryKey: ["recipe", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getRecipeById(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useSearchRecipes(term: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Recipe[]>({
    queryKey: ["recipes", "search", term],
    queryFn: async () => {
      if (!actor) return [];
      if (!term.trim()) return actor.getAllRecipes();
      return actor.searchRecipes(term);
    },
    enabled: !!actor && !isFetching,
  });
}
