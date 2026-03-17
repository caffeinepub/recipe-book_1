import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ChefHat,
  Clock,
  RefreshCw,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const imgSrc = CATEGORY_IMAGES[recipe.category] ?? CATEGORY_IMAGES.Dinner;
  const categoryColor =
    CATEGORY_COLORS[recipe.category] ??
    "bg-muted text-muted-foreground border-border";

  const [showAlternates, setShowAlternates] = useState(false);
  const hasAlternates = recipe.alternates && recipe.alternates.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Back button */}
      <div className="mb-6">
        <Button
          data-ocid="recipe.button"
          variant="ghost"
          onClick={onBack}
          className="gap-2 text-muted-foreground hover:text-foreground -ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Hero image */}
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-card-hover">
          <img
            src={imgSrc}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${categoryColor}`}
            >
              {recipe.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              {recipe.title}
            </h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              <strong className="text-foreground">Prep:</strong>{" "}
              {recipe.prepTime}
            </span>
          </span>
          <span className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-primary" />
            <span>
              <strong className="text-foreground">Cook:</strong>{" "}
              {recipe.cookTime}
            </span>
          </span>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-8 font-body italic border-l-4 border-primary/30 pl-4">
          {recipe.description}
        </p>

        <Separator className="mb-8" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Ingredients */}
          <section className="md:col-span-2" aria-label="Ingredients">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-semibold">
                Ingredients
              </h2>
            </div>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, i) => (
                <li
                  key={`ingredient-${i}-${ingredient.slice(0, 10)}`}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className="md:col-span-3" aria-label="Instructions">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-semibold">
                Instructions
              </h2>
            </div>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li
                  key={`step-${i}-${step.slice(0, 10)}`}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold font-display">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Alternates Section */}
        {hasAlternates && (
          <>
            <Separator className="my-8" />
            <section aria-label="Ingredient Alternates">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-orange-500" />
                  <h2 className="font-display text-xl font-semibold">
                    Alternates
                  </h2>
                  <Badge variant="secondary" className="text-xs">
                    Indian Kitchen Friendly
                  </Badge>
                </div>
                <Button
                  data-ocid="recipe.alternates.toggle"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAlternates((v) => !v)}
                  className="text-xs gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  {showAlternates ? "Hide" : "Show"} Alternates
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Can't find an ingredient or it's too costly? Here are easy
                substitutes commonly available in Indian homes and local
                markets.
              </p>

              {showAlternates && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {(recipe.alternates ?? []).map((alt, i) => (
                    <div
                      key={`alt-${alt.original.slice(0, 15)}`}
                      data-ocid={`recipe.alternates.item.${i + 1}`}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-foreground line-through decoration-orange-400">
                          {alt.original}
                        </span>
                        <span className="text-orange-500 font-bold text-sm">
                          →
                        </span>
                        <span className="text-sm font-semibold text-orange-700">
                          {alt.alternate}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {alt.reason}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </section>
          </>
        )}
      </div>
    </motion.div>
  );
}
