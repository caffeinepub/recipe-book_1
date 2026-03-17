import { Clock } from "lucide-react";
import { motion } from "motion/react";
import type { Recipe } from "../backend.d";

const CATEGORY_IMAGES: Record<string, string> = {
  Breakfast: "/assets/generated/recipe-breakfast.dim_600x400.jpg",
  Lunch: "/assets/generated/recipe-lunch.dim_600x400.jpg",
  Dinner: "/assets/generated/recipe-dinner.dim_600x400.jpg",
  Dessert: "/assets/generated/recipe-dessert.dim_600x400.jpg",
};

const CATEGORY_COLORS: Record<string, string> = {
  Breakfast: "bg-amber-100 text-amber-800 border-amber-200",
  Lunch: "bg-green-100 text-green-800 border-green-200",
  Dinner: "bg-rose-100 text-rose-800 border-rose-200",
  Dessert: "bg-purple-100 text-purple-800 border-purple-200",
};

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  onClick: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, index, onClick }: RecipeCardProps) {
  const imgSrc = CATEGORY_IMAGES[recipe.category] ?? CATEGORY_IMAGES.Dinner;
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
            alt={recipe.category}
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

          {/* Times */}
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
        </div>
      </div>
    </motion.button>
  );
}
