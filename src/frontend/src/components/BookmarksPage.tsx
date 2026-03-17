import { ArrowLeft, Bookmark } from "lucide-react";
import { motion } from "motion/react";
import type { Recipe } from "../backend.d";
import { useBookmarks } from "../context/BookmarkContext";
import { RecipeCard } from "./RecipeCard";

interface BookmarksPageProps {
  allRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onBack: () => void;
}

export function BookmarksPage({
  allRecipes,
  onSelectRecipe,
  onBack,
}: BookmarksPageProps) {
  const { bookmarkedIds, toggleBookmark, isBookmarked } = useBookmarks();

  const bookmarkedRecipes = allRecipes.filter((r) =>
    bookmarkedIds.includes(r.id.toString()),
  );

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <button
            type="button"
            data-ocid="bookmarks.button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-primary" fill="currentColor" />
            <h1 className="font-display text-2xl font-bold text-foreground">
              My Bookmarks
            </h1>
          </div>
        </div>

        {bookmarkedRecipes.length === 0 ? (
          <div data-ocid="bookmarks.empty_state" className="text-center py-24">
            <div className="text-5xl mb-5">🔖</div>
            <h3 className="font-display text-xl font-semibold mb-2">
              No bookmarks yet
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Browse recipes and click the{" "}
              <Bookmark className="w-3.5 h-3.5 inline-block text-primary" />{" "}
              bookmark icon to save them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {bookmarkedRecipes.map((recipe, i) => (
              <RecipeCard
                key={recipe.id.toString()}
                recipe={recipe}
                index={i + 1}
                onClick={onSelectRecipe}
                showBookmark
                isBookmarked={isBookmarked(recipe.id.toString())}
                onToggleBookmark={(e) => {
                  e.stopPropagation();
                  toggleBookmark(recipe.id.toString());
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
