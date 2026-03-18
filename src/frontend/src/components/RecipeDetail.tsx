import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ChefHat,
  Clock,
  Download,
  Flame,
  RefreshCw,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { VEG_STATUS } from "../data/vegStatus";
import { FssaiIcon } from "./VegIcon";

import type { Recipe } from "../backend.d";

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

const CATEGORY_FALLBACK: Record<string, string> = {
  Breakfast: "/assets/generated/recipe-kanchipuram-idli.dim_600x400.jpg",
  Lunch: "/assets/generated/recipe-paneer-majestic.dim_600x400.jpg",
  Dinner: "/assets/generated/recipe-biryani.dim_600x400.jpg",
  Dessert: "/assets/generated/recipe-kulfi.dim_600x400.jpg",
  Beverages: "/assets/generated/recipe-mango-lassi.dim_600x400.jpg",
  "Salads & Accompaniments":
    "/assets/generated/recipe-indian-summer-salad.dim_600x400.jpg",
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
  onViewAlternates: () => void;
}

function downloadRecipeTxt(recipe: Recipe) {
  const lines: string[] = [
    recipe.title,
    `Category: ${recipe.category} | Serves: ${recipe.servings ?? "N/A"} | Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime}`,
    "",
    "Description:",
    recipe.description,
    "",
    "Ingredients:",
    ...recipe.ingredients.map((i) => `- ${i}`),
    "",
    "Instructions:",
    ...recipe.steps.map((s, idx) => `${idx + 1}. ${s}`),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${recipe.title.replace(/[^a-z0-9]/gi, "_")}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export function RecipeDetail({
  recipe,
  onBack,
  onViewAlternates,
}: RecipeDetailProps) {
  const imgSrc =
    RECIPE_IMAGES[Number(recipe.id)] ??
    CATEGORY_FALLBACK[recipe.category] ??
    "/assets/generated/recipe-biryani.dim_600x400.jpg";
  const categoryColor =
    CATEGORY_COLORS[recipe.category] ??
    "bg-muted text-muted-foreground border-border";

  const hasAlternates = recipe.alternates && recipe.alternates.length > 0;

  const [liveCooking, setLiveCooking] = useState(false);
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggleIngredient = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleToggleLiveCooking = () => {
    setLiveCooking((v) => !v);
    if (liveCooking) {
      setChecked({});
    }
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const totalIngredients = recipe.ingredients.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight flex items-start gap-2">
              <span className="mt-1 shrink-0">
                <FssaiIcon
                  isVeg={VEG_STATUS[Number(recipe.id)] ?? true}
                  size={24}
                />
              </span>
              <span>{recipe.title}</span>
            </h1>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
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
          {recipe.servings != null && (
            <span
              className="flex items-center gap-2"
              data-ocid="recipe.servings"
            >
              <Users className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">Serves:</strong>{" "}
                {recipe.servings}
              </span>
            </span>
          )}
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <Button
              data-ocid="recipe.secondary_button"
              variant="outline"
              size="sm"
              onClick={() => downloadRecipeTxt(recipe)}
              className="text-xs gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Download className="w-3 h-3" />
              Download Recipe
            </Button>
            {hasAlternates && (
              <Button
                data-ocid="recipe.alternates.toggle"
                variant="outline"
                size="sm"
                onClick={onViewAlternates}
                className="text-xs gap-1.5 border-orange-300 text-orange-700 hover:bg-orange-50"
              >
                <RefreshCw className="w-3 h-3" />
                View Alternates
              </Button>
            )}
            <Button
              data-ocid="recipe.live_cooking"
              variant={liveCooking ? "default" : "outline"}
              size="sm"
              onClick={handleToggleLiveCooking}
              className={`text-xs gap-1.5 ${
                liveCooking
                  ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                  : "border-red-300 text-red-600 hover:bg-red-50"
              }`}
            >
              <Flame className="w-3 h-3" />
              {liveCooking ? "Exit Live Cooking" : "Live Cooking"}
            </Button>
          </div>
        </div>

        {/* Live Cooking progress bar */}
        {liveCooking && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 flex items-center gap-4"
          >
            <Flame className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-red-700 mb-1">
                Live Cooking Mode — tick each ingredient as you add it
              </p>
              <div className="h-2 rounded-full bg-red-100 overflow-hidden">
                <motion.div
                  className="h-full bg-red-400 rounded-full"
                  animate={{
                    width: `${totalIngredients === 0 ? 0 : Math.round((checkedCount / totalIngredients) * 100)}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <span className="text-xs font-mono text-red-600 flex-shrink-0">
              {checkedCount}/{totalIngredients}
            </span>
          </motion.div>
        )}

        <p className="text-base text-muted-foreground leading-relaxed mb-8 font-body italic border-l-4 border-primary/30 pl-4">
          {recipe.description}
        </p>

        <Separator className="mb-8" />

        <div className="grid md:grid-cols-5 gap-8">
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
                  {liveCooking ? (
                    <Checkbox
                      id={`ing-${i}`}
                      checked={!!checked[i]}
                      onCheckedChange={() => toggleIngredient(i)}
                      className="mt-0.5 flex-shrink-0 border-red-400 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                    />
                  ) : (
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  )}
                  <label
                    htmlFor={liveCooking ? `ing-${i}` : undefined}
                    className={`leading-relaxed transition-all duration-200 ${
                      liveCooking ? "cursor-pointer select-none" : ""
                    } ${
                      checked[i]
                        ? "line-through text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {ingredient}
                  </label>
                </li>
              ))}
            </ul>
          </section>

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

          {recipe.tips && recipe.tips.length > 0 && (
            <section className="mt-8" aria-label="Tips">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💡</span>
                  <h2 className="text-lg font-semibold text-amber-900">Tips</h2>
                </div>
                <ul className="space-y-2">
                  {recipe.tips.map((tip) => (
                    <li key={tip} className="flex gap-2 text-sm text-amber-800">
                      <span className="mt-0.5 text-amber-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
    </motion.div>
  );
}
