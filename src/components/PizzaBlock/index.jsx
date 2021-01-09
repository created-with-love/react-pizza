import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

function PizzaBlock({ onClickAddPizza, addedPizzaCount, pizza }) {
  const { imageUrl, name, types, sizes, price, id } = pizza;
  const pizzaTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(() =>
    availableSizes.indexOf(sizes[0]),
  );

  const onSelectType = index => {
    setActiveType(index);
  };
  const onSelectSize = index => {
    setActiveSize(index);
  };

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: pizzaTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((type, i) => (
            <li
              key={`${type}-${i}`}
              className={classNames({
                active: activeType === i,
                disabled: !types.includes(i),
              })}
              onClick={() => onSelectType(i)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, i) => (
            <li
              key={`${size}-${i}`}
              className={classNames({
                active: activeSize === i,
                disabled: !sizes.includes(size),
              })}
              onClick={() => onSelectSize(i)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--add" onClick={handleAddPizza} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedPizzaCount ? <i> {addedPizzaCount} </i> : null}
        </Button>
      </div>
    </div>
  );
}

// const { imageUrl, name, types, sizes, price } = pizza;
PizzaBlock.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    addedPizzaCount: PropTypes.number,
  }),
};

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
  onClickAddPizza: PropTypes.func,
};

export default PizzaBlock;
