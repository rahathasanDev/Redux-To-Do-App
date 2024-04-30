
const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 ">
    <input type="checkbox" name='' id='' />
    <p className="font-semibold">Todo Title </p>
    <p>Times</p>
    <p>description</p>
    <div className="space-x-5">
      <button>DEL</button>
      <button>EDIT</button>
    </div>
  </div>
  );
};

export default TodoCard;