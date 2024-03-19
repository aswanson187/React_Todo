const TodoForm = () => {
  return (
    <form className="m-auto flex flex-row w-6/12 justify-between">
      <input className="h-11/12 my-auto px-2 rounded-md" />
      <button
        type="button"
        class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-1.5 text-center me-2 m-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {}}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
