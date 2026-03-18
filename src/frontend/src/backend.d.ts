import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface IngredientAlternate {
    original: string;
    alternate: string;
    reason: string;
}
export interface Recipe {
    id: bigint;
    title: string;
    cookTime: string;
    description: string;
    steps: Array<string>;
    prepTime: string;
    category: string;
    ingredients: Array<string>;
    alternates?: Array<IngredientAlternate>;
    servings?: number;
    tips?: Array<string>;
}
export interface backendInterface {
    getAllRecipes(): Promise<Array<Recipe>>;
    getRecipeById(id: bigint): Promise<Recipe>;
    searchRecipes(term: string): Promise<Array<Recipe>>;
    seedSampleData(): Promise<void>;
}
