# The Curated Kitchen

## Current State
The app has 27 recipes across Breakfast, Lunch, Dinner, Dessert, Beverages, and Salads & Accompaniments. Each recipe has id, title, category, description, prepTime, cookTime, servings, ingredients, steps, and alternates. There is no `tips` field. RecipeDetail.tsx renders ingredients and steps but no tips section.

## Requested Changes (Diff)

### Add
- `tips?: Array<string>` field to the Recipe interface in `backend.d.ts`
- Tips data (3–5 practical tips each) for all 27 recipes in `sampleRecipes.ts`
- A "Tips" section at the bottom of `RecipeDetail.tsx`, rendered after the instructions section, only if tips exist

### Modify
- `backend.d.ts`: Add `tips?: Array<string>` to Recipe interface
- `sampleRecipes.ts`: Add tips array to every recipe
- `RecipeDetail.tsx`: Render tips section below instructions

### Remove
- Nothing

## Implementation Plan
1. Update `backend.d.ts` to add `tips?: Array<string>` to Recipe interface
2. Add 3–5 practical tips to every recipe in `sampleRecipes.ts`
3. Add Tips section in `RecipeDetail.tsx` after the instructions grid, styled consistently with the rest of the detail page (lightbulb icon, warm card background)
