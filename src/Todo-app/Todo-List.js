import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {
  TodoItem,
  TodoContainer,
  Checkbox,
  TodoContent,
  CloseButton,
} from "./Styles";
import { deleteTodo, completedTodo } from "../Redux/Action-creator";
import { toggleComplete } from "../Redux/Action-creator";

export function TodoList() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(state);
  const closeButtonStyles = {
    height: "2.5rem",
    width: "2.5rem",
    backgroundColor: "white",
    border: "none !important",
    outline: "none important",
  };

  return (
    <TodoContainer>
      {state.todos.length > 0
        ? state.todos.map((element, index) => {
            const { content, completed, id } = element;
            console.log(completed);
            return (
              <TodoItem key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    type="checkbox"
                    id={index}
                    name="todo"
                    checked={completed}
                    onChange={() => dispatch(toggleComplete(id))}
                  ></Checkbox>
                  <TodoContent
                    contentEditable={true}
                    // onClick={(e)=>console.log(e.target)}
                    style={{
                      textDecoration: `${completed ? "line-through" : "none"}`,
                    }}
                  >
                    {content}
                  </TodoContent>
                  <CloseButton>
                    <AiOutlineCloseSquare
                      style={closeButtonStyles}
                      onClick={() => dispatch(deleteTodo(id))}
                    />
                  </CloseButton>
                </div>
              </TodoItem>
            );
          })
        : ""}
    </TodoContainer>
  );
}
