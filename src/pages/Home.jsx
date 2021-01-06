import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  const onCategoryClick = name => {
    console.log(name);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClick={onCategoryClick}
        />

        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(obj => (
          <PizzaBlock pizza={obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
