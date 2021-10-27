import React from "react";
import { useState, useEffect } from "react";
import { Label, Input, Button, Table } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { addTodosToLocalStorage, getAllTodos } from "../store/actions/todos";

import "../index.css";

const Todo = (props) => {
  const [title, setTitle] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);
  useEffect(() => {
    dispatch(getAllTodos());
  });

  const onAddTodo = () => {
    const todo = {
      id: Math.random().toString(),
      title,
    };
    dispatch(addTodosToLocalStorage(todo));
    setTitle("");
  };

  return (
    <div className=" container mt-5 todo">
      <h2 className="text-center">My Todo App</h2>
      <div className="lib">
        <Label style={{ marginRight: "10px" }} for="MyTodo">
          Todo:
        </Label>
        <Input
          type="text"
          name="todo"
          id="todoInput"
          placeholder="My Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button onClick={onAddTodo} color="success">
          Add
        </Button>
      </div>
      <h1>{todos}</h1>
      <Table striped>
        <thead>
          <tr>
            <th>My All ToDos</th>
          </tr>
        </thead>

        <tbody id="table">
          <tr>
            <td>{todos}</td>
          </tr>
          {/* {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <Button color="info">Update</Button>{" "}
                <Button color="danger">Delete</Button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
