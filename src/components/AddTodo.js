import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };
  return (
    <div className="task">
      <input
        type="text"
        placeholder="What do you want to do?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button onClick={onSubmit}>Add Task</button>
    </div>
  );
};

export default AddTodo;
