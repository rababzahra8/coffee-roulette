import type { Recipe } from '../types'

export const RECIPES: Recipe[] = [
  {
    id: 'honey-cinnamon-latte',
    name: 'Honey Cinnamon Latte',
    ingredients: ['Espresso', 'Milk', 'Honey', 'Cinnamon'],
    instructions: ['Pull a double espresso shot.', 'Steam milk until silky microfoam forms.', 'Stir honey and cinnamon into the espresso.', 'Pour milk slowly, creating latte art if desired.', 'Dust with extra cinnamon on top.'],
    calories: 180, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'A cozy hug in a cup — warm honey meets aromatic cinnamon over velvety steamed milk.', emoji: '🍯',
  },
  {
    id: 'classic-cappuccino',
    name: 'Classic Cappuccino',
    ingredients: ['Espresso', 'Milk'],
    instructions: ['Brew a strong espresso shot.', 'Steam milk to create thick, dry foam.', 'Pour equal parts espresso, steamed milk, and foam.', 'Serve immediately in a pre-warmed cup.'],
    calories: 120, strength: 4, sweetness: 1, difficulty: 'Easy', prepTime: 4, temperature: 'Hot',
    tags: ['Easy', '4 mins', 'Hot'], description: 'The timeless Italian classic — bold espresso crowned with cloud-like foam.', emoji: '☕',
  },
  {
    id: 'iced-vanilla-latte',
    name: 'Iced Vanilla Latte',
    ingredients: ['Espresso', 'Milk', 'Ice', 'Vanilla', 'Sugar'],
    instructions: ['Fill a tall glass with ice.', 'Add vanilla syrup and sugar to the glass.', 'Pour in cold milk.', 'Slowly add freshly pulled espresso on top.', 'Stir gently and enjoy.'],
    calories: 160, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold'], description: 'Cool, creamy, and sweet — the perfect afternoon pick-me-up.', emoji: '🧊',
  },
  {
    id: 'mocha-delight',
    name: 'Mocha Delight',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Cocoa', 'Whipped Cream'],
    instructions: ['Melt chocolate into warm milk.', 'Pull a double espresso shot.', 'Combine espresso with chocolate milk.', 'Top with whipped cream and cocoa dusting.'],
    calories: 280, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot', 'Sweet'], description: 'Where coffee meets dessert — rich chocolate swirled through bold espresso.', emoji: '🍫',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    ingredients: ['Espresso', 'Milk', 'Caramel', 'Vanilla', 'Whipped Cream'],
    instructions: ['Drizzle caramel inside the cup.', 'Steam milk with vanilla.', 'Pour milk into the cup.', 'Mark with espresso shots on top.', 'Finish with caramel drizzle and whipped cream.'],
    calories: 250, strength: 3, sweetness: 5, difficulty: 'Medium', prepTime: 7, temperature: 'Hot',
    tags: ['Medium', '7 mins', 'Hot', 'Sweet'], description: 'Layers of caramel sweetness marked with a bold espresso signature.', emoji: '🍮',
  },
  {
    id: 'oat-milk-flat-white',
    name: 'Oat Milk Flat White',
    ingredients: ['Espresso', 'Oat Milk'],
    instructions: ['Pull a double ristretto shot.', 'Steam oat milk to silky microfoam.', 'Pour milk in a tight swirl over espresso.', 'Serve in a small ceramic cup.'],
    calories: 110, strength: 4, sweetness: 2, difficulty: 'Medium', prepTime: 5, temperature: 'Hot',
    tags: ['Medium', '5 mins', 'Hot', 'Strong'], description: 'Australian-inspired perfection — intense coffee meets creamy oat milk.', emoji: '🌾',
  },
  {
    id: 'iced-caramel-frappe',
    name: 'Iced Caramel Frappé',
    ingredients: ['Instant Coffee', 'Milk', 'Ice', 'Caramel', 'Whipped Cream', 'Sugar'],
    instructions: ['Blend ice, instant coffee, milk, and sugar until smooth.', 'Pour into a chilled glass.', 'Drizzle caramel generously.', 'Top with whipped cream and more caramel.'],
    calories: 320, strength: 2, sweetness: 5, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'Frosty, blended bliss with ribbons of golden caramel throughout.', emoji: '🥤',
  },
  {
    id: 'cinnamon-dolce-latte',
    name: 'Cinnamon Dolce Latte',
    ingredients: ['Espresso', 'Milk', 'Cinnamon', 'Brown Sugar', 'Whipped Cream'],
    instructions: ['Make cinnamon-brown sugar syrup by dissolving sugar in warm water with cinnamon.', 'Pull espresso into the syrup.', 'Steam milk and pour over.', 'Top with whipped cream and cinnamon dust.'],
    calories: 220, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot'], description: 'Spiced sweetness in every sip — like a cinnamon roll in liquid form.', emoji: '🎋',
  },
  {
    id: 'almond-honey-cold-brew',
    name: 'Almond Honey Cold Brew',
    ingredients: ['Instant Coffee', 'Almond Milk', 'Honey', 'Ice'],
    instructions: ['Dissolve instant coffee in a small amount of hot water, then cool.', 'Fill glass with ice.', 'Add almond milk and honey.', 'Pour coffee over and stir gently.'],
    calories: 90, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold'], description: 'Light, nutty, and naturally sweet — refreshment without the guilt.', emoji: '🌰',
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic',
    ingredients: ['Espresso', 'Ice', 'Sugar'],
    instructions: ['Fill a glass with ice.', 'Add a teaspoon of sugar.', 'Pour tonic water (or sparkling water) over ice.', 'Float a fresh espresso shot on top.', 'Stir once and sip immediately.'],
    calories: 45, strength: 4, sweetness: 2, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold', 'Strong'], description: 'Unexpectedly refreshing — bright espresso meets effervescent sparkle.', emoji: '✨',
  },
  {
    id: 'brown-sugar-shaken-espresso',
    name: 'Brown Sugar Shaken Espresso',
    ingredients: ['Espresso', 'Oat Milk', 'Brown Sugar', 'Ice', 'Cinnamon'],
    instructions: ['Dissolve brown sugar in hot espresso.', 'Add ice to a shaker and pour espresso over.', 'Shake vigorously for 15 seconds.', 'Strain into a glass with oat milk.', 'Sprinkle cinnamon on top.'],
    calories: 140, strength: 4, sweetness: 3, difficulty: 'Medium', prepTime: 5, temperature: 'Cold',
    tags: ['Medium', '5 mins', 'Cold', 'Strong'], description: 'The viral sensation — shaken, not stirred, with caramelized brown sugar depth.', emoji: '🧂',
  },
  {
    id: 'vanilla-almond-latte',
    name: 'Vanilla Almond Latte',
    ingredients: ['Espresso', 'Almond Milk', 'Vanilla', 'Honey'],
    instructions: ['Warm almond milk with vanilla.', 'Pull a double espresso.', 'Combine in a mug with a drizzle of honey.', 'Stir and serve warm.'],
    calories: 130, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Delicate almond notes dance with sweet vanilla in this gentle latte.', emoji: '🌸',
  },
  {
    id: 'chocolate-orange-mocha',
    name: 'Chocolate Orange Mocha',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Cocoa'],
    instructions: ['Zest orange peel into warm milk.', 'Melt dark chocolate into the milk.', 'Pull espresso and combine.', 'Top with cocoa powder and orange zest.'],
    calories: 260, strength: 3, sweetness: 4, difficulty: 'Medium', prepTime: 8, temperature: 'Hot',
    tags: ['Medium', '8 mins', 'Hot'], description: 'A sophisticated pairing — rich chocolate brightened by citrus zest.', emoji: '🍊',
  },
  {
    id: 'simple-instant-coffee',
    name: 'Classic Instant Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Sugar'],
    instructions: ['Add instant coffee and sugar to a mug.', 'Pour a splash of hot water and stir to dissolve.', 'Top with warm steamed or microwaved milk.', 'Adjust sweetness to taste.'],
    calories: 80, strength: 2, sweetness: 3, difficulty: 'Easy', prepTime: 2, temperature: 'Hot',
    tags: ['Easy', '2 mins', 'Hot'], description: 'Quick, comforting, and always reliable — the everyday hero.', emoji: '⚡',
  },
  {
    id: 'whipped-dalgona',
    name: 'Whipped Dalgona Coffee',
    ingredients: ['Instant Coffee', 'Sugar', 'Milk', 'Ice'],
    instructions: ['Whisk equal parts instant coffee, sugar, and hot water until fluffy peaks form.', 'Fill a glass with ice and cold milk.', 'Spoon the whipped coffee on top.', 'Stir before drinking for full flavor.'],
    calories: 200, strength: 3, sweetness: 4, difficulty: 'Medium', prepTime: 8, temperature: 'Cold',
    tags: ['Medium', '8 mins', 'Cold'], description: 'Cloud-like coffee foam atop icy milk — Instagram-worthy and delicious.', emoji: '☁️',
  },
  {
    id: 'caramel-iced-latte',
    name: 'Caramel Iced Latte',
    ingredients: ['Espresso', 'Milk', 'Ice', 'Caramel', 'Whipped Cream'],
    instructions: ['Drizzle caramel in a tall glass.', 'Add ice and cold milk.', 'Pour espresso over the milk.', 'Top with whipped cream and caramel drizzle.'],
    calories: 240, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'Sweet caramel threads through every layer of this icy indulgence.', emoji: '🍯',
  },
  {
    id: 'cocoa-espresso-shake',
    name: 'Cocoa Espresso Shake',
    ingredients: ['Espresso', 'Milk', 'Cocoa', 'Ice', 'Sugar', 'Whipped Cream'],
    instructions: ['Blend espresso, milk, cocoa, sugar, and ice until thick.', 'Pour into a chilled glass.', 'Top with whipped cream and cocoa dust.', 'Serve with a straw.'],
    calories: 220, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Thick, chocolatey, and energizing — dessert meets coffee.', emoji: '🥤',
  },
  {
    id: 'honey-lavender-latte',
    name: 'Honey Lavender Latte',
    ingredients: ['Espresso', 'Milk', 'Honey'],
    instructions: ['Steep dried lavender in warm milk for 5 minutes, then strain.', 'Pull a double espresso.', 'Stir honey into the lavender milk.', 'Combine with espresso and enjoy the floral notes.'],
    calories: 150, strength: 2, sweetness: 3, difficulty: 'Medium', prepTime: 10, temperature: 'Hot',
    tags: ['Medium', '10 mins', 'Hot'], description: 'Floral elegance meets golden honey in this calming latte.', emoji: '💜',
  },
  {
    id: 'strong-black-coffee',
    name: 'Bold Black Coffee',
    ingredients: ['Espresso'],
    instructions: ['Pull a double espresso shot.', 'Serve immediately in a pre-warmed demitasse.', 'Savor the pure, unadulterated flavor.'],
    calories: 5, strength: 5, sweetness: 0, difficulty: 'Easy', prepTime: 2, temperature: 'Hot',
    tags: ['Easy', '2 mins', 'Hot', 'Strong'], description: 'Pure coffee intensity — no distractions, just pure espresso power.', emoji: '💪',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Ice', 'Whipped Cream'],
    instructions: ['Mix melted chocolate with cold milk.', 'Fill a glass with ice.', 'Pour chocolate milk over ice.', 'Add espresso and stir.', 'Top with whipped cream.'],
    calories: 270, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 5, temperature: 'Cold',
    tags: ['Easy', '5 mins', 'Cold', 'Sweet'], description: 'Chocolate and coffee on ice — the ultimate sweet cold brew.', emoji: '🧊',
  },
  {
    id: 'cinnamon-iced-coffee',
    name: 'Cinnamon Iced Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Ice', 'Cinnamon', 'Honey'],
    instructions: ['Brew strong instant coffee and let cool.', 'Fill glass with ice.', 'Add milk, honey, and a pinch of cinnamon.', 'Pour coffee over and stir well.'],
    calories: 100, strength: 2, sweetness: 3, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Spiced and chilled — cinnamon warmth in a refreshing cold cup.', emoji: '❄️',
  },
  {
    id: 'vanilla-cappuccino',
    name: 'Vanilla Cappuccino',
    ingredients: ['Espresso', 'Milk', 'Vanilla', 'Sugar'],
    instructions: ['Add vanilla and sugar to the cup.', 'Pull a double espresso over the vanilla.', 'Steam milk to thick foam.', 'Pour foam generously over espresso.'],
    calories: 140, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Classic cappuccino elevated with a whisper of vanilla sweetness.', emoji: '🤍',
  },
  {
    id: 'caramel-espresso-shot',
    name: 'Caramel Espresso Shot',
    ingredients: ['Espresso', 'Caramel'],
    instructions: ['Coat the inside of a small cup with caramel.', 'Pull a fresh espresso shot directly into the caramel.', 'Stir quickly and drink in one go.'],
    calories: 60, strength: 5, sweetness: 3, difficulty: 'Easy', prepTime: 2, temperature: 'Hot',
    tags: ['Easy', '2 mins', 'Hot', 'Strong'], description: 'A quick caramel-kissed jolt of pure espresso energy.', emoji: '⚡',
  },
  {
    id: 'oat-milk-mocha',
    name: 'Oat Milk Mocha',
    ingredients: ['Espresso', 'Oat Milk', 'Cocoa', 'Sugar'],
    instructions: ['Mix cocoa and sugar into warm oat milk.', 'Pull a double espresso.', 'Combine and stir until smooth.', 'Optional: top with cocoa powder.'],
    calories: 190, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Creamy oat milk meets rich cocoa for a plant-based mocha dream.', emoji: '🌱',
  },
  {
    id: 'honey-espresso-tonic',
    name: 'Honey Espresso Sparkler',
    ingredients: ['Espresso', 'Honey', 'Ice'],
    instructions: ['Dissolve honey in a splash of warm water.', 'Fill a glass with ice.', 'Add honey water and top with sparkling water.', 'Float espresso on top and stir gently.'],
    calories: 55, strength: 4, sweetness: 2, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold', 'Strong'], description: 'Effervescent and bold with a touch of natural honey sweetness.', emoji: '🫧',
  },
  {
    id: 'chocolate-cinnamon-latte',
    name: 'Chocolate Cinnamon Latte',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Cinnamon', 'Whipped Cream'],
    instructions: ['Melt chocolate into steamed milk with cinnamon.', 'Pull espresso and pour into the chocolate milk.', 'Stir well and top with whipped cream.', 'Dust with cinnamon.'],
    calories: 290, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot', 'Sweet'], description: 'Decadent chocolate spiced with cinnamon — pure indulgence.', emoji: '🍫',
  },
  {
    id: 'iced-oat-latte',
    name: 'Iced Oat Latte',
    ingredients: ['Espresso', 'Oat Milk', 'Ice', 'Vanilla'],
    instructions: ['Fill a glass with ice.', 'Add oat milk and a drop of vanilla.', 'Pour freshly pulled espresso over.', 'Stir and enjoy.'],
    calories: 100, strength: 3, sweetness: 2, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold'], description: 'Clean, creamy, and plant-based — simplicity at its finest.', emoji: '🌾',
  },
  {
    id: 'brown-sugar-latte',
    name: 'Brown Sugar Latte',
    ingredients: ['Espresso', 'Milk', 'Brown Sugar', 'Cinnamon'],
    instructions: ['Dissolve brown sugar in the bottom of your cup.', 'Pull espresso directly onto the sugar.', 'Steam milk and pour over.', 'Sprinkle with cinnamon.'],
    calories: 170, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Caramelized brown sugar creates a deep, molasses-like sweetness.', emoji: '🟤',
  },
  {
    id: 'whipped-vanilla-frappe',
    name: 'Whipped Vanilla Frappé',
    ingredients: ['Instant Coffee', 'Milk', 'Vanilla', 'Ice', 'Whipped Cream', 'Sugar'],
    instructions: ['Blend instant coffee, milk, vanilla, sugar, and ice.', 'Pour into a tall glass.', 'Top with generous whipped cream.', 'Drizzle with vanilla if desired.'],
    calories: 250, strength: 2, sweetness: 5, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'Blended vanilla bliss topped with a mountain of whipped cream.', emoji: '🏔️',
  },
  {
    id: 'almond-mocha',
    name: 'Almond Mocha',
    ingredients: ['Espresso', 'Almond Milk', 'Cocoa', 'Sugar'],
    instructions: ['Warm almond milk and whisk in cocoa and sugar.', 'Pull a double espresso.', 'Combine and stir until smooth.', 'Serve in a warm mug.'],
    calories: 160, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Nutty almond milk pairs beautifully with rich cocoa notes.', emoji: '🌰',
  },
  {
    id: 'espresso-affogato-style',
    name: 'Espresso Affogato Style',
    ingredients: ['Espresso', 'Whipped Cream', 'Caramel'],
    instructions: ['Add a scoop of whipped cream to a small bowl or cup.', 'Pull a hot espresso shot.', 'Pour espresso directly over the cream.', 'Drizzle with caramel and serve immediately.'],
    calories: 150, strength: 4, sweetness: 4, difficulty: 'Easy', prepTime: 3, temperature: 'Hot',
    tags: ['Easy', '3 mins', 'Hot'], description: 'Italian-inspired — hot espresso meets cold cream in perfect contrast.', emoji: '🍨',
  },
  {
    id: 'cinnamon-honey-iced-latte',
    name: 'Cinnamon Honey Iced Latte',
    ingredients: ['Espresso', 'Milk', 'Ice', 'Honey', 'Cinnamon'],
    instructions: ['Mix honey and cinnamon in warm milk until dissolved.', 'Let cool slightly, then pour over ice.', 'Add espresso on top.', 'Stir and enjoy.'],
    calories: 130, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Golden honey and warm cinnamon over ice — unexpectedly harmonious.', emoji: '🍯',
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    ingredients: ['Espresso'],
    instructions: ['Grind fresh coffee beans finely.', 'Pull a double shot with 18g coffee in 36 seconds.', 'Serve in a demitasse with a glass of water.'],
    calories: 10, strength: 5, sweetness: 0, difficulty: 'Medium', prepTime: 3, temperature: 'Hot',
    tags: ['Medium', '3 mins', 'Hot', 'Strong'], description: 'For the purists — double the shot, double the intensity.', emoji: '🔥',
  },
  {
    id: 'caramel-cocoa-latte',
    name: 'Caramel Cocoa Latte',
    ingredients: ['Espresso', 'Milk', 'Caramel', 'Cocoa', 'Whipped Cream'],
    instructions: ['Stir cocoa into steamed milk.', 'Pull espresso and add to milk.', 'Drizzle caramel throughout.', 'Top with whipped cream and cocoa dust.'],
    calories: 270, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot', 'Sweet'], description: 'Two indulgences in one — caramel richness meets chocolate depth.', emoji: '🎠',
  },
  {
    id: 'instant-iced-coffee',
    name: 'Quick Iced Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Ice', 'Sugar'],
    instructions: ['Dissolve instant coffee and sugar in a little hot water.', 'Fill a glass with ice.', 'Add cold milk.', 'Pour coffee mixture over and stir.'],
    calories: 70, strength: 2, sweetness: 3, difficulty: 'Easy', prepTime: 2, temperature: 'Cold',
    tags: ['Easy', '2 mins', 'Cold'], description: 'The fastest route to iced coffee satisfaction.', emoji: '⏱️',
  },
  {
    id: 'vanilla-honey-latte',
    name: 'Vanilla Honey Latte',
    ingredients: ['Espresso', 'Milk', 'Vanilla', 'Honey'],
    instructions: ['Warm milk with vanilla extract.', 'Stir honey into freshly pulled espresso.', 'Pour steamed milk over espresso.', 'Drizzle extra honey on top.'],
    calories: 160, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Two natural sweeteners unite in this fragrant, golden latte.', emoji: '🌼',
  },
  {
    id: 'chocolate-espresso-shake',
    name: 'Chocolate Espresso Shake',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Ice', 'Whipped Cream'],
    instructions: ['Blend cold espresso, milk, melted chocolate, and ice.', 'Pour into a chilled glass.', 'Top with whipped cream and chocolate shavings.'],
    calories: 300, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 5, temperature: 'Cold',
    tags: ['Easy', '5 mins', 'Cold', 'Sweet'], description: 'A milkshake meets espresso — thick, rich, and utterly satisfying.', emoji: '🍦',
  },
  {
    id: 'cinnamon-cappuccino',
    name: 'Cinnamon Cappuccino',
    ingredients: ['Espresso', 'Milk', 'Cinnamon', 'Sugar'],
    instructions: ['Dust cinnamon and sugar in the cup.', 'Pull espresso over the spices.', 'Steam milk to thick, dry foam.', 'Spoon foam generously on top.', 'Finish with cinnamon dust.'],
    calories: 130, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Spiced foam atop bold espresso — warmth in every sip.', emoji: '🍂',
  },
  {
    id: 'oat-caramel-latte',
    name: 'Oat Caramel Latte',
    ingredients: ['Espresso', 'Oat Milk', 'Caramel', 'Cinnamon'],
    instructions: ['Drizzle caramel in the cup.', 'Steam oat milk with a pinch of cinnamon.', 'Pull espresso and pour over milk.', 'Swirl with more caramel.'],
    calories: 200, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Plant-based caramel comfort with a hint of cinnamon spice.', emoji: '🌾',
  },
  {
    id: 'iced-chocolate-coffee',
    name: 'Iced Chocolate Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Chocolate', 'Ice'],
    instructions: ['Mix melted chocolate with cold milk.', 'Dissolve instant coffee in hot water and cool.', 'Fill glass with ice.', 'Layer chocolate milk and coffee.', 'Stir before drinking.'],
    calories: 200, strength: 2, sweetness: 4, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'Chilled chocolate coffee — like a frozen candy bar in a cup.', emoji: '🍫',
  },
  {
    id: 'espresso-con-panna',
    name: 'Espresso Con Panna',
    ingredients: ['Espresso', 'Whipped Cream'],
    instructions: ['Pull a single or double espresso shot.', 'Top with a generous dollop of fresh whipped cream.', 'Serve immediately without stirring.'],
    calories: 80, strength: 4, sweetness: 2, difficulty: 'Easy', prepTime: 2, temperature: 'Hot',
    tags: ['Easy', '2 mins', 'Hot', 'Strong'], description: 'Espresso "with cream" — simple Italian elegance.', emoji: '👑',
  },
  {
    id: 'honey-milk-coffee',
    name: 'Honey Milk Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Honey'],
    instructions: ['Dissolve instant coffee in hot water.', 'Warm milk and stir in honey.', 'Combine coffee and honey milk.', 'Serve warm and comforting.'],
    calories: 120, strength: 2, sweetness: 3, difficulty: 'Easy', prepTime: 3, temperature: 'Hot',
    tags: ['Easy', '3 mins', 'Hot'], description: 'Gentle and soothing — honey-sweetened comfort in a mug.', emoji: '🐝',
  },
  {
    id: 'caramel-cinnamon-latte',
    name: 'Caramel Cinnamon Latte',
    ingredients: ['Espresso', 'Milk', 'Caramel', 'Cinnamon', 'Whipped Cream'],
    instructions: ['Mix caramel and cinnamon into steamed milk.', 'Pull a double espresso.', 'Pour espresso into the spiced caramel milk.', 'Top with whipped cream and cinnamon.'],
    calories: 260, strength: 3, sweetness: 5, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot', 'Sweet'], description: 'Fall flavors year-round — caramel and cinnamon in perfect harmony.', emoji: '🍂',
  },
  {
    id: 'almond-iced-latte',
    name: 'Almond Iced Latte',
    ingredients: ['Espresso', 'Almond Milk', 'Ice', 'Vanilla'],
    instructions: ['Fill a glass with ice.', 'Add almond milk and vanilla.', 'Pour espresso over the top.', 'Stir gently and serve.'],
    calories: 80, strength: 3, sweetness: 2, difficulty: 'Easy', prepTime: 3, temperature: 'Cold',
    tags: ['Easy', '3 mins', 'Cold'], description: 'Light and nutty — the perfect dairy-free iced pick-me-up.', emoji: '🧊',
  },
  {
    id: 'mocha-cappuccino',
    name: 'Mocha Cappuccino',
    ingredients: ['Espresso', 'Milk', 'Cocoa', 'Sugar'],
    instructions: ['Mix cocoa and sugar into the cup.', 'Pull espresso over the cocoa mixture.', 'Steam milk to thick foam.', 'Pour with a thick cap of foam.', 'Dust with cocoa.'],
    calories: 150, strength: 4, sweetness: 3, difficulty: 'Medium', prepTime: 6, temperature: 'Hot',
    tags: ['Medium', '6 mins', 'Hot'], description: 'The best of both worlds — mocha richness in cappuccino form.', emoji: '☕',
  },
  {
    id: 'brown-sugar-iced-coffee',
    name: 'Brown Sugar Iced Coffee',
    ingredients: ['Espresso', 'Milk', 'Brown Sugar', 'Ice'],
    instructions: ['Dissolve brown sugar in hot espresso.', 'Let cool for a moment.', 'Fill glass with ice and cold milk.', 'Pour sweetened espresso over.', 'Stir well.'],
    calories: 120, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Toffee-like brown sugar sweetness over crisp iced coffee.', emoji: '🧊',
  },
  {
    id: 'vanilla-cocoa-latte',
    name: 'Vanilla Cocoa Latte',
    ingredients: ['Espresso', 'Milk', 'Vanilla', 'Cocoa', 'Sugar'],
    instructions: ['Whisk cocoa and sugar into warm milk with vanilla.', 'Pull a double espresso.', 'Combine and stir until frothy.', 'Top with a cocoa dusting.'],
    calories: 180, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Vanilla softens rich cocoa in this balanced, comforting latte.', emoji: '🤎',
  },
  {
    id: 'whipped-caramel-coffee',
    name: 'Whipped Caramel Coffee',
    ingredients: ['Instant Coffee', 'Caramel', 'Milk', 'Whipped Cream', 'Ice'],
    instructions: ['Blend instant coffee with caramel and a splash of milk.', 'Fill glass with ice.', 'Pour blended coffee over ice.', 'Top with whipped cream and caramel drizzle.'],
    calories: 280, strength: 2, sweetness: 5, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'Caramel lovers rejoice — this one is unapologetically sweet.', emoji: '🍮',
  },
  {
    id: 'espresso-milk-split',
    name: 'Espresso Milk Split',
    ingredients: ['Espresso', 'Milk'],
    instructions: ['Pour cold milk into a small glass.', 'Slowly float a hot espresso shot on top.', 'Drink without stirring to enjoy the layers.', 'Stir halfway for a latte effect.'],
    calories: 60, strength: 4, sweetness: 1, difficulty: 'Easy', prepTime: 2, temperature: 'Hot',
    tags: ['Easy', '2 mins', 'Hot', 'Strong'], description: 'Beautiful layers of hot espresso over cold milk — a visual treat.', emoji: '🎨',
  },
  {
    id: 'cinnamon-vanilla-iced-latte',
    name: 'Cinnamon Vanilla Iced Latte',
    ingredients: ['Espresso', 'Milk', 'Ice', 'Vanilla', 'Cinnamon', 'Honey'],
    instructions: ['Mix vanilla, cinnamon, and honey in warm milk.', 'Cool slightly, then pour over ice.', 'Add espresso on top.', 'Stir and enjoy the spiced sweetness.'],
    calories: 140, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Spiced vanilla perfection served over ice — refreshing and aromatic.', emoji: '✨',
  },
  {
    id: 'chocolate-honey-latte',
    name: 'Chocolate Honey Latte',
    ingredients: ['Espresso', 'Milk', 'Chocolate', 'Honey', 'Cinnamon'],
    instructions: ['Melt chocolate into warm milk with honey.', 'Add a pinch of cinnamon.', 'Pull espresso and combine.', 'Stir until smooth and serve.'],
    calories: 240, strength: 3, sweetness: 4, difficulty: 'Easy', prepTime: 6, temperature: 'Hot',
    tags: ['Easy', '6 mins', 'Hot'], description: 'Natural honey sweetens rich chocolate in this golden latte.', emoji: '🍯',
  },
  {
    id: 'oat-vanilla-latte',
    name: 'Oat Vanilla Latte',
    ingredients: ['Espresso', 'Oat Milk', 'Vanilla', 'Cinnamon'],
    instructions: ['Steam oat milk with vanilla and a pinch of cinnamon.', 'Pull a double espresso.', 'Pour milk over espresso in a slow stream.', 'Dust with cinnamon.'],
    calories: 120, strength: 3, sweetness: 3, difficulty: 'Easy', prepTime: 5, temperature: 'Hot',
    tags: ['Easy', '5 mins', 'Hot'], description: 'Creamy oat milk enhanced with vanilla — smooth and satisfying.', emoji: '🌾',
  },
  {
    id: 'iced-espresso-milk',
    name: 'Iced Espresso & Milk',
    ingredients: ['Espresso', 'Milk', 'Ice', 'Sugar'],
    instructions: ['Fill a glass with ice.', 'Add cold milk and sugar.', 'Pour hot espresso over ice.', 'Stir quickly and enjoy.'],
    calories: 90, strength: 4, sweetness: 2, difficulty: 'Easy', prepTime: 2, temperature: 'Cold',
    tags: ['Easy', '2 mins', 'Cold', 'Strong'], description: 'Minimal ingredients, maximum refreshment — espresso on ice.', emoji: '🧊',
  },
  {
    id: 'caramel-vanilla-frappe',
    name: 'Caramel Vanilla Frappé',
    ingredients: ['Instant Coffee', 'Milk', 'Caramel', 'Vanilla', 'Ice', 'Whipped Cream'],
    instructions: ['Blend instant coffee, milk, caramel, vanilla, and ice.', 'Pour into a tall chilled glass.', 'Top with whipped cream.', 'Drizzle caramel in a spiral pattern.'],
    calories: 310, strength: 2, sweetness: 5, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold', 'Sweet'], description: 'The ultimate sweet treat — blended, topped, and drizzled to perfection.', emoji: '🎡',
  },
  {
    id: 'honey-cinnamon-iced-coffee',
    name: 'Honey Cinnamon Iced Coffee',
    ingredients: ['Instant Coffee', 'Milk', 'Honey', 'Cinnamon', 'Ice'],
    instructions: ['Brew strong instant coffee and cool.', 'Mix honey and cinnamon into cold milk.', 'Fill glass with ice.', 'Pour coffee and milk mixture together.', 'Stir well.'],
    calories: 110, strength: 2, sweetness: 3, difficulty: 'Easy', prepTime: 4, temperature: 'Cold',
    tags: ['Easy', '4 mins', 'Cold'], description: 'Naturally sweetened iced coffee with a warm cinnamon kick.', emoji: '🍯',
  },
]

