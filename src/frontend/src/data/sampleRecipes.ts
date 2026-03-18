import type { Recipe } from "../backend.d";

export const SAMPLE_RECIPES: Recipe[] = [
  // ─── BREAKFAST ───────────────────────────────────────────────────────────────
  {
    id: BigInt(2),
    title: "Classic French Omelette",
    cuisine: "French",
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
    tips: [
      "Use eggs at room temperature for a more even cook.",
      "The pan must be very hot before adding eggs — test by dropping a tiny bit of butter; it should foam immediately.",
      "Never stop moving the pan and fork — constant motion creates the creamy texture.",
      "Serve immediately; omelettes wait for no one.",
    ],
  },
  {
    id: BigInt(20),
    title: "Spiced South Indian Idli (Kanchipuram Style)",
    servings: 4,
    category: "Breakfast",
    description:
      "Aromatic, spiced idlis from the temple town of Kanchipuram — loaded with black pepper, cumin, ginger, and curry leaves, then steamed to a soft, spongy perfection. A far more flavourful cousin of the everyday idli.",
    prepTime: "8 hr (fermentation)",
    cookTime: "20 min",
    ingredients: [
      "2 cups idli rice",
      "1 cup urad dal (split black lentils)",
      "½ tsp methi (fenugreek) seeds",
      "1 tsp black pepper, coarsely crushed",
      "1 tsp cumin seeds",
      "1 tsp grated ginger",
      "2 tbsp chana dal (Bengal gram), soaked and drained",
      "8–10 curry leaves, finely chopped",
      "2 tbsp ghee",
      "Salt to taste",
    ],
    steps: [
      "Soak idli rice and methi seeds together for 6 hours. Soak urad dal separately for 4 hours.",
      "Grind urad dal to a smooth, fluffy batter. Grind rice to a slightly coarser batter. Combine both batters, add salt, and ferment overnight in a warm place.",
      "Heat ghee in a small pan. Add cumin, pepper, curry leaves, chana dal, and ginger. Sauté for 1 minute until fragrant.",
      "Fold the tempered spices into the fermented batter and mix gently.",
      "Grease idli moulds well with ghee. Pour the spiced batter into each mould, filling ¾ full.",
      "Steam in a steamer or pressure cooker (without whistle) for 15–18 minutes until a skewer comes out clean.",
      "Rest for 2 minutes, then unmould carefully. Serve hot with coconut chutney and sambar.",
    ],
    alternates: [
      {
        original: "Idli rice",
        alternate: "Parboiled rice or regular short-grain rice",
        reason:
          "Idli rice gives the best spongy texture, but parboiled or any short-grain rice is a workable substitute.",
      },
      {
        original: "Ghee",
        alternate: "Refined oil or coconut oil",
        reason:
          "Ghee adds richness; coconut oil keeps the South Indian flavour intact if ghee is unavailable.",
      },
      {
        original: "Chana dal",
        alternate: "Soaked yellow moong dal",
        reason:
          "Chana dal adds a nutty bite; moong dal provides a similar texture and is widely available.",
      },
    ],
    tips: [
      "Fermentation is key — a warm, humid kitchen speeds it up. In winters, keep the batter near a warm light.",
      "Grease idli moulds generously with oil or ghee to prevent sticking.",
      "Use an idli stand with a tight-fitting lid to trap steam evenly.",
      "Chana dal gives a pleasant bite — don't skip soaking it beforehand.",
    ],
  },
  {
    id: BigInt(21),
    title: "Savory Corn Fritters (Green Corn Appe)",
    servings: 3,
    category: "Breakfast",
    description:
      "Crispy-edged, soft-centred appe made with fresh green corn kernels, semolina, and warming spices — cooked in the classic appe pan for perfect little golden bites. A Maharashtra-inspired breakfast that's quick, colourful, and delicious.",
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      "1 cup fresh green corn kernels (or frozen sweet corn)",
      "½ cup fine semolina (rava/suji)",
      "¼ cup besan (chickpea flour)",
      "¼ cup thick curd (dahi)",
      "1 green chilli, finely chopped",
      "½ tsp grated ginger",
      "¼ tsp turmeric",
      "½ tsp cumin seeds",
      "Handful fresh coriander, chopped",
      "Salt to taste",
      "Oil for cooking",
    ],
    steps: [
      "Roughly blend corn kernels to a coarse paste (do not make it smooth — some texture is desired).",
      "In a bowl, mix corn paste, semolina, besan, curd, green chilli, ginger, turmeric, cumin, coriander, and salt.",
      "Add water gradually to make a thick, pourable batter. Rest for 10 minutes so the semolina absorbs the moisture.",
      "Heat an appe pan (paniyaram pan) over medium heat. Brush each mould with a few drops of oil.",
      "Pour the batter into each mould, filling to just below the rim.",
      "Cover and cook on medium-low heat for 3–4 minutes until the bottoms are golden and the sides are set.",
      "Flip each appe carefully using a spoon. Cook uncovered for another 2–3 minutes. Serve hot with green chutney.",
    ],
    alternates: [
      {
        original: "Fresh green corn",
        alternate: "Frozen sweet corn kernels, thawed",
        reason:
          "Fresh green corn is seasonal; frozen sweet corn is available year-round and works equally well.",
      },
      {
        original: "Appe pan (paniyaram pan)",
        alternate:
          "Small round cutlet pan or mini muffin tin (baked at 180°C for 15 min)",
        reason:
          "If an appe pan is unavailable, a well-oiled muffin tin in the oven produces similar round, fluffy results.",
      },
      {
        original: "Besan (chickpea flour)",
        alternate: "Rice flour",
        reason:
          "Rice flour gives a crispier exterior; besan gives a more earthy, dense flavour — both work well.",
      },
    ],
    tips: [
      "Use fresh corn scraped off the cob for the best flavour — frozen corn works but tastes milder.",
      "An appe/paniyaram pan with a lid gives perfectly round, evenly cooked fritters.",
      "Keep the flame on low-medium — high heat browns the outside before the inside cooks.",
      "Add finely grated cheese to the batter for a richer flavour.",
    ],
  },
  {
    id: BigInt(22),
    title: "Multigrain Stuffed Flatbread (Cheesy Thalipeeth)",
    servings: 3,
    category: "Breakfast",
    description:
      "A hearty Maharashtrian multigrain flatbread made from bhajani (a blend of roasted flours), stuffed with spiced cheese filling and cooked with ghee on a tawa. Nutritious, filling, and wonderfully crispy at the edges.",
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "1 cup bhajani flour (or mix: ½ cup jowar + ¼ cup bajra + ¼ cup rice flour)",
      "2 tbsp besan (chickpea flour)",
      "1 medium onion, finely chopped",
      "2 green chillies, chopped",
      "½ tsp ajwain (carom seeds)",
      "½ tsp cumin seeds",
      "Handful fresh coriander, chopped",
      "Salt to taste",
      "½ cup grated processed cheese or paneer",
      "¼ tsp red chilli powder",
      "¼ tsp chaat masala",
      "Ghee or oil for cooking",
    ],
    steps: [
      "Mix bhajani flour, besan, onion, green chilli, ajwain, cumin, coriander, and salt. Add warm water gradually and knead into a soft, pliable dough.",
      "In a separate bowl, combine grated cheese, red chilli powder, and chaat masala to make the filling.",
      "Divide the dough into 6 equal balls. Flatten one ball into a small disc on a greased surface or wet palm.",
      "Place a spoonful of cheese filling in the center. Bring the edges together and seal, then gently pat into a round flatbread about 6 inches across.",
      "Heat a tawa over medium heat. Transfer the thalipeeth carefully onto the tawa.",
      "Make a small hole in the center, add a few drops of ghee into the hole and around the edges.",
      "Cook for 3–4 minutes per side, pressing gently, until golden-brown patches appear on both sides. Serve hot with curd and pickle.",
    ],
    alternates: [
      {
        original: "Bhajani flour",
        alternate:
          "Premade multigrain atta or a mix of jowar, bajra, and wheat flour",
        reason:
          "Bhajani is a pre-roasted blend; any mix of millets and wheat flour creates a comparable nutritious flatbread.",
      },
      {
        original: "Processed cheese",
        alternate: "Crumbled paneer mixed with spices",
        reason:
          "Processed cheese melts well; seasoned paneer is a lighter, equally tasty filling and easily available.",
      },
      {
        original: "Ghee",
        alternate: "Refined oil or butter",
        reason:
          "Ghee gives the best flavour and crispiness; butter or oil are practical substitutes.",
      },
    ],
    tips: [
      "Knead the dough soft but not sticky — add water gradually.",
      "Wetting your palm before flattening the dough prevents sticking.",
      "Cook on medium-low flame so the thick flatbread cooks through without burning.",
      "Mozzarella works best for the cheesy pull, but processed cheese is fine too.",
    ],
  },

  // ─── LUNCH ───────────────────────────────────────────────────────────────────
  {
    id: BigInt(3),
    title: "Spaghetti alla Carbonara",
    cuisine: "Italian",
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
    ],
    tips: [
      "Never add cream — authentic carbonara gets its creaminess only from eggs and cheese.",
      "Reserve a cup of pasta water before draining; the starchy water is what makes the sauce silky.",
      "Take the pan off heat before adding the egg mixture to avoid scrambling.",
      "Use freshly grated Pecorino Romano or Parmesan — pre-grated cheese won't melt as smoothly.",
      "Guanciale gives the best flavour, but good pancetta is an excellent substitute.",
    ],
  },
  {
    id: BigInt(23),
    title: "Crispy Paneer in Spicy Yogurt Sauce (Hyderabadi Paneer Majestic)",
    servings: 3,
    category: "Lunch",
    description:
      "A Hyderabadi restaurant favourite — crispy fried paneer batons tossed in a fiery, tangy yogurt-based sauce with curry leaves, ginger, and green chillies. Bold, flavourful, and ready in under 30 minutes.",
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      "300g paneer, cut into finger-length batons",
      "3 tbsp thick curd (dahi)",
      "1 tbsp corn flour",
      "1 tbsp rice flour",
      "½ tsp red chilli powder",
      "¼ tsp turmeric",
      "Oil for deep frying",
      "For the sauce: 1 tbsp oil, 1 tsp mustard seeds, 10 curry leaves, 4 green chillies (slit), 1 tbsp grated ginger, 1 tsp garlic paste, ½ cup thick curd, 1 tsp red chilli powder, ½ tsp cumin powder, salt to taste, juice of ½ lemon",
    ],
    steps: [
      "Marinate paneer batons in curd, corn flour, rice flour, red chilli powder, turmeric, and salt for 15 minutes.",
      "Heat oil for deep frying over medium-high heat. Fry the marinated paneer in batches until golden and crispy, about 3–4 minutes. Drain on paper towels.",
      "For the sauce: heat 1 tbsp oil in a wok. Add mustard seeds and let them splutter. Add curry leaves, green chillies, ginger, and garlic. Sauté for 1 minute until fragrant.",
      "Lower heat. Add thick curd, red chilli powder, cumin powder, and salt. Stir continuously over low heat for 2–3 minutes until the sauce thickens and oil separates.",
      "Add the fried paneer to the sauce and toss gently to coat every piece.",
      "Squeeze lemon juice over the top. Toss once more.",
      "Serve immediately garnished with fresh coriander. Goes best with rumali roti or steamed rice.",
    ],
    alternates: [
      {
        original: "Paneer",
        alternate: "Firm tofu, pressed and dried",
        reason:
          "Tofu absorbs the sauce well and crisps up similarly when fried; a good dairy-free option.",
      },
      {
        original: "Rice flour (for marination)",
        alternate: "All-purpose flour or extra corn flour",
        reason:
          "Rice flour adds crispiness; corn flour or plain flour are widely available alternatives.",
      },
      {
        original: "Thick curd",
        alternate: "Hung curd or Greek-style yogurt",
        reason:
          "Thick curd prevents the sauce from becoming too watery; strained regular curd works perfectly.",
      },
    ],
    tips: [
      "Fry paneer in small batches so it crisps up — overcrowding the pan makes it steam instead.",
      "Whisk the yogurt smooth before adding it to the pan to avoid curdling.",
      "Kashmiri red chilli gives colour with moderate heat — adjust to your spice level.",
      "Serve immediately while the paneer is still crispy.",
    ],
  },
  {
    id: BigInt(24),
    title: "Maharashtrian Yogurt Kadhi with Rice (Dahi Kadhi Rice)",
    servings: 4,
    category: "Lunch",
    description:
      "A comforting Maharashtrian kadhi — tangy curd simmered with besan, tempered with mustard, cumin, and curry leaves, and served over fluffy steamed rice. The ultimate simple weekday meal, ready in 20 minutes.",
    prepTime: "5 min",
    cookTime: "20 min",
    ingredients: [
      "2 cups sour curd (dahi)",
      "3 tbsp besan (chickpea flour)",
      "2 cups water",
      "½ tsp turmeric",
      "Salt to taste",
      "1 tsp sugar",
      "For tempering: 1 tbsp ghee, ½ tsp mustard seeds, ½ tsp cumin seeds, 1 dry red chilli, 8 curry leaves, pinch of hing (asafoetida)",
      "Steamed basmati rice to serve",
      "Fresh coriander for garnish",
    ],
    steps: [
      "In a bowl, whisk together curd, besan, water, turmeric, salt, and sugar until completely smooth — no lumps.",
      "Pour the mixture into a heavy-bottomed pot over medium heat. Stir continuously in one direction.",
      "Bring to a gentle boil, stirring frequently to prevent the besan from settling and burning at the bottom.",
      "Reduce heat to low and simmer for 12–15 minutes until the raw besan smell disappears and the kadhi thickens slightly.",
      "Prepare the tempering: heat ghee in a small pan. Add mustard seeds. When they splutter, add cumin, dry red chilli, curry leaves, and hing. Fry for 30 seconds.",
      "Pour the hot tempering immediately over the simmering kadhi. Stir to combine.",
      "Serve hot over steamed basmati rice, garnished with fresh coriander.",
    ],
    alternates: [
      {
        original: "Sour curd",
        alternate: "Regular curd with 1 tsp lemon juice added",
        reason:
          "Kadhi needs a tangy curd for the right flavour; adding lemon to fresh curd replicates sourness perfectly.",
      },
      {
        original: "Ghee (for tempering)",
        alternate: "Refined oil",
        reason:
          "Ghee gives a richer, more aromatic tempering; oil is a lighter everyday substitute.",
      },
      {
        original: "Hing (asafoetida)",
        alternate: "Skip it, or use a tiny pinch of garlic powder",
        reason:
          "Hing is not everyone's pantry staple; the kadhi still tastes great without it, or garlic powder adds a subtle savory note.",
      },
    ],
    tips: [
      "Use sour yogurt for an authentic tangy Kadhi — fresh yogurt can be too mild.",
      "Keep stirring after adding the yogurt-besan mixture to prevent lumps.",
      "Simmer on low flame — high heat causes Kadhi to split.",
      "The tadka (tempering) at the end is essential — don't skip the mustard seeds and curry leaves.",
    ],
  },
  {
    id: BigInt(25),
    title: "Potato and Green Pea Dumplings in Gravy (Batata Matar Kofta)",
    servings: 4,
    category: "Lunch",
    description:
      "Soft potato-pea koftas floating in a rich, aromatic tomato-onion gravy — an Indian-style comfort dish that rivals any restaurant meal. Perfect with naan, roti, or jeera rice.",
    prepTime: "25 min",
    cookTime: "30 min",
    ingredients: [
      "3 medium potatoes, boiled and mashed",
      "½ cup green peas, boiled and lightly mashed",
      "2 tbsp corn flour",
      "½ tsp garam masala",
      "½ tsp red chilli powder",
      "Fresh coriander, chopped",
      "Salt to taste",
      "Oil for frying",
      "For gravy: 2 tbsp oil, 1 large onion (finely chopped), 2 tomatoes (pureed), 1 tsp ginger-garlic paste, 1 tsp cumin seeds, 1 bay leaf, 1 tsp coriander powder, ½ tsp turmeric, 1 tsp red chilli powder, 1 tsp garam masala, 2 tbsp cream or malai, salt to taste",
    ],
    steps: [
      "Mix mashed potato, peas, corn flour, garam masala, chilli powder, coriander, and salt. Knead into a smooth mixture. Shape into smooth, lemon-sized balls.",
      "Heat oil for frying on medium-high. Fry koftas in batches until golden-brown all over, about 4–5 minutes. Drain and set aside.",
      "For the gravy: heat 2 tbsp oil in a kadhai. Add cumin seeds and bay leaf. When seeds splutter, add onion and fry until golden-brown, about 8 minutes.",
      "Add ginger-garlic paste and fry for 1 minute. Add tomato puree, turmeric, coriander powder, and chilli powder. Cook on medium heat for 8–10 minutes until oil separates.",
      "Add 1 cup water and salt. Bring to a gentle boil and simmer for 5 minutes. Stir in garam masala and cream.",
      "Just before serving, gently drop the koftas into the hot gravy. Do not stir too much — koftas are delicate.",
      "Garnish with coriander and a drizzle of cream. Serve immediately with naan, roti, or jeera rice.",
    ],
    alternates: [
      {
        original: "Cream / malai",
        alternate: "Cashew paste (soaked cashews blended with water)",
        reason:
          "Cashew paste is a dairy-free option that gives the same richness and body to the gravy.",
      },
      {
        original: "Green peas (fresh or frozen)",
        alternate: "Finely chopped spinach or grated carrots",
        reason:
          "Any soft vegetable can replace peas in the kofta filling; spinach adds colour and nutrition.",
      },
      {
        original: "Corn flour (in kofta)",
        alternate: "Breadcrumbs or arrowroot powder",
        reason:
          "Corn flour binds the kofta mix; breadcrumbs are an equally effective binder.",
      },
    ],
    tips: [
      "Drain the boiled potatoes well and let them dry before mashing — excess moisture makes koftas fall apart.",
      "Fry a small test kofta first; if it breaks, add more besan to the mixture.",
      "Fry on medium heat for an even golden crust without burning.",
      "Add a pinch of sugar to the gravy to balance the tartness of tomatoes.",
    ],
  },

  // ─── DINNER ──────────────────────────────────────────────────────────────────
  {
    id: BigInt(5),
    title: "Herb-Crusted Rack of Lamb",
    cuisine: "French",
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
    ],
    tips: [
      "Let the lamb come to room temperature for 30 minutes before roasting for even cooking.",
      "Press the herb crust firmly onto the meat so it adheres well.",
      "Use a meat thermometer — 57°C for medium-rare, 63°C for medium.",
      "Rest the meat for at least 10 minutes before carving; this keeps it juicy.",
    ],
  },
  {
    id: BigInt(26),
    title: "Indian Biryani — Chicken/Mutton",
    servings: 5,
    category: "Dinner",
    description:
      "A fragrant, slow-cooked dum biryani layered with spiced marinated meat and long-grain basmati rice, sealed with dough and cooked over gentle heat to infuse every grain with flavour. The crown jewel of Indian celebrations.",
    prepTime: "1 hr (marination)",
    cookTime: "1 hr",
    ingredients: [
      "700g chicken pieces or mutton (bone-in)",
      "2 cups aged basmati rice, soaked 30 min",
      "1 cup thick curd (dahi)",
      "2 large onions, thinly sliced and fried until golden (birista)",
      "3 tbsp biryani masala",
      "1 tbsp ginger-garlic paste",
      "½ tsp turmeric",
      "1 tsp red chilli powder",
      "A few saffron strands soaked in 2 tbsp warm milk",
      "Fresh mint and coriander, chopped",
      "4 tbsp ghee",
      "Whole spices: 2 bay leaves, 4 cloves, 2 cardamom pods, 1 cinnamon stick",
      "Salt to taste",
    ],
    steps: [
      "Marinate the meat with curd, ginger-garlic paste, biryani masala, chilli powder, turmeric, half the fried onions, salt, and half the mint and coriander. Marinate for at least 1 hour (overnight for mutton).",
      "Boil salted water with whole spices. Add soaked rice and cook until 70% done (grains should have a bite). Drain and set aside.",
      "In a heavy-bottomed pot, heat 2 tbsp ghee. Add marinated meat and cook on high heat for 5–6 minutes, then cover and cook on low for 20 minutes (chicken) or 40 minutes (mutton) until nearly cooked.",
      "Layer the partially cooked rice over the meat. Scatter remaining fried onions, mint, coriander, and saffron milk over the rice.",
      "Drizzle remaining ghee over the rice. Seal the pot with a tight-fitting lid or dough seal.",
      "Cook on very low heat (dum) for 20–25 minutes. Use a tawa/griddle under the pot to distribute heat evenly.",
      "Open the seal at the table for dramatic effect. Gently mix the bottom meat layer with the rice. Serve with boondi raita and salan.",
    ],
    alternates: [
      {
        original: "Biryani masala (store-bought)",
        alternate:
          "Homemade blend: equal parts coriander, cumin, black pepper, cardamom, cinnamon, cloves powder",
        reason:
          "Store-bought biryani masala is convenient, but a homemade blend gives fresher, more customisable flavour.",
      },
      {
        original: "Saffron strands",
        alternate:
          "A pinch of food-grade orange colour dissolved in milk, or skip entirely",
        reason:
          "Saffron is expensive; food colour mimics the visual effect, and the biryani tastes great without it.",
      },
      {
        original: "Aged basmati rice",
        alternate: "Regular basmati rice",
        reason:
          "Aged basmati has longer grains and cooks fluffier; regular basmati rice is a perfectly acceptable substitute.",
      },
    ],
    tips: [
      "Marinate meat overnight for deeper flavour penetration.",
      "Partially cook the rice (dum it when 70% done) so it finishes steaming with the meat.",
      "Seal the pot with dough or a tight lid and cook on the lowest flame for dum cooking.",
      "Fried onions (birista) are non-negotiable — make a generous batch; they add sweetness and texture.",
      "Use aged basmati rice for the most fragrant, non-sticky biryani.",
    ],
  },
  {
    id: BigInt(27),
    title: "Thai Green Curry with Steamed Rice",
    cuisine: "Thai",
    servings: 4,
    category: "Dinner",
    description:
      "A vibrant, aromatic Thai green curry made with creamy coconut milk, homemade green curry paste, and fresh vegetables — served over fluffy jasmine rice. Fresh, herbaceous, and mildly spicy with a satisfying depth.",
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "2 tbsp Thai green curry paste (store-bought or homemade)",
      "400ml coconut milk",
      "1 cup mixed vegetables (baby corn, broccoli, zucchini, bell peppers, peas)",
      "1 cup tofu, cubed and pan-fried (optional)",
      "4–5 kaffir lime leaves (or 1 tsp lime zest)",
      "1 tbsp coconut oil or neutral oil",
      "1 tbsp soy sauce",
      "1 tsp sugar or jaggery",
      "Juice of ½ lime",
      "Handful fresh Thai basil or regular basil",
      "1 stalk lemongrass, bruised",
      "Steamed jasmine or basmati rice to serve",
    ],
    steps: [
      "Heat oil in a wok or deep pan over medium heat. Add green curry paste and stir-fry for 1–2 minutes until fragrant.",
      "Pour in half the coconut milk, stirring to combine with the paste. Add lemongrass and kaffir lime leaves.",
      "Bring to a simmer and cook for 5 minutes until the oil begins to separate from the coconut milk (this step develops deep flavour).",
      "Add the remaining coconut milk and 100ml water. Stir in soy sauce and sugar.",
      "Add the vegetables, starting with the ones that take longer (broccoli, baby corn) and finishing with quick-cooking ones (peas, bell peppers). Add tofu if using.",
      "Simmer for 8–10 minutes until vegetables are just tender and the curry has thickened slightly.",
      "Stir in lime juice and fresh basil. Taste and adjust seasoning. Serve hot over steamed rice.",
    ],
    alternates: [
      {
        original: "Kaffir lime leaves",
        alternate: "Regular lime zest and a little lime juice",
        reason:
          "Kaffir lime leaves are hard to find in India; lime zest gives a similar citrusy fragrance.",
      },
      {
        original: "Lemongrass",
        alternate: "Lemon zest with a small piece of ginger",
        reason:
          "Lemongrass is not always available in Indian cities; the combination of lemon zest and ginger replicates its bright, warm aroma.",
      },
      {
        original: "Thai green curry paste",
        alternate:
          "Blend: green chillies, garlic, ginger, coriander roots, cumin, lemongrass (if available)",
        reason:
          "Store-bought paste is convenient; a quick blended paste from pantry items makes a fresh, acceptable alternative.",
      },
    ],
    tips: [
      "Don't substitute coconut milk with any other liquid — it defines the dish.",
      "Fry the green curry paste in oil before adding coconut milk to unlock deeper flavours.",
      "Add vegetables in order of cooking time — hardest first, tender last.",
      "Fish sauce brings authenticity; soy sauce is a fine substitute if unavailable.",
      "Taste and balance with lime juice and a pinch of sugar at the end.",
    ],
  },
  {
    id: BigInt(28),
    title: "Hakka Noodles with Vegetable Manchurian (Indo-Chinese Style)",
    cuisine: "Indo-Chinese",
    servings: 3,
    category: "Dinner",
    description:
      "The beloved Indo-Chinese duo — smoky, tossed hakka noodles served alongside crispy vegetable Manchurian balls in a thick, tangy-spicy sauce. A street-food classic that is always a crowd-pleaser.",
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      "200g hakka noodles (or any thin wheat noodles), boiled and tossed in oil",
      "1 tbsp oil, 1 tsp garlic (minced), 1 tsp ginger (minced), ½ cup each: sliced cabbage, carrot strips, capsicum strips, spring onion",
      "2 tbsp soy sauce, 1 tbsp chilli sauce, 1 tsp vinegar, salt and pepper",
      "For Manchurian balls: 1 cup finely grated cabbage, ½ cup grated carrot, 2 tbsp all-purpose flour, 2 tbsp corn flour, ½ tsp ginger-garlic paste, 1 tbsp soy sauce, salt and pepper, oil for frying",
      "For Manchurian sauce: 1 tbsp oil, 1 tsp garlic, 1 tsp ginger, 1 tbsp soy sauce, 1 tbsp chilli sauce, 1 tbsp tomato ketchup, 1 tsp vinegar, 1 tsp corn flour dissolved in ¼ cup water",
    ],
    steps: [
      "Make Manchurian balls: squeeze all excess moisture from grated cabbage and carrot. Mix with flours, ginger-garlic paste, soy sauce, salt, and pepper. Shape into firm lemon-sized balls.",
      "Heat oil for deep frying. Fry Manchurian balls until golden and crispy, about 4–5 minutes. Drain and set aside.",
      "For Manchurian sauce: heat 1 tbsp oil in a wok. Sauté garlic and ginger for 30 seconds. Add soy sauce, chilli sauce, ketchup, and vinegar. Simmer for 1 minute, then add corn flour slurry. Stir until sauce thickens. Add Manchurian balls and toss to coat.",
      "For Hakka noodles: heat oil in a large wok on high heat. Add garlic and ginger, stir-fry 30 seconds.",
      "Add carrots and cabbage, stir-fry on high for 2 minutes. Add capsicum and spring onion whites.",
      "Add boiled noodles, soy sauce, chilli sauce, and vinegar. Toss vigorously on high heat for 2–3 minutes.",
      "Season with salt and pepper. Finish with spring onion greens. Plate the noodles and serve Manchurian balls alongside or on top.",
    ],
    alternates: [
      {
        original: "Hakka noodles",
        alternate:
          "Any thin wheat noodles or maggi-style noodles (discard seasoning)",
        reason:
          "Hakka noodles are widely available; thin wheat noodles from any brand work equally well for stir-frying.",
      },
      {
        original: "Soy sauce",
        alternate: "Dark soy sauce (reduced quantity) or coconut aminos",
        reason:
          "Dark soy sauce is saltier and more intense; use half the quantity. Coconut aminos is a gluten-free alternative.",
      },
      {
        original: "White vinegar",
        alternate: "Apple cider vinegar or lemon juice",
        reason:
          "White vinegar provides a clean tartness; apple cider vinegar or lemon juice give the same brightness.",
      },
    ],
    tips: [
      "Cook noodles al dente — slightly underdone — so they don't turn mushy when stir-fried.",
      "Use a very hot wok for authentic stir-fry flavour (wok hei).",
      "Fry Manchurian balls in batches; overcrowding causes steaming instead of crisping.",
      "Add sauces gradually and taste as you go — soy sauce is salty.",
      "Serve immediately — noodles and Manchurian lose their texture if they sit too long.",
    ],
  },

  // ─── DESSERT ─────────────────────────────────────────────────────────────────
  {
    id: BigInt(7),
    title: "Chocolate Lava Cake",
    cuisine: "French",
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
        original: "Raspberries",
        alternate: "Strawberries, sliced banana, or pomegranate seeds",
        reason:
          "Raspberries are rare and expensive in India; strawberries or other local fruits serve the same purpose.",
      },
    ],
    tips: [
      "Use good-quality dark chocolate — it makes all the difference.",
      "Butter and flour the ramekins thoroughly so the cakes release cleanly.",
      "Refrigerate the batter for up to 24 hours — bake straight from the fridge, adding 1-2 minutes extra.",
      "Test timing with one cake before baking the full batch — oven temperatures vary.",
      "The centre should wobble slightly when you take it out; it sets from residual heat.",
    ],
  },
  {
    id: BigInt(29),
    title: "Saffron Pistachio Kulfi (Indian Ice Cream)",
    servings: 6,
    category: "Dessert",
    description:
      "Rich, dense, and intensely flavoured — traditional kulfi made by reducing full-fat milk to a thick rabri, infused with saffron and crushed pistachios, then frozen in cone moulds. No churning needed, and far superior to any store-bought version.",
    prepTime: "10 min",
    cookTime: "40 min (+ 6 hr freezing)",
    ingredients: [
      "1 litre full-fat milk",
      "½ cup sugar (adjust to taste)",
      "¼ cup condensed milk",
      "A generous pinch of saffron soaked in 2 tbsp warm milk",
      "¼ cup unsalted pistachios, coarsely crushed",
      "¼ tsp cardamom powder",
      "2 tbsp milk powder (optional, for extra richness)",
    ],
    steps: [
      "Pour milk into a wide, heavy-bottomed pan. Bring to a boil over medium heat, stirring frequently.",
      "Once boiling, reduce heat to medium-low. Continue simmering, stirring every few minutes and scraping the sides, for 30–35 minutes until the milk reduces to roughly half its original volume.",
      "Add sugar, condensed milk, milk powder (if using), and saffron milk. Stir well and cook for another 5 minutes.",
      "Remove from heat. Stir in cardamom powder and most of the pistachios. Let the mixture cool to room temperature.",
      "Pour into kulfi moulds or small cups/glasses. Push a popsicle stick into the center of each.",
      "Sprinkle the remaining pistachios on top. Cover tightly with foil.",
      "Freeze for at least 6 hours or overnight. To unmould, dip moulds briefly in warm water and pull out by the stick. Serve immediately.",
    ],
    alternates: [
      {
        original: "Saffron strands",
        alternate:
          "A tiny pinch of turmeric for colour, plus a drop of rose water for fragrance",
        reason:
          "Saffron is costly; turmeric mimics the golden colour and rose water adds a floral note as a substitute.",
      },
      {
        original: "Condensed milk",
        alternate: "Extra sugar (2 tbsp) + 1 tbsp malai or cream",
        reason:
          "Condensed milk adds sweetness and creaminess; sugar and malai can replicate both qualities separately.",
      },
      {
        original: "Kulfi moulds",
        alternate: "Small matka (clay pots), paper cups, or ice cube trays",
        reason:
          "Traditional kulfi is served in conical moulds; any small container works just as well for freezing.",
      },
    ],
    tips: [
      "Reduce the milk slowly on low flame, stirring continuously to prevent burning at the bottom.",
      "Soak saffron in warm milk for 10 minutes before adding — this extracts the most colour and flavour.",
      "Fill kulfi moulds to the brim and tap to remove air pockets.",
      "Freeze for a minimum of 8 hours; overnight gives the best texture.",
      "To unmould, run the mould under lukewarm water for a few seconds.",
    ],
  },
  {
    id: BigInt(30),
    title: "Sweetened Yogurt Dessert with Dry Fruits (Rajbhog Shrikhand)",
    servings: 4,
    category: "Dessert",
    description:
      "Shrikhand elevated to royalty — thick hung curd sweetened with sugar, tinted golden with saffron, and loaded with slivered almonds, pistachios, and a whisper of cardamom. Served chilled, it is one of India's most elegant desserts.",
    prepTime: "10 min (+ 4 hr draining)",
    cookTime: "0 min",
    ingredients: [
      "500g full-fat curd (dahi)",
      "½ cup powdered sugar (adjust to taste)",
      "A pinch of saffron soaked in 1 tbsp warm milk",
      "¼ tsp cardamom powder",
      "2 tbsp slivered almonds",
      "2 tbsp chopped pistachios",
      "1 tbsp raisins or chopped dried figs (optional)",
      "A few drops of rose water",
    ],
    steps: [
      "Line a colander with a clean muslin cloth or a thin cotton cloth. Pour curd into it, gather the edges, and tie into a bundle.",
      "Hang the bundle over a bowl in the refrigerator for 4–6 hours (or overnight) to drain the whey completely. The result should be thick, creamy hung curd.",
      "Transfer hung curd to a bowl. Add powdered sugar and beat well until smooth and glossy.",
      "Add saffron milk, cardamom powder, and rose water. Mix until evenly incorporated and the shrikhand turns a beautiful golden-yellow colour.",
      "Fold in most of the dry fruits, reserving a handful for garnish.",
      "Refrigerate for at least 1 hour before serving. The flavours deepen as it chills.",
      "Serve cold in small bowls or glasses, topped with the reserved dry fruits and a light dusting of cardamom.",
    ],
    alternates: [
      {
        original: "Full-fat curd",
        alternate: "Store-bought Greek yogurt (no draining needed)",
        reason:
          "Greek yogurt is already thick and strained; it is a convenient shortcut that gives the same creamy texture.",
      },
      {
        original: "Rose water",
        alternate: "½ tsp kewra (screwpine) essence or skip entirely",
        reason:
          "Rose water adds a delicate floral note; kewra essence is a common Indian alternative with a similar effect.",
      },
      {
        original: "Saffron",
        alternate: "A tiny pinch of food-grade yellow colour",
        reason:
          "Saffron gives both colour and flavour; colour alone mimics the visual effect when saffron is unavailable.",
      },
    ],
    tips: [
      "Hang the yogurt in a thin muslin cloth overnight for the thickest, creamiest result.",
      "Use thick, full-fat yogurt — low-fat yogurt takes much longer to drain and has less flavour.",
      "Adjust sugar to taste after mixing — sweetness depends on how sour the yogurt is.",
      "Chill thoroughly before serving for the best flavour.",
    ],
  },
  {
    id: BigInt(31),
    title: "Ice Cream Sizzler",
    servings: 2,
    category: "Dessert",
    description:
      "A spectacular dessert experience — a hot sizzling plate layered with a warm brownie, vanilla ice cream scoops, hot chocolate fudge sauce, whipped cream, nuts, and a cherry. The dramatic sizzle as cold ice cream meets the hot plate is pure joy.",
    prepTime: "20 min",
    cookTime: "25 min (brownies)",
    ingredients: [
      "2 slices of rich chocolate brownie (homemade or store-bought)",
      "4 scoops vanilla ice cream",
      "For hot fudge sauce: 50g dark chocolate, 2 tbsp butter, ¼ cup condensed milk, 1 tbsp cocoa powder",
      "Whipped cream to top",
      "2 tbsp mixed chopped nuts (cashews, almonds, walnuts)",
      "2 maraschino cherries or fresh strawberries",
      "1 tsp butter (to heat the sizzler plate)",
    ],
    steps: [
      "Make the fudge sauce: melt chocolate and butter together. Stir in condensed milk and cocoa powder over low heat until smooth and glossy. Keep warm.",
      "If making brownies from scratch, bake a standard recipe and cut into portions. Keep at room temperature.",
      "Heat a cast-iron sizzler plate or heavy oven-safe plate in the oven at 230°C for 10–12 minutes until very hot.",
      "Using oven gloves, place the hot sizzler plate on its wooden base. Add 1 tsp butter — it should sizzle and melt immediately.",
      "Quickly place brownie slices on the sizzling plate. Add vanilla ice cream scoops alongside.",
      "Pour hot fudge sauce generously over the ice cream and brownie — the dramatic sizzle will begin.",
      "Top with whipped cream, chopped nuts, and a cherry. Serve immediately at the table while it is still sizzling.",
    ],
    alternates: [
      {
        original: "Maraschino cherries",
        alternate: "Fresh strawberries or tinned fruit cherries",
        reason:
          "Maraschino cherries are specialty items; fresh strawberries or tinned cherries provide the same visual and taste effect.",
      },
      {
        original: "Cast-iron sizzler plate",
        alternate:
          "Any heavy oven-safe pan (heat in oven and serve on a wooden board)",
        reason:
          "A cast-iron plate is ideal but any heavy oven-safe vessel creates the sizzle effect when heated sufficiently.",
      },
      {
        original: "Condensed milk (in fudge sauce)",
        alternate: "3 tbsp fresh cream + 2 tbsp sugar",
        reason:
          "Condensed milk adds sweetness and body to the sauce; cream and sugar is an equivalent substitute.",
      },
    ],
    tips: [
      "Heat the cast-iron plate or sizzler tray until very hot before plating — it must sizzle on contact.",
      "Work quickly once you start assembling — everything melts fast.",
      "Use a generous scoop of ice cream per person; it's meant to be indulgent.",
      "Chocolate sauce and caramel can be drizzled just before serving for extra drama.",
    ],
  },

  // ─── BEVERAGES ───────────────────────────────────────────────────────────────
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
    ],
    tips: [
      "Use ripe, sweet Alphonso or Kesar mangoes for the richest flavour.",
      "Chill both the yogurt and mango before blending for a cold drink without needing too much ice.",
      "Add a pinch of cardamom powder for a fragrant, authentic touch.",
      "Adjust sugar only after tasting — ripe mangoes are naturally sweet.",
    ],
  },
  {
    id: BigInt(32),
    title: "Low-Fat Mochaccino (Cold Coffee)",
    servings: 2,
    category: "Beverages",
    description:
      "A rich, chocolatey iced coffee blend that satisfies both your coffee craving and sweet tooth — without the guilt. Frothy, cold, and deeply satisfying, this café-style mochaccino is made in minutes at home.",
    prepTime: "5 min",
    cookTime: "0 min",
    ingredients: [
      "2 tsp instant coffee powder",
      "1 tbsp cocoa powder (unsweetened)",
      "2 tsp sugar or honey (adjust to taste)",
      "1 cup chilled low-fat milk",
      "½ cup chilled skimmed or toned milk",
      "1 scoop low-fat vanilla ice cream (optional)",
      "8–10 ice cubes",
      "Pinch of cinnamon for garnish",
    ],
    steps: [
      "In a blender, combine coffee powder, cocoa powder, and sugar with 2 tbsp warm water. Blend briefly to dissolve.",
      "Add chilled milk, ice cream (if using), and ice cubes.",
      "Blend on high for 30–40 seconds until frothy and well combined.",
      "Taste and adjust sweetness. Add more milk if too thick.",
      "Pour into chilled glasses.",
      "Dust the top with a pinch of cinnamon or cocoa powder. Serve immediately through a wide straw.",
    ],
    alternates: [
      {
        original: "Low-fat vanilla ice cream",
        alternate:
          "2 tbsp chilled fresh cream or skip entirely for a purely low-fat version",
        reason:
          "Ice cream adds creaminess; for a lighter drink, cream in a smaller quantity achieves a similar effect.",
      },
      {
        original: "Cocoa powder",
        alternate: "1 tsp drinking chocolate powder (like Bournvita or Milo)",
        reason:
          "Unsweetened cocoa is ideal; drinking chocolate powder is widely available and adds sweetness too — reduce sugar accordingly.",
      },
      {
        original: "Instant coffee",
        alternate: "Filter coffee decoction (2 tbsp)",
        reason:
          "South Indian filter coffee decoction adds a richer, more authentic coffee flavour to the mochaccino.",
      },
    ],
    tips: [
      "Use strong brewed coffee or espresso — weak coffee gets diluted by ice and milk.",
      "Blend with ice for a frothy, cafe-style texture.",
      "Adjust sweetness before blending — it's hard to stir sugar into a cold drink after.",
      "Cacao powder adds richness without added fat — sift it to avoid lumps.",
    ],
  },
  {
    id: BigInt(33),
    title: "Strawberry Cucumber Refresher",
    servings: 2,
    category: "Beverages",
    description:
      "A light, blush-pink summer drink that balances the natural sweetness of strawberries with the cool, hydrating freshness of cucumber — finished with a hint of mint and lemon. Elegant, healthy, and incredibly refreshing.",
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      "10–12 fresh strawberries, hulled (or 1 cup frozen)",
      "½ medium cucumber, peeled and roughly chopped",
      "Juice of 1 lemon",
      "1 tbsp honey or sugar syrup",
      "6–8 fresh mint leaves",
      "½ cup cold water or coconut water",
      "Ice cubes",
      "Soda water (optional, for a fizzy version)",
    ],
    steps: [
      "Blend strawberries, cucumber, lemon juice, honey, and mint leaves with cold water until completely smooth.",
      "Strain through a fine mesh sieve if you prefer a completely clear drink (skip if you enjoy the pulp).",
      "Taste and adjust sweetness or lemon as needed.",
      "Fill glasses generously with ice cubes.",
      "Pour the refresher over the ice. Top with soda water for a fizzy version.",
      "Garnish with a strawberry slice, cucumber round, and a sprig of mint. Serve chilled.",
    ],
    alternates: [
      {
        original: "Fresh strawberries",
        alternate: "Frozen strawberries or watermelon pieces",
        reason:
          "Fresh strawberries are seasonal; frozen ones work beautifully, and watermelon creates a lovely summer variation.",
      },
      {
        original: "Coconut water",
        alternate: "Regular chilled water",
        reason:
          "Coconut water adds natural electrolytes and a subtle sweetness; regular chilled water is a simpler substitute.",
      },
      {
        original: "Honey",
        alternate:
          "Simple sugar syrup (equal parts sugar dissolved in warm water)",
        reason:
          "Honey blends smoothly but sets in very cold drinks; sugar syrup mixes evenly at any temperature.",
      },
    ],
    tips: [
      "Use ripe, fragrant strawberries for the best colour and flavour.",
      "Peel the cucumber if it's bitter; English cucumbers can go in unpeeled.",
      "Add mint just before serving to keep it fresh and fragrant.",
      "For a still version, skip the sparkling water and use regular chilled water.",
    ],
  },
  {
    id: BigInt(34),
    title: "Spiced Buttermilk (Neer Mor — South Indian Style)",
    servings: 3,
    category: "Beverages",
    description:
      "Neer Mor is Tamil Nadu's beloved summer staple — thin, cooling buttermilk tempered with mustard seeds, curry leaves, ginger, and green chilli. Light, savory, and deeply hydrating, it is the perfect antidote to Indian summer heat.",
    prepTime: "5 min",
    cookTime: "5 min",
    ingredients: [
      "2 cups thick curd (dahi)",
      "2 cups chilled water",
      "½ tsp grated fresh ginger",
      "1 green chilli, finely chopped",
      "¼ tsp salt",
      "For tempering: 1 tsp coconut oil, ½ tsp mustard seeds, 1 sprig curry leaves, 1 dry red chilli",
      "Handful fresh coriander, finely chopped",
      "Ice cubes to serve",
    ],
    steps: [
      "Whisk curd well with chilled water until completely smooth and slightly frothy. There should be no lumps.",
      "Add ginger, green chilli, and salt. Mix well.",
      "Heat coconut oil in a small pan. Add mustard seeds and wait for them to splutter. Add curry leaves and dry red chilli. Fry for 30 seconds.",
      "Pour the hot tempering immediately into the buttermilk. Stir well — the tempering will sizzle as it hits the cold buttermilk.",
      "Add chopped coriander. Taste and adjust salt.",
      "Serve immediately over ice cubes in tall glasses. Alternatively, refrigerate for up to 1 day.",
    ],
    alternates: [
      {
        original: "Coconut oil (for tempering)",
        alternate: "Sesame oil or any neutral oil",
        reason:
          "Coconut oil gives an authentic South Indian flavour; sesame oil adds a nutty depth, or neutral oil is a simple substitute.",
      },
      {
        original: "Fresh green chilli",
        alternate: "¼ tsp black pepper powder",
        reason:
          "Green chilli gives a sharp heat; black pepper provides a milder, more aromatic warmth as a substitute.",
      },
      {
        original: "Thick curd",
        alternate: "Store-bought plain yogurt",
        reason:
          "Any plain yogurt (not flavoured) whisked with water makes perfect buttermilk; full-fat gives a richer result.",
      },
    ],
    tips: [
      "Blend the yogurt with water first until smooth, then add the tempering — prevents lumps.",
      "Use fresh curry leaves — dried ones have far less aroma.",
      "Adjust the consistency with more water; Neer Mor should be very thin and drinkable.",
      "Serve ice cold for the best refreshing effect.",
    ],
  },

  // ─── SALADS ──────────────────────────────────────────────────────────────────
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
    ],
    steps: [
      "If sprouting at home, soak moong overnight, drain, and leave covered in a damp cloth for 6–8 hours until small tails appear.",
      "Rinse sprouted moong well. You can use them raw or steam briefly (3 minutes) for a softer texture.",
      "Mix tamarind paste, lime juice, chaat masala, and salt to make the dressing.",
      "Combine sprouted moong, tomato, cucumber, onion, chilli, and coriander in a bowl.",
      "Pour the dressing over and toss gently.",
      "Taste and adjust salt, lime, or sweetness.",
      "Serve immediately.",
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
    ],
    tips: [
      "Sprout moong at home: soak overnight, then tie in a muslin cloth and leave in a warm place for 12–16 hours.",
      "Add lemon juice just before serving to keep the salad bright and prevent wilting.",
      "Blanch sprouts briefly if you prefer them less raw; a 30-second dip in boiling water makes them more digestible.",
      "Add roasted peanuts or seeds for crunch and protein.",
    ],
  },
  {
    id: BigInt(35),
    title: "Watermelon & Cheese Salad",
    cuisine: "Mediterranean",
    servings: 3,
    category: "Salads",
    description:
      "A strikingly beautiful summer salad that balances the sweetness of cold watermelon with salty crumbled cheese, fresh mint, and a drizzle of balsamic glaze. Simple, stunning, and ready in five minutes.",
    prepTime: "10 min",
    cookTime: "0 min",
    ingredients: [
      "3 cups seedless watermelon, cut into cubes or triangles",
      "100g feta cheese or paneer (lightly salted and crumbled)",
      "½ small red onion, very thinly sliced",
      "Handful fresh mint leaves",
      "1 tbsp extra virgin olive oil",
      "1 tbsp balsamic glaze or 1 tsp balsamic vinegar",
      "¼ tsp black pepper",
      "Salt (use sparingly — cheese is already salty)",
      "Optional: a handful of rocket leaves or baby spinach for base",
    ],
    steps: [
      "Chill the watermelon cubes in the refrigerator for at least 30 minutes before assembling.",
      "If using a green base, spread rocket or spinach leaves on a large plate.",
      "Arrange the cold watermelon cubes over the greens. Scatter thinly sliced red onion over the watermelon.",
      "Crumble the feta or paneer generously over the top.",
      "Tear mint leaves and scatter over the salad.",
      "Drizzle olive oil and balsamic glaze evenly. Season with a small pinch of salt and black pepper.",
      "Serve immediately — this salad does not keep well once dressed.",
    ],
    alternates: [
      {
        original: "Feta cheese",
        alternate: "Lightly salted crumbled paneer or strained hung curd",
        reason:
          "Feta is often unavailable in smaller towns; crumbled paneer with a pinch of salt gives the same salty contrast.",
      },
      {
        original: "Balsamic glaze",
        alternate: "1 tsp honey mixed with ½ tsp lemon juice",
        reason:
          "Balsamic glaze is imported and pricey; honey-lemon gives the same sweet-sour balance.",
      },
      {
        original: "Rocket leaves",
        alternate: "Baby spinach or torn lettuce leaves",
        reason:
          "Rocket has a peppery bite; baby spinach is widely available and makes a gentler base.",
      },
    ],
    tips: [
      "Chill the watermelon thoroughly before assembling — temperature contrast makes the salad more refreshing.",
      "Add the cheese just before serving so it doesn't absorb moisture and get soggy.",
      "A drizzle of extra virgin olive oil and a crack of black pepper elevates the simplest version.",
      "Mint leaves add a wonderful freshness — don't skip them.",
    ],
  },
  {
    id: BigInt(36),
    title: "Classic Waldorf Salad",
    cuisine: "American",
    servings: 4,
    category: "Salads",
    description:
      "The timeless New York classic — crisp apple, crunchy celery, plump raisins, and walnuts bound in a light creamy dressing. Simple, satisfying, and effortlessly elegant for any occasion.",
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      "2 large crisp apples (green or red), cored and diced",
      "2 stalks celery, thinly sliced",
      "½ cup walnut halves, lightly toasted",
      "¼ cup raisins or green seedless grapes, halved",
      "Juice of ½ lemon (to prevent apple browning)",
      "For dressing: 3 tbsp mayonnaise, 2 tbsp thick curd or hung curd, 1 tsp honey, 1 tsp lemon juice, salt and white pepper",
      "Lettuce leaves for serving (optional)",
    ],
    steps: [
      "Dice apples into bite-sized pieces and toss immediately with lemon juice to prevent browning.",
      "Whisk together mayonnaise, thick curd, honey, lemon juice, salt, and white pepper to make the dressing. Taste and adjust.",
      "In a large bowl, combine apples, celery, raisins (or grapes), and half the walnuts.",
      "Pour the dressing over the salad and toss gently until everything is well coated.",
      "Refrigerate for 15–20 minutes to let the flavours come together.",
      "Arrange lettuce leaves as cups on a serving platter if using.",
      "Spoon the Waldorf salad onto the lettuce. Top with remaining walnuts. Serve chilled.",
    ],
    alternates: [
      {
        original: "Celery",
        alternate: "Thinly sliced water chestnuts (singhara) or fennel bulb",
        reason:
          "Celery is not always available in Indian markets; water chestnuts give a similar crunch.",
      },
      {
        original: "Mayonnaise",
        alternate: "Hung curd (Greek yogurt) with a pinch of sugar",
        reason:
          "Full mayonnaise can be replaced with hung curd for a lighter, tangier, equally creamy dressing.",
      },
      {
        original: "Walnuts",
        alternate: "Toasted almonds or cashews",
        reason:
          "Walnuts are traditional; toasted cashews or almonds give an equally satisfying crunch and nutty flavour.",
      },
    ],
    tips: [
      "Toss apple pieces in lemon juice immediately after cutting to prevent browning.",
      "Toast the walnuts lightly in a dry pan for extra depth of flavour.",
      "Use Greek yogurt mixed with a little mayo for a lighter dressing.",
      "Chill for 20 minutes before serving so the flavours come together.",
    ],
  },
  {
    id: BigInt(37),
    title: "Indian Summer Salad",
    servings: 3,
    category: "Salads",
    description:
      "A bright, tangy, colourful salad made for Indian summers — cucumber, raw mango, pomegranate, and corn tossed with chaat masala, roasted cumin, and fresh coriander. A riot of textures and a burst of flavour in every bite.",
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      "1 medium cucumber, diced",
      "½ raw mango (kairi), finely chopped",
      "½ cup pomegranate seeds",
      "½ cup boiled sweet corn kernels",
      "1 small carrot, grated or julienned",
      "1 green chilli, finely chopped",
      "Juice of 1 lime",
      "½ tsp chaat masala",
      "½ tsp roasted cumin powder",
      "¼ tsp black salt (kala namak)",
      "Salt to taste",
      "Handful fresh coriander, roughly chopped",
      "1 tsp honey or jaggery (optional)",
    ],
    steps: [
      "Combine diced cucumber, raw mango, pomegranate seeds, sweet corn, and grated carrot in a large bowl.",
      "Add green chilli and fresh coriander. Toss lightly.",
      "In a small bowl, mix lime juice, chaat masala, cumin powder, black salt, regular salt, and honey to make the dressing.",
      "Pour the dressing over the salad and toss well to coat all ingredients evenly.",
      "Taste and adjust — it should be tangy, mildly spicy, and slightly sweet.",
      "Refrigerate for 10 minutes to let the flavours meld.",
      "Serve chilled as a side salad or as a light snack.",
    ],
    alternates: [
      {
        original: "Raw mango (kairi)",
        alternate: "Green apple or extra lime juice + a pinch of amchur",
        reason:
          "Raw mango is seasonal; tart green apple or amchur powder replicates its sourness in any season.",
      },
      {
        original: "Pomegranate seeds",
        alternate: "Red grapes (halved) or cranberries",
        reason:
          "Pomegranate adds colour and juicy bursts; halved grapes or dried cranberries provide a similar sweet-tart effect.",
      },
      {
        original: "Black salt (kala namak)",
        alternate: "Regular table salt",
        reason:
          "Black salt adds a distinctive sulphurous, mineral note that is characteristic of chaat; regular salt is a simpler alternative.",
      },
    ],
    tips: [
      "Use seasonal, peak-summer produce — ripe mangoes and crisp cucumbers make this salad shine.",
      "Add chaat masala just before serving so it doesn't draw out moisture.",
      "A handful of roasted makhana (lotus seeds) adds crunch and is very Indian.",
      "Balance sweet, sour, and spicy — taste and adjust before serving.",
    ],
  },

  // ─── ACCOMPANIMENTS ──────────────────────────────────────────────────────────
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
    ],
    steps: [
      "Whisk the curd until smooth and creamy. Add cold water if it's too thick — it should pour easily.",
      "Soak the boondi in warm water for 2–3 minutes to soften slightly. Drain and gently squeeze out excess water.",
      "Add the softened boondi to the whisked curd.",
      "Season with roasted cumin powder, red chilli powder, black salt, regular salt, and chaat masala.",
      "Stir gently to combine everything without breaking the boondi.",
      "Taste and adjust seasoning. Refrigerate for at least 15 minutes before serving.",
      "Garnish with fresh coriander and a dusting of extra cumin powder. Serve chilled.",
    ],
    alternates: [
      {
        original: "Plain boondi",
        alternate: "Finely diced cucumber or pomegranate seeds",
        reason: "If boondi is unavailable, cucumber adds crunch and freshness.",
      },
      {
        original: "Thick curd (dahi)",
        alternate: "Regular curd, drained for 30 minutes in a muslin cloth",
        reason:
          "Regular curd can be thickened easily at home by draining; store-bought hung curd also works.",
      },
    ],
    tips: [
      "Soak boondi in warm water for 5 minutes, then squeeze out water before adding to yogurt — this makes them soft inside while staying slightly crisp outside.",
      "Whisk yogurt smooth before adding boondi to get a creamy, lump-free raita.",
      "Chill before serving — cold raita is far more refreshing alongside spicy food.",
      "Plain boondi gives a milder raita; masala boondi adds extra spice.",
    ],
  },
  {
    id: BigInt(38),
    title: "Kimchi",
    cuisine: "Korean",
    servings: 8,
    category: "Accompaniments",
    description:
      "Korea's most iconic fermented side dish — Napa cabbage packed with gochugaru (Korean red pepper flakes), garlic, ginger, fish sauce, and spring onions, then left to ferment into a pungent, tangy, deeply complex condiment. A staple of Korean cuisine eaten with every meal.",
    prepTime: "40 min (+ 1–2 days fermentation)",
    cookTime: "0 min",
    ingredients: [
      "1 medium Napa cabbage (about 1 kg), quartered lengthwise",
      "3 tbsp coarse sea salt (for salting the cabbage)",
      "2 tbsp gochugaru (Korean red pepper flakes), or more to taste",
      "4–5 cloves garlic, minced",
      "1 tsp fresh ginger, grated",
      "2 tbsp fish sauce (or soy sauce for vegan)",
      "1 tsp sugar",
      "4–5 spring onions, cut into 2-inch pieces",
      "1 medium carrot, julienned",
      "1 tsp saeujeot (salted fermented shrimp) — optional, for deeper umami",
    ],
    steps: [
      "Cut the Napa cabbage into quarters lengthwise, then cut each quarter into 2-inch pieces. In a large bowl, toss cabbage with coarse sea salt, massaging the salt in well.",
      "Leave the salted cabbage at room temperature for 1–2 hours, tossing every 30 minutes, until it has wilted and released significant water.",
      "Rinse the cabbage 2–3 times under cold water to remove excess salt. Taste — it should be pleasantly salty but not overwhelmingly so. Drain in a colander for 30 minutes.",
      "In a bowl, combine gochugaru, minced garlic, grated ginger, fish sauce (or soy sauce), and sugar. Mix into a smooth red paste.",
      "Add spring onions and julienned carrot to the drained cabbage. Add the gochugaru paste and saeujeot (if using). Wearing gloves, mix and massage everything together thoroughly until every piece of cabbage is coated.",
      "Pack the kimchi tightly into a clean glass jar, pressing down firmly so there are no air pockets. Leave 1 inch of headspace — the kimchi will bubble and expand as it ferments.",
      "Leave the jar at room temperature for 1–2 days to ferment. Press the cabbage down once a day. It's ready when it smells tangy and tastes pleasantly sour.",
      "Seal and refrigerate. Kimchi improves with age — it deepens in flavour over weeks. Best consumed within 2–3 months.",
    ],
    alternates: [
      {
        original: "Napa cabbage",
        alternate: "Regular white cabbage (bandha gobhi)",
        reason:
          "Napa cabbage (Chinese cabbage) may be found in large supermarkets or Chinese stores; regular white cabbage is widely available and makes an excellent substitute.",
      },
      {
        original: "Gochugaru (Korean red pepper flakes)",
        alternate: "Kashmiri red chilli powder (use ½ the quantity)",
        reason:
          "Gochugaru is mildly spicy and smoky; Kashmiri red chilli is a good Indian substitute — use half the quantity as it can be more pungent.",
      },
      {
        original: "Fish sauce",
        alternate: "Soy sauce or tamari (for vegan)",
        reason:
          "Fish sauce is the traditional choice for umami; soy sauce makes it fully vegan and is easy to find in Indian markets.",
      },
      {
        original: "Saeujeot (salted fermented shrimp)",
        alternate: "Skip entirely, or add a small pinch of hing (asafoetida)",
        reason:
          "Saeujeot is a Korean pantry item not available in India; it can simply be left out without significantly affecting the final result.",
      },
    ],
    tips: [
      "Wear gloves when mixing the gochugaru paste — it stains fingers deeply and can irritate skin.",
      "The more you press the kimchi into the jar, the better it ferments; air pockets cause uneven fermentation.",
      "Taste after 1 day — if you prefer a milder tang, refrigerate early; for a stronger sour flavour, leave it another day.",
      "Kimchi rice, kimchi pancakes (kimchijeon), and kimchi fried rice are excellent uses for older, more sour kimchi.",
      "Always use clean, dry utensils when scooping kimchi from the jar to extend its shelf life.",
    ],
  },
  {
    id: BigInt(39),
    title: "Raw Mango Salsa (Kairi Salsa — Indian Salsa)",
    servings: 4,
    category: "Accompaniments",
    description:
      "A vibrant Indian twist on classic salsa — raw green mango tossed with tomatoes, onion, green chilli, and fresh coriander, spiked with chaat masala and lime. Sharp, tangy, and addictive, it pairs brilliantly with chips, papadums, or grilled dishes.",
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      "1 medium raw mango (kairi), peeled and finely diced",
      "2 medium tomatoes, finely chopped",
      "1 small red onion, finely chopped",
      "2 green chillies, finely chopped",
      "Handful fresh coriander, roughly chopped",
      "Juice of 1 lime",
      "½ tsp chaat masala",
      "¼ tsp roasted cumin powder",
      "¼ tsp black salt (kala namak)",
      "Salt to taste",
      "1 tsp jaggery or sugar (optional, to balance tartness)",
    ],
    steps: [
      "Peel the raw mango and finely dice the flesh. The mango should be sour and firm — not ripe.",
      "Finely chop tomatoes, red onion, and green chillies. Combine with the diced mango in a bowl.",
      "Add fresh coriander, lime juice, chaat masala, cumin powder, black salt, and regular salt.",
      "If the mango is very tart, add a small amount of jaggery or sugar to balance the sourness.",
      "Toss everything together gently. Taste and adjust lime, salt, or chilli.",
      "Rest for 10 minutes before serving — the flavours deepen as the salsa sits.",
      "Serve with papadums, nachos, multigrain chips, or as a side alongside any Indian main course.",
    ],
    alternates: [
      {
        original: "Raw mango (kairi)",
        alternate: "Tart green apple + 1 tsp lemon juice",
        reason:
          "Raw mango is seasonal; tart green apple with extra lemon juice replicates the required sourness and crunch.",
      },
      {
        original: "Black salt (kala namak)",
        alternate: "Regular sea salt",
        reason:
          "Black salt adds a distinctive tangy-mineral flavour characteristic of Indian chaat; regular salt is a simpler substitute.",
      },
      {
        original: "Chaat masala",
        alternate: "A pinch of amchur (dry mango powder) + cumin",
        reason:
          "Chaat masala is a blend of spices; amchur and cumin replicate its key tangy-savoury notes.",
      },
    ],
    tips: [
      "Use raw, unripe mango for the sharp tang — a semi-ripe mango will be too sweet.",
      "Rest the salsa for 15 minutes before serving so the flavours meld.",
      "Adjust green chilli carefully — raw mango salsa can get very spicy.",
      "Add fresh coriander leaves generously for an authentic Indian touch.",
    ],
  },
];
