import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import axios from 'axios';

// function App() {
//   React.useEffect(() => {
// axios
//   .get('http://localhost:3001/db.json')
//   .then(({ data }) => setPizzas(data.pizzas));
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact />
//         <Route path="/cart" component={Cart} exact />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:3001/db.json')
      .then(({ data }) => this.props.setPizzas(data.pizzas));
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filtes,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
