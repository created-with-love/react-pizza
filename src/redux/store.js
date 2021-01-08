// файл для хранения глобального store, доступ к которому
// будет осуществляться со всех компонентов
import { createStore, compose, applyMiddleware } from 'redux';

// библиотека redux - thunk проверяет что возвращает action - анонимную функцию,
// которая принимает диспатч или обьект.
// если возвращает анон. функцию - то библиотека сама добавляет в нее диспатч и передаст дальше, куда нужно
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// выбор расширения-посредника для редакса (или девтулс или от компоус - юзай функцию из редакса)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
