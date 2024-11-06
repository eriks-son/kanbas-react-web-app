import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
        <div className="row">
            <div className="col m-2">
                {todo.title}
            </div>
            <button onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click" className="btn btn-primary col-2 m-2">
                Edit
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click" className="btn btn-danger col-2 m-2">
                Delete
            </button>
        </div>
    </li>
    );}