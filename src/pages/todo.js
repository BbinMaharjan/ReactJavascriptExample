import React from "react";
import { useState, useEffect } from "react";
import { Label, Input, Button, Table } from "reactstrap";

import "../index.css";
const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const updateTodo = (id) => {
    const updateTodo = prompt("Update Todo");
    let data = JSON.parse(localStorage.getItem("todos"));
    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          todo: updateTodo,
        };
      }
      return x;
    });
    localStorage.setItem("todos", JSON.stringify(myData));
    window.location.reload();
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveData(newTodos);
  };

  return (
    <div className=" container mt-5 todo">
      <h2 className="text-center">Todo</h2>
      <div className="lib">
        <Label style={{ marginRight: "10px" }} for="MyTodo">
          Todo:
        </Label>
        <Input
          type="text"
          name="todos"
          id="todoInput"
          placeholder="My Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button onClick={onAddTodo} color="success">
          Add
        </Button>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody id="table">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td>
                <Button color="info" onClick={() => updateTodo(todo.id)}>
                  Update
                </Button>{" "}
                <Button color="danger" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
