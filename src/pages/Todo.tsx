import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};
export default Todo;
