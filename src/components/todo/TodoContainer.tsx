import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full rounded-xl p-5 h-[500px] space-y-5">
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
