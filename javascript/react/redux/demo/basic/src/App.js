import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./redux/actions";

// 监听
store.subscribe(() => console.log(store.getState()));

// 发起一系列 action
store.dispatch(addTodo("1"));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
