import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// мемоизирую компонент для избежания ререндера
const SortPopup = React.memo(({ activeSortType, onClickSortType, items }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const sortRef = useRef();
  const activeLabel = items.find(obj => obj.type === activeSortType).name;

  // при ререндере ссылка на функцию сохраняется и ререндера не будет
  // как в случае если передавать в онклик анонимную функцию
  const toggleVisiblePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  //  path содержит массив всех элементов (всплытие) дом-элементов по которым был клик
  const handleOutsideClick = e => {
    // e.path и его аналог для браузера firefox
    const path =
      e.path ||
      (e.composedPath && e.composedPath()) ||
      e.composedPath(e.target);
    if (!path.includes(sortRef.current)) {
      setPopupVisible(false);
    }
  };

  const onItemClick = type => {
    onClickSortType(type);
    setPopupVisible(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={isPopupVisible ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {isPopupVisible && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, i) => {
                return (
                  <li
                    className={activeSortType === obj.type ? 'active' : ''}
                    key={`${obj.type}_${i}`}
                    onClick={() => onItemClick(obj)}
                  >
                    {obj.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string,
  onClickSortType: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
