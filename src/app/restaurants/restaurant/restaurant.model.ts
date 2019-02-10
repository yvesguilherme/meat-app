export interface Restaurant {
  id: string;
  name: string;
  category: string;
  deliveryEstimate: string;
  rating: number;
  imagePath: string;
  hours?: string;
  about?: string;


  // "id": "burger-house",
  // "name": "Burger House",
  // "category": "Hamburgers",
  // "deliveryEstimate": "100m",
  // "rating": 3.5,
  // "imagePath": "assets/img/restaurants/burgerhouse.png",
  // "about": "40 anos se especializando em trash food.",
  // "hours": "Funciona todos os dias, de 10h às 22h"
}