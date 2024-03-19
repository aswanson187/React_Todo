import TodoItem from "./TodoItem";
const DUMMY_DATA = [
  { id: 1, item: "Laundry", isComplete: false },
  { id: 2, item: "Dishes", isComplete: false },
  { id: 3, item: "Trash", isComplete: false },
];

const TodoList = () => {
  return (
    <ul className="flex flex-col content-center">
      {DUMMY_DATA.map((todo) => (
        <TodoItem key={todo.id} item={todo.item} />
      ))}
    </ul>
  );
};

export default TodoList;
