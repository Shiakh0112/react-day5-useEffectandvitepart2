// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const HandleTodo = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  };
  const HandleUser = (e) => {
    setUser(e.target.value);
    // console.log(user);
  };
  const SaveTodo = () => {
    let obj = {
      todo,
      user,
    };
    setData((prev) => [...prev, obj]);
    console.log(data);
    setTodo("");
    setUser("");
  };

  const HandleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="Todo-container">
        <input type="text" value={user} onChange={HandleUser} />
        <input type="text" value={todo} onChange={HandleTodo} />
      </div>
      <button onClick={SaveTodo}>Save Todo</button>

      <div>
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Todo</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1} </td>
                <td>{ele.todo} </td>
                <td>{ele.user} </td>
                <td>
                  {" "}
                  <button onClick={() => HandleDelete(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todo;
