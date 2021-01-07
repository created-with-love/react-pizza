import React, { useState } from 'react';

// мемоизирую компонент для устранения ререндера
const Categories = React.memo(({ items, onClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const onSelectItem = index => {
    setActiveCategory(index);
    onClick(index);
  };

  return (
    <div>
      <div className="categories">
        <ul className="categories-list">
          <li
            onClick={() => onSelectItem(null)}
            className={activeCategory === null ? 'active' : ''}
          >
            Все
          </li>
          {items &&
            items.map((item, i) => (
              <li
                className={activeCategory === i ? 'active' : ''}
                key={`${item}_${i}`}
                onClick={() => onSelectItem(i)}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

export default Categories;

// export default class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };

//   onSelectItem = index => {
//     this.setState({ activeItem: index });
//   };

//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <div>
//         <div className="categories">
//           <ul className="categories-list">
//             <li className="active">Все</li>
//             {items.map((item, i) => (
//               <li
//                 className={this.state.activeItem === i ? 'active' : ''}
//                 key={`${item}_${i}`}
//                 onClick={() => {
//                   this.onSelectItem(i);
//                   onClick(item);
//                 }}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
