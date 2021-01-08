import React from 'react';
import PropTypes from 'prop-types';

// мемоизирую компонент для устранения ререндера
const Categories = React.memo(({ activeCategory, items, onCategoryClick }) => {
  return (
    <div>
      <div className="categories">
        <ul className="categories-list">
          <li
            onClick={() => onCategoryClick(null)}
            className={activeCategory === null ? 'active' : ''}
          >
            Все
          </li>
          {items &&
            items.map((item, i) => (
              <li
                className={activeCategory === i ? 'active' : ''}
                key={`${item}_${i}`}
                onClick={() => onCategoryClick(i)}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
