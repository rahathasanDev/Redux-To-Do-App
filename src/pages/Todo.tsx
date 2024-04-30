import TodoContainer from "@/components/todo/TodoContainer";
import { Container } from "lucide-react";


const Todo = () => {
  return (
    <Container>
      <h1>My Todos</h1>
      <h2>Todo container</h2>
      <div>
        <p>Rahat hasan</p>
        <h4>this is todo app using redux technology</h4>
      </div>
      <TodoContainer></TodoContainer>
    </Container>
  );
};
export default Todo;