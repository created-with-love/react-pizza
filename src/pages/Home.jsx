import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

// выношу данные для устранения их перезаписи и ререндера
const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'названию', type: 'name', order: 'asc' },
];

function Home() {
  // dispatch-интсрумент для передачи даных в редакс
  const dispatch = useDispatch();

  // useSelector получает доступ к нашему хранилищу redux
  const { items, isLoaded } = useSelector(
    ({ pizzas }) => pizzas,
    // возвращая только конкретные нужные свойства со стейта мы страхуем себя от лишнего ререндера
    // который может быть если вытаскивать целый обьект со всеми свойствами (какое-то изменится = ререндер)
    // Так же лучше прокидывать детям пропсами инфу, чем исп-ть useSelector повторно в них
  );
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // получаю и отправляю все пиццы в редакс
  React.useEffect(() => {
    // if (!items.length) {
    dispatch(fetchPizzas(sortBy, category));
    // }
  }, [category, sortBy]);

  // запоминаю функцию для устранения ре-рендера
  const onCategoryClick = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categories}
          onCategoryClick={onCategoryClick}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => <PizzaBlock pizza={obj} key={obj.id} />)
          : Array(12)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
