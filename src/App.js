import React from 'react';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import axios from 'axios';

function App() {
  // dispatch-интсрумент для передачи даных в редакс
  const dispatch = useDispatch();

  React.useEffect(() => {
    // фетчу данные с фейкового бекэнда
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// использование connect-а
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filtes,
//   };
// };

// longhand
// const mapDispatchToProps = (dispatch) => {
//   return {
// // setPizza import as setPizzaAction
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// shorthand
// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
