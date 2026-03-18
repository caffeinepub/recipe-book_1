import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BookOpen,
  Bookmark,
  ChefHat,
  Heart,
  LogIn,
  LogOut,
  Search,
  User,
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { Recipe } from "./backend.d";
import { AlternatesPage } from "./components/AlternatesPage";
import { BookmarksPage } from "./components/BookmarksPage";
import { FavoritesPage } from "./components/FavoritesPage";
import { LoginPage } from "./components/LoginPage";
import { ProfilePage } from "./components/ProfilePage";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetail } from "./components/RecipeDetail";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BookmarkProvider, useBookmarks } from "./context/BookmarkContext";
import { FavoriteProvider, useFavorites } from "./context/FavoriteContext";
import { SAMPLE_RECIPES } from "./data/sampleRecipes";
import { useGetAllRecipes } from "./hooks/useQueries";

const queryClient = new QueryClient();

const CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Beverages",
  "Salads & Accompaniments",
];
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

// Build a lookup map of alternates by recipe id from sample data
const SAMPLE_ALTERNATES = new Map(
  SAMPLE_RECIPES.map((r) => [r.id.toString(), r.alternates ?? []]),
);

type Page =
  | "list"
  | "detail"
  | "alternates"
  | "login"
  | "profile"
  | "bookmarks"
  | "favorites";

