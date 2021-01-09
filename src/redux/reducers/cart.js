const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        // если в айтемс ничего нет - создается новый обьект, если есть -
        // распыляем старый массив обьектов и добавляем в него новый обьект
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzasArr = Object.values(newItems).reduce(
        (acc, el) => acc.concat(el),
        [],
      );
      const totalPrice = allPizzasArr.reduce(
        (acc, pizza) => acc + pizza.price,
        0,
      );

      console.log(allPizzasArr);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzasArr.length,
        totalPrice,
      };
    }

    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload,
      };

    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalPrice: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default cart;
