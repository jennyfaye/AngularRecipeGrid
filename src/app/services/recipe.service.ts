import { Injectable } from '@angular/core';
import { RecipeModel } from '../components/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[] = [
    {
      id: 1,
      name: "Shortbread Cookies",
      ingredients:  `• 1 cup (230g) unsalted butter, softened
• 1/2 cup (100g) granulated sugar
• 2 cups (250g) all-purpose flour
• 1/4 tsp salt`,
      imageUrl: "https://i.pinimg.com/736x/d2/10/bc/d210bc23e592294c3f554819acd91083.jpg"
    },
    {
      id: 2,
      name: "Lemon Bars",
      ingredients:  `• 1 cup flour
• 1/2 cup butter
• 1/4 cup sugar (for crust)
• 2 eggs
• 1/2 cup sugar (for filling)
• 1/4 cup lemon juice`,
      imageUrl: "https://i.pinimg.com/736x/03/a2/5e/03a25ef4322fe72603f7f98090fad9a3.jpg"
    },
    {
      id: 3,
      name: "Cheesecake Bars",
      ingredients:  `• 1 cup crushed graham crackers
• 1/4 cup butter
• 1 cup cream cheese
• 1/2 cup sugar`,
      imageUrl: "https://i.pinimg.com/736x/f0/1e/6d/f01e6d7cd28ed942151d5b0c060e56a4.jpg"
    },
    {
      id: 4,
      name: "Fudgy Brownies",
      ingredients:  `• 1/2 cup butter
• 1/2 cup cocoa powder
• 1 cup sugar
• 2 eggs`,
      imageUrl: "https://i.pinimg.com/736x/90/a6/09/90a609b55e57bee2a589a1ecf8a37b74.jpg"
    },
    {
      id: 5,
      name: "Cinnamon Rolls",
      ingredients:  `• 2 cups flour
• 3/4 cup milk
• 1/4 cup butter
• 2 tbsp cinnamon sugar`,
      imageUrl: "https://sallysbakingaddiction.com/wp-content/uploads/2021/03/homemade-overnight-cinnamon-rolls.jpg"
    },
    {
      id: 6,
      name: "Chocolate Chip Cookies",
      ingredients:  `• 1/2 cup butter
• 1/2 cup sugar
• 1 cup flour
• 1/2 cup chocolate chips`,
      imageUrl: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg"
    },
    {
      id: 7,
      name: "Banana Bread",
      ingredients:  `• 2 ripe bananas
• 1 cup flour
• 1/2 cup sugar
• 1 egg`,
      imageUrl: "https://i.pinimg.com/736x/10/9d/3d/109d3df2f1b9eb9ab8b4dab98cedc96c.jpg"
    },
    {
      id: 8,
      name: "Sugar Cookies",
      ingredients:  `• 1/2 cup butter
• 1/2 cup sugar
• 1 cup flour`,
      imageUrl: "https://i.pinimg.com/736x/8c/d0/10/8cd010fd9870c5447524b1d5ea35cdcf.jpg"
    },
    {
      id: 9,
      name: "Blueberry Muffins",
      ingredients:  `• 1 cup flour
• 1/2 cup sugar
• 1/2 cup milk
• 1/2 cup blueberries`,
      imageUrl: "https://i.pinimg.com/736x/be/d0/35/bed035d3b50a0128347cbcbe32000ffa.jpg"
    },
    {
      id: 10,
      name: "Vanilla Cupcakes",
      ingredients:  `• 1 cup flour
• 1/2 cup sugar
• 1/2 cup milk
• 1 egg`,
      imageUrl: "https://i.pinimg.com/736x/de/7c/c2/de7cc26014074224210924ddc1dacacc.jpg"
    }
  ];

  getRecipe(): RecipeModel[] {
    return this.recipes;
  }
}