function RecipeApp() {
  const { user, logout } = useAuth();
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { toggleFavorite, isFavorited } = useFavorites();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [page, setPage] = useState<Page>("list");

  // Scroll to top on every page change
  // biome-ignore lint/correctness/useExhaustiveDependencies: page is the intentional trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const { data: backendRecipes, isLoading } = useGetAllRecipes();

  const allRecipes: Recipe[] = useMemo(() => {
    const recipes: Recipe[] =
      Array.isArray(backendRecipes) && backendRecipes.length > 0
        ? backendRecipes
        : SAMPLE_RECIPES;
    return recipes.map((r) => ({
      ...r,
      alternates: r.alternates?.length
        ? r.alternates
        : (SAMPLE_ALTERNATES.get(r.id.toString()) ?? []),
    }));
  }, [backendRecipes]);

  const filteredRecipes = useMemo(() => {
    let results = allRecipes;
    if (activeCategory === "Salads & Accompaniments") {
      results = results.filter(
        (r) => r.category === "Salads" || r.category === "Accompaniments",
      );
    } else if (activeCategory !== "All") {
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

  // Split salads & accompaniments for the divider view
  const saladRecipes = useMemo(
    () =>
      activeCategory === "Salads & Accompaniments" && !search.trim()
        ? allRecipes.filter((r) => r.category === "Salads")
        : null,
    [allRecipes, activeCategory, search],
  );

  const accompanimentRecipes = useMemo(
    () =>
      activeCategory === "Salads & Accompaniments" && !search.trim()
        ? allRecipes.filter((r) => r.category === "Accompaniments")
        : null,
    [allRecipes, activeCategory, search],
  );

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setPage("detail");
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
    setPage("list");
  };

  const totalRecipes = allRecipes.length;

  const renderRecipeCard = (recipe: Recipe, i: number) => (
    <RecipeCard
      key={recipe.id.toString()}
      recipe={recipe}
      index={i + 1}
      onClick={handleSelectRecipe}
      showBookmark={!!user}
      isBookmarked={isBookmarked(recipe.id.toString())}
      onToggleBookmark={(e) => {
        e.stopPropagation();
        toggleBookmark(recipe.id.toString());
      }}
      showFavorite={!!user}
      isFavorited={isFavorited(recipe.id.toString())}
      onToggleFavorite={(e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id.toString());
      }}
    />
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Book icon with dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  data-ocid="nav.open_modal_button"
                  className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Open menu"
                >
                  <BookOpen className="w-4 h-4 text-primary-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                {!user ? (
                  <DropdownMenuItem
                    onClick={() => setPage("login")}
                    className="gap-2 cursor-pointer"
                    data-ocid="nav.link"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem
                      onClick={() => setPage("profile")}
                      className="gap-2 cursor-pointer"
                      data-ocid="nav.link"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setPage("bookmarks")}
                      className="gap-2 cursor-pointer"
                      data-ocid="nav.link"
                    >
                      <Bookmark className="w-4 h-4" />
                      Bookmarks
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setPage("favorites")}
                      className="gap-2 cursor-pointer"
                      data-ocid="nav.link"
                    >
                      <Heart className="w-4 h-4 text-red-500" />
                      Favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        logout();
                        handleBackToList();
                      }}
                      className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                      data-ocid="nav.link"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Title — navigates home */}
            <button
              type="button"
              data-ocid="nav.link"
              onClick={handleBackToList}
              className="font-display font-bold text-xl text-foreground hover:opacity-80 transition-opacity"
              aria-label="Go to recipe list"
            >
              The Curated Kitchen
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {user && (
              <span className="flex items-center gap-1.5 text-xs font-medium text-primary mr-2">
                <User className="w-3.5 h-3.5" />
                {user.name}
              </span>
            )}
            <ChefHat className="w-3.5 h-3.5" />
            <span>{totalRecipes} recipes</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {page === "login" ? (
            <div key="login">
              <LoginPage
                onLoginSuccess={() => setPage("list")}
                onBack={handleBackToList}
              />
            </div>
          ) : page === "profile" ? (
            <div key="profile">
              <ProfilePage
                onBack={handleBackToList}
                onGoToLogin={() => setPage("login")}
              />
            </div>
          ) : page === "bookmarks" ? (
            <div key="bookmarks">
              <BookmarksPage
                allRecipes={allRecipes}
                onSelectRecipe={handleSelectRecipe}
                onBack={handleBackToList}
              />
            </div>
          ) : page === "favorites" ? (
            <div key="favorites">
              <FavoritesPage
                allRecipes={allRecipes}
                onSelectRecipe={handleSelectRecipe}
                onBack={handleBackToList}
              />
            </div>
          ) : page === "alternates" && selectedRecipe ? (
            <div
              key="alternates"
              className="container max-w-6xl mx-auto px-4 py-8"
            >
              <AlternatesPage
                recipe={selectedRecipe}
                onBack={() => setPage("detail")}
              />
            </div>
          ) : page === "detail" && selectedRecipe ? (
            <div key="detail" className="container max-w-6xl mx-auto px-4 py-8">
              <RecipeDetail
                recipe={selectedRecipe}
                onBack={handleBackToList}
                onViewAlternates={() => setPage("alternates")}
              />
            </div>
          ) : (
            <div key="list">
              {/* Hero banner */}
              <div className="relative h-56 md:h-72 overflow-hidden grain-overlay">
                <img
                  src="/assets/generated/recipe-hero.dim_1200x400.jpg"
                  alt="The Curated Kitchen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white/70 text-sm font-body uppercase tracking-widest mb-2">
                    A curated collection
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                    The Curated Kitchen
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
                ) : saladRecipes !== null && accompanimentRecipes !== null ? (
                  // Split view: Salads first, then divider, then Accompaniments
                  <div className="space-y-6">
                    {saladRecipes.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {saladRecipes.map((recipe, i) =>
                          renderRecipeCard(recipe, i),
                        )}
                      </div>
                    )}

                    {/* Tangy Companions Divider */}
                    <div className="flex items-center gap-4 py-2">
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-base font-medium text-muted-foreground tracking-wide whitespace-nowrap">
                        🥒 — Tangy Companions —
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>

                    {accompanimentRecipes.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {accompanimentRecipes.map((recipe, i) =>
                          renderRecipeCard(recipe, i),
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredRecipes.map((recipe, i) =>
                      renderRecipeCard(recipe, i),
                    )}
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
            <span>© {new Date().getFullYear()} The Curated Kitchen</span>
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
      <AuthProvider>
        <FavoriteProvider>
          <BookmarkProvider>
            <RecipeApp />
          </BookmarkProvider>
        </FavoriteProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