export function getRandomRecipe(available?: string[]): Recipe {
  let pool = RECIPES
  if (available && available.length > 0) {
    const availableLower = available.map((a) => a.toLowerCase())
    const matching = RECIPES.filter((r) =>
      r.ingredients.every((ing) =>
        availableLower.includes(ing.toLowerCase())
      )
    )
    if (matching.length > 0) pool = matching
    else {
      const partial = RECIPES.filter((r) =>
        r.ingredients.filter((ing) =>
          availableLower.includes(ing.toLowerCase())
        ).length >= Math.ceil(r.ingredients.length * 0.6)
      )
      if (partial.length > 0) pool = partial
    }
  }
  return pool[Math.floor(Math.random() * pool.length)]
}

export function filterRecipes(
  recipes: Recipe[],
  query: string,
  filter: string
): Recipe[] {
  let filtered = recipes
  if (query) {
    const q = query.toLowerCase()
    filtered = filtered.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
    )
  }
  switch (filter) {
    case 'hot':
      return filtered.filter((r) => r.temperature === 'Hot')
    case 'cold':
      return filtered.filter((r) => r.temperature === 'Cold')
    case 'sweet':
      return filtered.filter((r) => r.sweetness >= 4)
    case 'strong':
      return filtered.filter((r) => r.strength >= 4)
    default:
      return filtered
  }
}
