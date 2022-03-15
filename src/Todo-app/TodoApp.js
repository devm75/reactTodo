import { useSelector, useDispatch } from "react-redux";
import { Heading } from "./Header";
import { TodoList } from "./Todo-List";
import { InputForm, AddButton, Container, InputContainer } from "./Styles";
import {
  addTodo,
  deleteTodo,
  completedTodo,
  updateTodo,
  clearInputFields,
} from "../Redux/Action-creator";

export function TodoApp() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChange = (e) => {
    dispatch(updateTodo(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    dispatch(addTodo(e.target.value));
    dispatch(clearInputFields());
  };

  return (
    <Container>
      <Heading />
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <InputForm
            type="text"
            onChange={(e) => handleChange(e)}
            value={state.current_todo}
          ></InputForm>
          <AddButton onClick={(e) => handleSubmit(e)}>Add</AddButton>
        </form>
      </InputContainer>

      <TodoList />
    </Container>
  );
}