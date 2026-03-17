import { Bookmark, Clock, Heart } from "lucide-react";
import { motion } from "motion/react";
import type { Recipe } from "../backend.d";

// Per-recipe image map keyed by recipe ID (as number)
const RECIPE_IMAGES: Record<number, string> = {
  2: "/assets/generated/recipe-french-omelette.dim_600x400.jpg",
  20: "/assets/generated/recipe-kanchipuram-idli.dim_600x400.jpg",
  21: "/assets/generated/recipe-corn-appe.dim_600x400.jpg",
  22: "/assets/generated/recipe-cheesy-thalipeeth.dim_600x400.jpg",
  3: "/assets/generated/recipe-carbonara.dim_600x400.jpg",
  23: "/assets/generated/recipe-paneer-majestic.dim_600x400.jpg",
  24: "/assets/generated/recipe-dahi-kadhi.dim_600x400.jpg",
  25: "/assets/generated/recipe-batata-matar-kofta.dim_600x400.jpg",
  5: "/assets/generated/recipe-rack-of-lamb.dim_600x400.jpg",
  26: "/assets/generated/recipe-biryani.dim_600x400.jpg",
  27: "/assets/generated/recipe-thai-green-curry.dim_600x400.jpg",
  28: "/assets/generated/recipe-hakka-noodles.dim_600x400.jpg",
  7: "/assets/generated/recipe-chocolate-lava-cake.dim_600x400.jpg",
  29: "/assets/generated/recipe-kulfi.dim_600x400.jpg",
  30: "/assets/generated/recipe-shrikhand.dim_600x400.jpg",
  31: "/assets/generated/recipe-ice-cream-sizzler.dim_600x400.jpg",
  10: "/assets/generated/recipe-mango-lassi.dim_600x400.jpg",
  32: "/assets/generated/recipe-cold-coffee.dim_600x400.jpg",
  33: "/assets/generated/recipe-strawberry-refresher.dim_600x400.jpg",
  34: "/assets/generated/recipe-neer-mor.dim_600x400.jpg",
  13: "/assets/generated/recipe-moong-salad.dim_600x400.jpg",
  35: "/assets/generated/recipe-watermelon-salad.dim_600x400.jpg",
  36: "/assets/generated/recipe-waldorf-salad.dim_600x400.jpg",
  37: "/assets/generated/recipe-indian-summer-salad.dim_600x400.jpg",
  16: "/assets/generated/recipe-boondi-raita.dim_600x400.jpg",
  38: "/assets/generated/recipe-kimchi.dim_600x400.jpg",
  39: "/assets/generated/recipe-kairi-salsa.dim_600x400.jpg",
};

const CATEGORY_COLORS: Record<string, string> = {
  Breakfast: "bg-amber-100 text-amber-800 border-amber-200",
  Lunch: "bg-green-100 text-green-800 border-green-200",
  Dinner: "bg-rose-100 text-rose-800 border-rose-200",
  Dessert: "bg-purple-100 text-purple-800 border-purple-200",
  Beverages: "bg-sky-100 text-sky-800 border-sky-200",
  "Salads & Accompaniments": "bg-lime-100 text-lime-800 border-lime-200",
};

// Fallback images by category
const CATEGORY_FALLBACK: Record<string, string> = {
  Breakfast: "/assets/generated/recipe-kanchipuram-idli.dim_600x400.jpg",
  Lunch: "/assets/generated/recipe-paneer-majestic.dim_600x400.jpg",
  Dinner: "/assets/generated/recipe-biryani.dim_600x400.jpg",
  Dessert: "/assets/generated/recipe-kulfi.dim_600x400.jpg",
  Beverages: "/assets/generated/recipe-mango-lassi.dim_600x400.jpg",
  "Salads & Accompaniments":
    "/assets/generated/recipe-indian-summer-salad.dim_600x400.jpg",
};

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  onClick: (recipe: Recipe) => void;
  showBookmark?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: (e: React.MouseEvent) => void;
  showFavorite?: boolean;
  isFavorited?: boolean;
  onToggleFavorite?: (e: React.MouseEvent) => void;
}

export function RecipeCard({
  recipe,
  index,
  onClick,
  showBookmark = false,
  isBookmarked = false,
  onToggleBookmark,
  showFavorite = false,
  isFavorited = false,
  onToggleFavorite,
}: RecipeCardProps) {
  const recipeId = Number(recipe.id);
  const imgSrc =
    RECIPE_IMAGES[recipeId] ??
    CATEGORY_FALLBACK[recipe.category] ??
    "/assets/generated/recipe-biryani.dim_600x400.jpg";
  const categoryColor =
    CATEGORY_COLORS[recipe.category] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <motion.button
      type="button"
      data-ocid={`recipe.item.${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
      className="group cursor-pointer text-left w-full"
      onClick={() => onClick(recipe)}
      aria-label={`View recipe: ${recipe.title}`}
    >
      <div className="recipe-card-hover bg-card rounded-2xl overflow-hidden shadow-card">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imgSrc}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColor}`}
          >
            {recipe.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg leading-tight text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {recipe.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {recipe.description}
          </p>

          {/* Times + action icons row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Prep: {recipe.prepTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Cook: {recipe.cookTime}</span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              {showFavorite && (
                <button
                  type="button"
                  data-ocid={`recipe.toggle_fav.${index}`}
                  aria-label={
                    isFavorited ? "Remove from favorites" : "Add to favorites"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite?.(e);
                  }}
                  className={`p-1.5 rounded-full transition-all duration-200 hover:scale-110 ${
                    isFavorited
                      ? "text-red-500"
                      : "text-muted-foreground hover:text-red-500"
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isFavorited ? "currentColor" : "none"}
                    strokeWidth={2}
                  />
                </button>
              )}

              {showBookmark && (
                <button
                  type="button"
                  data-ocid={`recipe.toggle.${index}`}
                  aria-label={
                    isBookmarked ? "Remove bookmark" : "Bookmark recipe"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark?.(e);
                  }}
                  className={`p-1.5 rounded-full transition-all duration-200 hover:scale-110 ${
                    isBookmarked
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Bookmark
                    className="w-4 h-4"
                    fill={isBookmarked ? "currentColor" : "none"}
                    strokeWidth={2}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
