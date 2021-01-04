import React, { useState } from 'react';

export default function Categories({ items, onClick }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div>
      <div className="categories">
        <ul className="categories-list">
          <li
            onClick={e => {
              setActiveCategory(null);
              onClick(e.target.textContent);
            }}
            className={activeCategory === null ? 'active' : ''}
          >
            Все
          </li>
          {items.map((item, i) => (
            <li
              className={activeCategory === i ? 'active' : ''}
              key={`${item}_${i}`}
              onClick={() => {
                setActiveCategory(i);
                onClick(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
