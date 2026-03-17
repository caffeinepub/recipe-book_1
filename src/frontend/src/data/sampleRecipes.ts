import type { Recipe } from "../backend.d";

export const SAMPLE_RECIPES: Recipe[] = [
  {
    id: BigInt(2),
    title: "Classic French Omelette",
    servings: 1,
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
    servings: 4,
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
    id: BigInt(5),
    title: "Herb-Crusted Rack of Lamb",
    servings: 4,
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
    id: BigInt(7),
    title: "Chocolate Lava Cake",
    servings: 6,
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
    id: BigInt(10),
    title: "Mango Lassi",
    servings: 2,
    category: "Beverages",
    description:
      "A thick, creamy, gloriously golden drink that captures the taste of Indian summers. Ripe Alphonso mangoes blended with chilled curd and a hint of cardamom — refreshing, filling, and utterly satisfying.",
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      "1 cup ripe mango pulp (fresh or canned Alphonso)",
      "1 cup thick curd (dahi)",
      "½ cup chilled milk",
      "2 tbsp sugar (adjust to sweetness of mango)",
      "¼ tsp cardamom powder",
      "A pinch of saffron strands soaked in 1 tbsp warm milk (optional)",
      "Ice cubes to serve",
    ],
    steps: [
      "If using fresh mangoes, peel, chop, and blend into a smooth pulp.",
      "Add curd, milk, sugar, and cardamom to the blender with the mango pulp.",
      "Blend on high for 1–2 minutes until completely smooth and frothy.",
      "Taste and adjust sugar as needed.",
      "Pour over ice cubes into tall glasses.",
      "Drizzle saffron milk on top for garnish if using. Serve immediately.",
    ],
    alternates: [
      {
        original: "Alphonso mango pulp",
        alternate:
          "Any locally available ripe mango variety or canned mango pulp (Ratna/Kesar brand)",
        reason:
          "Alphonso is the premium variety, but any sweet ripe mango — Kesar, Dasheri, Totapuri — works beautifully.",
      },
      {
        original: "Thick curd (dahi)",
        alternate: "Regular store-bought curd, slightly drained",
        reason:
          "Thicker curd gives a creamier lassi; if using thin curd, reduce the milk quantity slightly.",
      },
      {
        original: "Saffron strands",
        alternate: "A tiny pinch of turmeric for colour, or skip entirely",
        reason:
          "Saffron is optional and costly; it adds colour and fragrance but the lassi tastes great without it.",
      },
    ],
  },
  {
    id: BigInt(13),
    title: "Sprouted Moong Salad",
    servings: 2,
    category: "Salads",
    description:
      "A protein-packed salad made with home-sprouted green moong, tossed with crunchy vegetables, fresh herbs, and a tangy tamarind-lime dressing. Light, nutritious, and full of flavour.",
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      "1 cup sprouted green moong (mung beans)",
      "1 small tomato, finely chopped",
      "½ cucumber, diced",
      "1 small onion, finely chopped",
      "1 green chilli, chopped",
      "Handful fresh coriander",
      "Juice of 1 lime",
      "1 tsp tamarind paste",
      "½ tsp chaat masala",
      "Salt to taste",
      "1 tsp jaggery or sugar (optional)",
    ],
    steps: [
      "If sprouting at home, soak moong overnight, drain, and leave covered in a damp cloth for 6–8 hours until small tails appear.",
      "Rinse sprouted moong well. You can use them raw or steam them briefly (3 minutes) if you prefer a softer texture.",
      "Mix tamarind paste, lime juice, jaggery, chaat masala, and salt in a small bowl to make the dressing.",
      "Combine sprouted moong, tomato, cucumber, onion, chilli, and coriander in a bowl.",
      "Pour the dressing over and toss gently to coat everything.",
      "Taste and adjust salt, lime, or sweetness.",
      "Serve immediately as a snack or light meal.",
    ],
    alternates: [
      {
        original: "Sprouted moong",
        alternate: "Canned chickpeas or boiled kabuli chana",
        reason:
          "If sprouting is not convenient, canned or boiled chickpeas give a similar protein-rich texture.",
      },
      {
        original: "Tamarind paste",
        alternate: "Extra lime juice or amchur powder",
        reason:
          "Tamarind gives a distinctive sour depth; lime juice or dry mango powder is a widely available substitute.",
      },
      {
        original: "Jaggery",
        alternate: "Regular sugar or honey",
        reason:
          "Jaggery adds an earthy sweetness; refined sugar or honey achieves the same balance in the dressing.",
      },
    ],
  },
  {
    id: BigInt(16),
    title: "Boondi Raita",
    servings: 4,
    category: "Accompaniments",
    description:
      "A creamy, cooling yogurt side dish studded with crispy boondi pearls, seasoned with roasted cumin and a pinch of red chilli. The classic accompaniment to biryanis, pulaos, and spicy curries — a cooling balance on every plate.",
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      "2 cups thick curd (dahi)",
      "½ cup plain boondi (store-bought or homemade)",
      "½ tsp roasted cumin powder (bhuna jeera)",
      "¼ tsp red chilli powder",
      "¼ tsp black salt (kala namak)",
      "Salt to taste",
      "A pinch of chaat masala",
      "Fresh coriander leaves to garnish",
      "2–3 tbsp cold water (to loosen the curd if needed)",
    ],
    steps: [
      "Whisk the curd until smooth and creamy. Add cold water if it's too thick — it should pour easily.",
      "Soak the boondi in warm water for 2–3 minutes to soften slightly. Drain and gently squeeze out excess water.",
      "Add the softened boondi to the whisked curd.",
      "Season with roasted cumin powder, red chilli powder, black salt, regular salt, and chaat masala.",
      "Stir gently to combine everything without breaking the boondi.",
      "Taste and adjust seasoning. Refrigerate for at least 15 minutes before serving — it thickens as it sits.",
      "Garnish with fresh coriander and a dusting of extra cumin powder. Serve chilled.",
    ],
    alternates: [
      {
        original: "Plain boondi",
        alternate: "Finely diced cucumber or pomegranate seeds",
        reason:
          "If boondi is unavailable, cucumber adds crunch and freshness; pomegranate gives a jewelled, tangy bite.",
      },
      {
        original: "Thick curd (dahi)",
        alternate: "Regular curd, drained for 30 minutes in a muslin cloth",
        reason:
          "Regular curd can be thickened easily at home by draining; store-bought hung curd also works.",
      },
      {
        original: "Chaat masala",
        alternate: "A pinch of amchur powder or extra black salt",
        reason:
          "Chaat masala adds a tangy spiced note; amchur or extra black salt replicates the sourness if chaat masala is unavailable.",
      },
    ],
  },
];
