import axios from 'axios';

export const setLoaded = val => ({
  type: 'SET_LOADED',
  payload: val,
});

// асинхронный метод, возвращающий фукцию. Redux-thunk ловит его и выполняет анонимку, пробрасывая в неё необходимые аргументы
export const fetchPizzas = (sortBy, category) => dispatch => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }
        &_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});
