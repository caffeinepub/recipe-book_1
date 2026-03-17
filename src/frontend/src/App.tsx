import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookOpen, ChefHat, Search } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import type { Recipe } from "./backend.d";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetail } from "./components/RecipeDetail";
import { SAMPLE_RECIPES } from "./data/sampleRecipes";
import { useGetAllRecipes } from "./hooks/useQueries";

const queryClient = new QueryClient();

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

// Build a lookup map of alternates by recipe id from sample data
const SAMPLE_ALTERNATES = new Map(
  SAMPLE_RECIPES.map((r) => [r.id.toString(), r.alternates ?? []]),
);

function RecipeApp() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const { data: backendRecipes, isLoading } = useGetAllRecipes();

  const allRecipes: Recipe[] = useMemo(() => {
    const recipes: Recipe[] =
      Array.isArray(backendRecipes) && backendRecipes.length > 0
        ? backendRecipes
        : SAMPLE_RECIPES;
    // Merge alternates from sample data if backend doesn't have them
    return recipes.map((r) => ({
      ...r,
      alternates: r.alternates?.length
        ? r.alternates
        : (SAMPLE_ALTERNATES.get(r.id.toString()) ?? []),
    }));
  }, [backendRecipes]);

  const filteredRecipes = useMemo(() => {
    let results = allRecipes;
    if (activeCategory !== "All") {
      results = results.filter((r) => r.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q),
      );
    }
    return results;
  }, [allRecipes, activeCategory, search]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => setSelectedRecipe(null)}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            aria-label="Go to recipe list"
          >
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              The Recipe Book
            </span>
          </button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ChefHat className="w-3.5 h-3.5" />
            <span>8 recipes</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {selectedRecipe ? (
            <div key="detail" className="container max-w-6xl mx-auto px-4 py-8">
              <RecipeDetail
                recipe={selectedRecipe}
                onBack={() => setSelectedRecipe(null)}
              />
            </div>
          ) : (
            <div key="list">
              {/* Hero banner */}
              <div className="relative h-56 md:h-72 overflow-hidden grain-overlay">
                <img
                  src="/assets/generated/recipe-hero.dim_1200x400.jpg"
                  alt="Recipe Book"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white/70 text-sm font-body uppercase tracking-widest mb-2">
                    A curated collection
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                    The Recipe Book
                  </h1>
                  <p className="text-white/80 text-base max-w-md font-body">
                    Timeless recipes, thoughtfully crafted for everyday cooking
                    and special occasions.
                  </p>
                </div>
              </div>

              {/* Filters */}
              <div className="container max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                  {/* Search */}
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      data-ocid="recipe.search_input"
                      placeholder="Search recipes…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9 bg-card border-border"
                    />
                  </div>

                  {/* Category tabs */}
                  <Tabs
                    value={activeCategory}
                    onValueChange={setActiveCategory}
                  >
                    <TabsList className="bg-muted">
                      {CATEGORIES.map((cat) => (
                        <TabsTrigger
                          key={cat}
                          value={cat}
                          data-ocid="recipe.tab"
                          className="text-xs font-medium"
                        >
                          {cat}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Recipe grid */}
                {isLoading ? (
                  <div
                    data-ocid="recipe.loading_state"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                  >
                    {SKELETON_KEYS.map((k) => (
                      <div key={k} className="rounded-2xl overflow-hidden">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-5 space-y-3">
                          <Skeleton className="h-5 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-2/3" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredRecipes.length === 0 ? (
                  <div
                    data-ocid="recipe.empty_state"
                    className="text-center py-20"
                  >
                    <div className="text-4xl mb-4">🍽️</div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      No recipes found
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Try adjusting your search or changing the category filter.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredRecipes.map((recipe, i) => (
                      <RecipeCard
                        key={recipe.id.toString()}
                        recipe={recipe}
                        index={i + 1}
                        onClick={setSelectedRecipe}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Recipe Book</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border bg-muted text-xs font-mono">
              📄 Data source: XML
            </span>
          </div>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipeApp />
    </QueryClientProvider>
  );
}
