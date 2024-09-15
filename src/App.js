import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css"; // Add this line to import the CSS

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
