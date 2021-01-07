import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

// выношу данные для устранения их перезаписи и ререндера
const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  // dispatch-интсрумент для передачи даных в редакс
  const dispatch = useDispatch();

  // useSelector получает доступ к нашему хранилищу redux
  const items = useSelector(
    ({ pizzas }) => pizzas.items,
    // возвращая только конкретные нужные свойства со стейта мы страхуем себя от лишнего ререндера
    // который может быть если вытаскивать целый обьект со всеми свойствами (какое-то изменится = ререндер)
    // Так же лучше прокидывать детям пропсами инфу, чем исп-ть useSelector повторно в них
  );

  // запоминаю функцию для устранения ре-рендера
  const onCategoryClick = React.useCallback(
    index => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} onClick={onCategoryClick} />

        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(obj => <PizzaBlock pizza={obj} key={obj.id} />)}
      </div>
    </div>
  );
}

export default Home;
