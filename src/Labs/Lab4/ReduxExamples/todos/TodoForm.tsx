import { useDispatch, useSelector } from "react-redux"
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
                    <div className="row">
                        <input value={todo.title} onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                        className="form-control col m-2" />
                        <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click"
                            className="btn btn-warning col-2 m-2">
                            Update
                        </button>
                        <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click"
                            className="btn btn-success col-2 m-2">
                            Add
                        </button>
                    </div>
                </li>
    )
}