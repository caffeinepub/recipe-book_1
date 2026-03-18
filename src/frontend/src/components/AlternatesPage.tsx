import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import type { Recipe } from "../backend.d";

interface AlternatesPageProps {
  recipe: Recipe;
  onBack: () => void;
}

export function AlternatesPage({ recipe, onBack }: AlternatesPageProps) {
  const hasAlternates = recipe.alternates && recipe.alternates.length > 0;
  const isInternational = !!recipe.cuisine;

  return (
    <motion.div
      data-ocid="alternates.page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-6">
        <Button
          data-ocid="alternates.button"
          variant="ghost"
          onClick={onBack}
          className="gap-2 text-muted-foreground hover:text-foreground -ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipe
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center">
          <RefreshCw className="w-5 h-5 text-orange-500" />
        </div>
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold leading-tight">
            Ingredient Alternates
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            {recipe.title}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mb-3 flex-wrap">
        {isInternational ? (
          <>
            <Badge
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-700 border-blue-200"
            >
              {recipe.cuisine} Recipe
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs bg-orange-100 text-orange-700 border-orange-200"
            >
              Indian Ingredient Alternatives
            </Badge>
          </>
        ) : (
          <Badge
            variant="secondary"
            className="text-xs bg-orange-100 text-orange-700 border-orange-200"
          >
            Indian Kitchen Friendly
          </Badge>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8 border-l-4 border-orange-300 pl-4">
        {isInternational
          ? `This is an authentic ${recipe.cuisine} recipe — kept exactly as it was meant to be made. The substitutes below replace hard-to-find or expensive ingredients with easily available Indian alternatives.`
          : "Can't find an ingredient or it's too costly? Here are easy substitutes commonly available in Indian homes and local markets."}
      </p>

      {hasAlternates ? (
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {(recipe.alternates ?? []).map((alt, i) => (
            <motion.div
              key={`alt-${alt.original.slice(0, 15)}`}
              data-ocid={`alternates.item.${i + 1}`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-foreground line-through decoration-orange-400">
                  {alt.original}
                </span>
                <span className="text-orange-500 font-bold text-base">→</span>
                <span className="text-sm font-bold text-orange-700">
                  {alt.alternate}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {alt.reason}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div
          data-ocid="alternates.empty_state"
          className="text-center py-20 rounded-2xl border border-dashed border-border bg-muted/30"
        >
          <div className="text-4xl mb-3">✅</div>
          <h3 className="font-display text-lg font-semibold mb-1">
            No substitutes needed
          </h3>
          <p className="text-sm text-muted-foreground">
            All ingredients in this recipe are commonly available.
          </p>
        </div>
      )}
    </motion.div>
  );
}
