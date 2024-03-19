import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="mx-auto mt-8 p-3 w-1/2 bg-blue-300 flex flex-col justify-center align-middle rounded-md">
      <h1 className="mx-auto mb-3 text-4xl px-9 border-b-orange-400 border-b-4">
        Todo List
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
