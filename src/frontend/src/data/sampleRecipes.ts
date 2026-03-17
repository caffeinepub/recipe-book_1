import type { Recipe } from "../backend.d";

export const SAMPLE_RECIPES: Recipe[] = [
  {
    id: BigInt(1),
    title: "Avocado Toast with Poached Eggs",
    category: "Breakfast",
    description:
      "Creamy smashed avocado on thick sourdough toast crowned with perfectly poached eggs, chili flakes, and a drizzle of extra virgin olive oil. A morning ritual worth waking up for.",
    prepTime: "10 min",
    cookTime: "8 min",
    ingredients: [
      "2 thick slices sourdough bread",
      "1 large ripe avocado",
      "2 fresh eggs",
      "1 tbsp white vinegar",
      "Juice of half a lemon",
      "Red chili flakes, to taste",
      "Sea salt and black pepper",
      "Extra virgin olive oil",
      "Fresh microgreens (optional)",
    ],
    steps: [
      "Toast the sourdough slices until golden and crisp.",
      "Halve and pit the avocado. Scoop into a bowl, add lemon juice, salt, and pepper. Mash to your preferred texture.",
      "Bring a shallow saucepan of water to a gentle simmer. Add white vinegar.",
      "Crack each egg into a small cup. Swirl the water gently and slide eggs in one at a time. Poach 3–4 minutes until whites set but yolks remain runny.",
      "Spread the smashed avocado generously over each toast slice.",
      "Lift poached eggs with a slotted spoon, dab dry, and place on top of avocado.",
      "Finish with chili flakes, a drizzle of olive oil, and microgreens if using. Serve immediately.",
    ],
    alternates: [
      {
        original: "Sourdough bread",
        alternate: "Regular sandwich bread or multigrain bread",
        reason:
          "Sourdough is not commonly available in Indian bakeries or grocery stores.",
      },
      {
        original: "Avocado",
        alternate: "Mashed banana with a pinch of salt, or thick hummus",
        reason:
          "Avocados are expensive and not easily found in most Indian markets.",
      },
      {
        original: "Extra virgin olive oil",
        alternate: "Regular refined oil or groundnut oil",
        reason:
          "Extra virgin olive oil is costly; regular cooking oil works well as a substitute.",
      },
      {
        original: "Fresh microgreens",
        alternate: "Fresh coriander leaves or mint leaves",
        reason:
          "Microgreens are rarely available in Indian markets; coriander is a common household item.",
      },
    ],
  },
  {
    id: BigInt(2),
    title: "Classic French Omelette",
    category: "Breakfast",
    description:
      "The silkiest, most luxurious omelette you'll ever make. No color, no fuss — just eggs coaxed into a pale, custard-soft roll that melts in your mouth. A fundamental technique every cook should master.",
    prepTime: "5 min",
    cookTime: "3 min",
    ingredients: [
      "3 large eggs",
      "1 tbsp cold unsalted butter, cubed",
      "1 tsp crème fraîche",
      "Fresh chives, finely chopped",
      "Fleur de sel",
      "White pepper",
    ],
    steps: [
      "Crack eggs into a bowl. Season lightly with salt and white pepper. Beat vigorously with a fork until completely smooth — no streaks of white remaining.",
      "Heat a small non-stick pan over medium-high heat until hot. Add butter and swirl until foaming subsides.",
      "Pour in eggs immediately. Shake the pan constantly while stirring with a fork in small, quick circles.",
      "As curds form and eggs begin to set but are still very wet, remove pan from heat. Continue stirring off-heat.",
      "Add crème fraîche in the center. Tilt the pan and use the fork to roll the omelette away from you.",
      "Turn onto a warm plate seam-side down. It should be pale golden with no browning.",
      "Top with chives and a pinch of fleur de sel. Serve at once.",
    ],
    alternates: [
      {
        original: "Crème fraîche",
        alternate: "Fresh malai (cream from boiled milk) or thick curd",
        reason:
          "Crème fraîche is not available in most Indian stores; malai is a natural Indian equivalent.",
      },
      {
        original: "Fresh chives",
        alternate: "Spring onion greens or fresh coriander",
        reason:
          "Chives are hard to find in India; spring onion tops are widely available and taste similar.",
      },
      {
        original: "Fleur de sel",
        alternate: "Regular table salt or sendha namak (rock salt)",
        reason:
          "Fleur de sel is a premium French salt not available in India; regular salt works perfectly.",
      },
      {
        original: "Unsalted butter",
        alternate: "Regular salted Amul butter (reduce added salt)",
        reason:
          "Unsalted butter is less common in Indian households; Amul salted butter is easily available.",
      },
    ],
  },
  {
    id: BigInt(3),
    title: "Spaghetti alla Carbonara",
    category: "Lunch",
    description:
      "The authentic Roman classic — no cream, no shortcuts. Just guanciale, eggs, Pecorino Romano, and the magic of pasta water creating a sauce of silky, emulsified perfection. This is pure Italian soul food.",
    prepTime: "10 min",
    cookTime: "20 min",
    ingredients: [
      "400g spaghetti",
      "200g guanciale (or pancetta), cut into lardons",
      "4 egg yolks + 1 whole egg",
      "100g Pecorino Romano, finely grated",
      "50g Parmigiano Reggiano, finely grated",
      "Freshly cracked black pepper, generously",
      "Sea salt for pasta water",
    ],
    steps: [
      "Bring a large pot of salted water to boil. Cook spaghetti 1 minute less than package instructions.",
      "Meanwhile, cook guanciale in a large skillet over medium heat until fat renders and edges begin to crisp. Remove from heat.",
      "Whisk egg yolks and whole egg with grated cheeses. Season generously with black pepper.",
      "Reserve 250ml pasta cooking water before draining. Drain pasta.",
      "Add hot pasta to the skillet with guanciale off the heat. Toss to coat in rendered fat.",
      "Add egg and cheese mixture, tossing rapidly. Add pasta water splash by splash, tossing continuously, until sauce is glossy and clings to each strand.",
      "Divide immediately into warm bowls. Finish with more Pecorino and a fierce crack of black pepper.",
    ],
    alternates: [
      {
        original: "Guanciale (cured pork cheek)",
        alternate: "Smoked chicken sausage or regular bacon strips",
        reason:
          "Guanciale is an Italian cured meat unavailable in India; smoked chicken sausage gives a similar savory depth.",
      },
      {
        original: "Pecorino Romano",
        alternate: "Amul processed cheese or any locally available hard cheese",
        reason:
          "Pecorino Romano is an imported Italian cheese rarely found in Indian markets and very expensive.",
      },
      {
        original: "Parmigiano Reggiano",
        alternate: "Amul Parmesan or regular grated processed cheese",
        reason:
          "Original Parmigiano is costly and hard to find; locally available grated cheese works well.",
      },
      {
        original: "Sake",
        alternate: "Skip it or add a small splash of white vinegar",
        reason:
          "Sake (Japanese rice wine) is not available in most Indian stores.",
      },
    ],
  },
  {
    id: BigInt(4),
    title: "Roasted Tomato Soup",
    category: "Lunch",
    description:
      "Slow-roasted tomatoes concentrate into deep, jammy sweetness. Blended with roasted garlic and fresh basil, this soup is what comfort tastes like. Serve with a grilled cheese for a lunch that feels like a hug.",
    prepTime: "15 min",
    cookTime: "1 hr",
    ingredients: [
      "1.5 kg ripe Roma tomatoes, halved",
      "1 whole head of garlic",
      "1 large white onion, quartered",
      "4 tbsp extra virgin olive oil",
      "1 tsp sugar",
      "500ml vegetable stock",
      "Large handful of fresh basil",
      "Salt and pepper",
      "Double cream, to serve",
    ],
    steps: [
      "Preheat oven to 200°C. Arrange tomatoes cut-side up on a baking tray with onion quarters.",
      "Cut the top off the garlic head to expose cloves. Nestle beside tomatoes.",
      "Drizzle everything generously with olive oil, sprinkle with sugar, salt, and pepper.",
      "Roast 45–55 minutes until tomatoes are caramelised and slightly charred at edges.",
      "Squeeze garlic cloves from their skins into a blender. Add tomatoes, onion, and all the roasting juices.",
      "Add stock and basil. Blend until completely smooth. Season to taste.",
      "Pass through a sieve for silkier texture if desired. Reheat gently and serve with a swirl of cream.",
    ],
    alternates: [
      {
        original: "Extra virgin olive oil",
        alternate: "Regular refined sunflower oil or groundnut oil",
        reason:
          "Extra virgin olive oil is expensive; regular cooking oil gives the same result for roasting.",
      },
      {
        original: "Double cream",
        alternate: "Fresh malai or Amul fresh cream",
        reason:
          "Double cream is not commonly available in India; Amul fresh cream or thick malai is an easy substitute.",
      },
      {
        original: "Vegetable stock",
        alternate: "Water with a pinch of salt or homemade dal water",
        reason:
          "Packaged vegetable stock is not a staple in Indian kitchens; plain water or dal water works fine.",
      },
      {
        original: "Fresh basil",
        alternate: "Fresh coriander leaves or tulsi (holy basil) leaves",
        reason:
          "Italian basil is hard to find in most Indian markets; coriander is always available and adds freshness.",
      },
    ],
  },
  {
    id: BigInt(5),
    title: "Herb-Crusted Rack of Lamb",
    category: "Dinner",
    description:
      "An impressive centrepiece for any dinner table. A rack of lamb coated in a fragrant crust of fresh herbs, Dijon mustard, and breadcrumbs — roasted to a perfect blushing pink inside. Simple to prepare, spectacular to serve.",
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "2 racks of lamb (8 bones each), frenched",
      "3 tbsp Dijon mustard",
      "100g fine breadcrumbs",
      "3 garlic cloves, minced",
      "Handful fresh rosemary leaves, chopped",
      "Handful fresh thyme leaves",
      "3 tbsp olive oil",
      "Salt and black pepper",
    ],
    steps: [
      "Remove lamb from fridge 30 minutes before cooking. Preheat oven to 220°C.",
      "Season racks generously with salt and pepper. Sear in a hot ovenproof skillet, fat side down, 3–4 minutes until golden.",
      "Mix breadcrumbs, garlic, rosemary, thyme, and olive oil in a bowl. Season well.",
      "Brush the fat side of each rack generously with Dijon mustard.",
      "Press the herb crust firmly onto the mustard-coated surface.",
      "Transfer to oven and roast 18–20 minutes for medium-rare (internal temp 57°C).",
      "Rest on a board loosely tented with foil for 10 minutes before carving between bones.",
    ],
    alternates: [
      {
        original: "Dijon mustard",
        alternate:
          "Regular yellow mustard or homemade mustard paste (ground sarson)",
        reason:
          "Dijon mustard is imported and expensive; regular mustard or freshly ground sarson paste is available everywhere.",
      },
      {
        original: "Fresh rosemary",
        alternate: "Dried rosemary or a mix of fresh coriander and mint",
        reason:
          "Fresh rosemary is rarely available in Indian markets; dried rosemary from spice shops works or use aromatic local herbs.",
      },
      {
        original: "Fresh thyme",
        alternate: "Dried thyme or ajwain (carom seeds) in small quantity",
        reason:
          "Fresh thyme is hard to find in India; ajwain has a similar earthy, herbal flavor used in small amounts.",
      },
      {
        original: "Rack of lamb (frenched)",
        alternate: "Regular lamb chops from local butcher",
        reason:
          "Frenched rack of lamb is a specialty cut that most Indian butchers may not offer; regular lamb chops work as a substitute.",
      },
    ],
  },
  {
    id: BigInt(6),
    title: "Miso-Glazed Salmon",
    category: "Dinner",
    description:
      "A Japanese-inspired weeknight wonder. The sweet-savory miso glaze caramelises under the grill into a lacquered, umami-rich crust while the salmon stays silky and moist inside. Ready in 20 minutes, tastes like a restaurant dish.",
    prepTime: "5 min",
    cookTime: "15 min",
    ingredients: [
      "4 salmon fillets (skin-on)",
      "3 tbsp white miso paste",
      "2 tbsp mirin",
      "1 tbsp sake (or dry sherry)",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 tsp fresh ginger, grated",
      "Toasted sesame seeds and spring onions to serve",
    ],
    steps: [
      "Whisk together miso, mirin, sake, soy sauce, sesame oil, and ginger until smooth.",
      "Pat salmon dry. Place in a shallow dish and coat with miso marinade. Marinate 15–30 minutes (or up to overnight in the fridge).",
      "Preheat grill/broiler to high. Line a baking tray with foil and grease lightly.",
      "Place salmon skin-side down on the tray. Spoon any remaining marinade over the top.",
      "Grill 8–10 minutes until glaze is caramelised and slightly charred, and salmon flakes at the thickest part.",
      "Transfer to plates, scatter with sesame seeds and sliced spring onions. Serve with steamed rice.",
    ],
    alternates: [
      {
        original: "White miso paste",
        alternate: "A mix of peanut butter + soy sauce + a pinch of salt",
        reason:
          "Miso paste is a Japanese ingredient not available in most Indian stores; this combination mimics the salty-umami taste.",
      },
      {
        original: "Mirin",
        alternate: "1 tbsp sugar dissolved in 1 tbsp water or apple juice",
        reason:
          "Mirin is a Japanese sweet rice wine unavailable in India; sweetened water gives similar sweetness to the glaze.",
      },
      {
        original: "Sake",
        alternate: "Skip it or add a small splash of white vinegar",
        reason:
          "Sake is a Japanese rice wine not easily available in Indian stores; it can be skipped without major impact.",
      },
      {
        original: "Sesame oil",
        alternate:
          "Regular cooking oil with a tiny pinch of roasted sesame seeds blended in",
        reason:
          "Sesame oil is available in some Indian stores but can be pricey; plain oil with crushed sesame seeds gives a similar flavor.",
      },
    ],
  },
  {
    id: BigInt(7),
    title: "Chocolate Lava Cake",
    category: "Dessert",
    description:
      "The ultimate crowd-pleasing dessert — a rich chocolate cake with a warm, molten centre that flows like lava when you break it open. Made with just five ingredients and ready in 15 minutes. Pure theatre, pure indulgence.",
    prepTime: "10 min",
    cookTime: "12 min",
    ingredients: [
      "200g dark chocolate (70%), chopped",
      "150g unsalted butter, plus extra for moulds",
      "4 eggs + 4 egg yolks",
      "150g icing sugar",
      "50g plain flour",
      "Cocoa powder for dusting",
      "Vanilla ice cream and raspberries to serve",
    ],
    steps: [
      "Preheat oven to 200°C. Butter 6 individual ramekins and dust with cocoa powder, tapping out excess.",
      "Melt chocolate and butter together in a heatproof bowl over simmering water. Stir until smooth. Cool slightly.",
      "Whisk eggs, yolks, and icing sugar vigorously with an electric whisk until pale and thick, about 3 minutes.",
      "Fold the chocolate mixture into the egg mixture gently.",
      "Sift in flour and fold until just combined — do not overmix.",
      "Divide batter between prepared ramekins. At this point you can refrigerate up to 24 hours.",
      "Bake exactly 10–12 minutes until edges are set but the centre still has a distinct wobble. Turn out onto plates immediately and serve with ice cream.",
    ],
    alternates: [
      {
        original: "Dark chocolate (70%)",
        alternate:
          "Amul dark chocolate or any available cocoa-rich chocolate bar",
        reason:
          "70% dark chocolate is expensive and not always stocked in local stores; Amul dark works well.",
      },
      {
        original: "Unsalted butter",
        alternate: "Amul salted butter (reduce any added salt in the recipe)",
        reason:
          "Unsalted butter is less common in Indian households; widely available Amul salted butter is a direct substitute.",
      },
      {
        original: "Icing sugar",
        alternate: "Regular sugar blended into a fine powder at home",
        reason:
          "Icing sugar can be made at home by blending regular sugar in a mixer for 1–2 minutes.",
      },
      {
        original: "Raspberries",
        alternate: "Strawberries, sliced banana, or pomegranate seeds",
        reason:
          "Raspberries are rare and expensive in India; strawberries or other local fruits serve the same purpose.",
      },
    ],
  },
  {
    id: BigInt(8),
    title: "Lemon Posset with Shortbread",
    category: "Dessert",
    description:
      "An elegant, almost magical British dessert made with just three ingredients. Double cream and sugar set firm with the acidity of lemon juice — no gelatine needed. Silky, intensely lemony, and utterly refined.",
    prepTime: "10 min",
    cookTime: "5 min",
    ingredients: [
      "600ml double cream",
      "175g caster sugar",
      "Juice of 3 large lemons (about 100ml)",
      "Zest of 2 lemons",
      "Shortbread biscuits to serve",
      "Fresh raspberries and mint to garnish",
    ],
    steps: [
      "Combine cream and sugar in a heavy-based saucepan over medium heat. Stir to dissolve sugar.",
      "Bring to a rolling boil, then boil for exactly 3 minutes, stirring occasionally.",
      "Remove from heat. Add lemon juice and zest, stirring to combine.",
      "Leave to cool for 10 minutes, then pass through a fine sieve.",
      "Pour into 6 small serving glasses or ramekins.",
      "Refrigerate at least 4 hours or overnight until set — the posset should be firm but yielding.",
      "Serve with shortbread biscuits, fresh raspberries, and a sprig of mint.",
    ],
    alternates: [
      {
        original: "Double cream",
        alternate: "Amul fresh cream or thick malai collected from boiled milk",
        reason:
          "Double cream (48% fat) is not available in India; Amul cream or thick malai is the closest substitute.",
      },
      {
        original: "Caster sugar",
        alternate: "Regular fine sugar or powdered sugar",
        reason:
          "Caster sugar is finer than regular sugar; regular sugar dissolved well while heating works the same way.",
      },
      {
        original: "Shortbread biscuits",
        alternate: "Parle-G biscuits or any butter biscuits",
        reason:
          "Shortbread is not readily available everywhere in India; Parle-G or Marie biscuits are a common affordable substitute.",
      },
      {
        original: "Fresh raspberries",
        alternate: "Strawberries, sliced mango, or pomegranate seeds",
        reason:
          "Raspberries are imported and expensive; local seasonal fruits like mango or strawberries add the same freshness.",
      },
    ],
  },
];
