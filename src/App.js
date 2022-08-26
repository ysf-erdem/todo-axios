import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App_header">Todo List</div>
      <i className="fas fa-cloud"></i>
      <div className="App">
        {/* <AddTodo /> */}
        <div className="small_header">Todos:</div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
