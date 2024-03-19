const TodoItem = ({ item }) => {
  return (
    <>
      <div className="m-auto p-2 w-full text-center">
        <h2 className="text-2xl text-white">{item}</h2>
      </div>
      <hr className="w-1/4 m-auto mt-2 border-t-0 border-l-0 border-r-0 border-dotted border-y-4 border-x-4 border-b-slate-800" />
    </>
  );
};

export default TodoItem;
