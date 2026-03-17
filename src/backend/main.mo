import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Array "mo:core/Array";

actor {
  type Recipe = {
    id : Nat;
    title : Text;
    category : Text;
    description : Text;
    ingredients : [Text];
    steps : [Text];
    prepTime : Text;
    cookTime : Text;
  };

  module Recipe {
    public func compareById(recipe1 : Recipe, recipe2 : Recipe) : Order.Order {
      Nat.compare(recipe1.id, recipe2.id);
    };
  };

  let recipes = Map.empty<Nat, Recipe>();

  public shared ({ caller }) func seedSampleData() : async () {
    if (recipes.size() > 0) { Runtime.trap("Recipes already seeded!") };

    let sampleRecipes : [Recipe] = [
      {
        id = 1;
        title = "Pancakes";
        category = "Breakfast";
        description = "Fluffy pancakes perfect for breakfast.";
        ingredients = ["Flour", "Eggs", "Milk", "Baking Powder", "Sugar"];
        steps = ["Mix dry ingredients", "Add wet ingredients", "Cook on skillet"];
        prepTime = "10 min";
        cookTime = "15 min";
      },
      {
        id = 2;
        title = "Chicken Caesar Salad";
        category = "Lunch";
        description = "Classic salad with grilled chicken.";
        ingredients = ["Chicken breast", "Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing"];
        steps = ["Grill chicken", "Chop lettuce", "Mix ingredients"];
        prepTime = "20 min";
        cookTime = "10 min";
      },
      {
        id = 3;
        title = "Spaghetti Bolognese";
        category = "Dinner";
        description = "Italian pasta dish with meat sauce.";
        ingredients = ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic"];
        steps = ["Cook pasta", "Prepare sauce", "Combine and simmer"];
        prepTime = "15 min";
        cookTime = "30 min";
      },
      {
        id = 4;
        title = "Chocolate Chip Cookies";
        category = "Dessert";
        description = "Classic homemade cookies.";
        ingredients = ["Flour", "Sugar", "Butter", "Chocolate chips", "Eggs"];
        steps = ["Mix ingredients", "Shape cookies", "Bake"];
        prepTime = "15 min";
        cookTime = "12 min";
      },
      {
        id = 5;
        title = "Omelette";
        category = "Breakfast";
        description = "Egg-based dish with your choice of fillings.";
        ingredients = ["Eggs", "Cheese", "Ham", "Vegetables"];
        steps = ["Beat eggs", "Add fillings", "Cook in pan"];
        prepTime = "5 min";
        cookTime = "10 min";
      },
      {
        id = 6;
        title = "Turkey Sandwich";
        category = "Lunch";
        description = "Quick and easy sandwich.";
        ingredients = ["Bread", "Turkey slices", "Lettuce", "Tomato", "Mayonnaise"];
        steps = ["Assemble ingredients", "Serve"];
        prepTime = "5 min";
        cookTime = "0 min";
      },
      {
        id = 7;
        title = "Grilled Salmon";
        category = "Dinner";
        description = "Healthy grilled fish with herbs.";
        ingredients = ["Salmon fillets", "Lemon", "Herbs", "Olive oil"];
        steps = ["Season salmon", "Grill until cooked"];
        prepTime = "10 min";
        cookTime = "15 min";
      },
      {
        id = 8;
        title = "Fruit Salad";
        category = "Dessert";
        description = "Refreshing mix of seasonal fruits.";
        ingredients = ["Various fruits", "Lemon juice", "Honey"];
        steps = ["Chop fruits", "Mix ingredients"];
        prepTime = "15 min";
        cookTime = "0 min";
      },
    ];

    for (recipe in sampleRecipes.values()) {
      recipes.add(recipe.id, recipe);
    };
  };

  public query ({ caller }) func getRecipeById(id : Nat) : async Recipe {
    switch (recipes.get(id)) {
      case (null) { Runtime.trap("Recipe does not exist") };
      case (?recipe) { recipe };
    };
  };

  public query ({ caller }) func getAllRecipes() : async [Recipe] {
    recipes.values().toArray().sort(Recipe.compareById);
  };

  public query ({ caller }) func searchRecipes(term : Text) : async [Recipe] {
    let results = List.empty<Recipe>();
    recipes.values().forEach(
      func(recipe) {
        if (
          recipe.title.toLower().contains(#text(term.toLower())) or
          recipe.category.toLower().contains(#text(term.toLower()))
        ) {
          results.add(recipe);
        };
      }
    );
    results.toArray();
  };
};
