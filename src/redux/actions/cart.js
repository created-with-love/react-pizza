export const addPizzaToCart = pizzaObj => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj, // обьект пиццы хранит все нужное - id в т.ч.
});
