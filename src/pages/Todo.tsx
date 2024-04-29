import TodoContainer from "@/components/todo/TodoContainer";
import { Container } from "lucide-react";


const Todo = () => {
  return (
    <Container>
      <h1>My Todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;