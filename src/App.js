
import { TodoApp } from "./Todo-app/TodoApp";
import { Provider } from "react-redux";
import { store } from "./Redux/Index";
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
