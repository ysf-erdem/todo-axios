import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import Form from "react-bootstrap/Form";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <li>
      <div>
        {title} {}
        <Form.Control type="date" name="date" /> {}
        <button
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
