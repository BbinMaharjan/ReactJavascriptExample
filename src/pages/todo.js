import React from "react";
import { useState } from "react";
import { Label, Input, Button, Table } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { addTodos, markAsComplete } from "../store/actions/todos";

import "../index.css";

const Todo = (props) => {
  const [title, setTitle] = useState("");

  const todos = useSelector((state) => state.todosState.todos);
  // console.log("page", todos);
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todosState.todos);
  const completedTodos = allTodos.filter((todo) => todo.isComplete);

  const onAddTodo = () => {
    const todo = {
      id: Math.random().toString(),
      title,
      isComplete: false,
    };
    dispatch(addTodos(todo));
    setTitle("");
  };

  const handleListTap = (id) => {
    dispatch(markAsComplete(id));
  };

  return (
    <div className=" container mt-8 todo">
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
      <Table striped>
        <thead>
          <tr>
            <th>My All ToDos</th>
          </tr>
        </thead>

        <tbody id="table">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => {
                    handleListTap(todo.id);
                  }}
                >
                  Complete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table striped>
        <thead>
          <tr>
            <th>Completed Todos</th>
          </tr>
        </thead>

        <tbody id="table">
          {completedTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              {/* <td>
                <Button
                  color="danger"
                  onClick={() => {
                    handleListTap(todo.id);
                  }}
                >
                  Complete
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
