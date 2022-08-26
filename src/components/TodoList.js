import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  // const todos = useSelector((state) => {
  //   return state.tasks;
  // });
  const getTodo = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
    setTodo(res.data);
  };
  useEffect(() => {
    getTodo();
  }, []);
  const send = async () => {
    console.log(this);
    let res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      completed: false,
      title: "yusuf",
      userId: 1,
    });
    console.log(res.data);
    getTodo();
  };

  return (
    <>
      <ul className="d">
        {todo.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <button onClick={send}>gönder</button>
    </>
  );
};
// <TodoItem id={todo.id} title={todo.title} />

export default TodoList;
