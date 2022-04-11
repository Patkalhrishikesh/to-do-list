import { useState } from "react";


import "./App.css"

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState("");
  const [list, setList] = useState([]);
  const [dtn, setDtn] = useState([]);

  const changeTask = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const changeDuration = (e) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
  };

  const AddList = () => {
    const newList = [message, ...list];
    const newDuration = [duration, ...dtn];

    // UI RERENDER :: innerHTML
    setList(newList);
    setDtn(newDuration);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TO DO LIST</h1>
      {/** INPUT BOX */}
      Task Name : <input
        type="text"
        value={message}
        onChange={changeTask}
      />{" "}
      {/** INPUT BOX */}
      Duration :{" "}
      <input type="text" value={duration} onChange={changeDuration} />{" "}
      {/** INPUT button */}
      <input type="button" value="Add list" onClick={AddList} />
      <br></br>
      <br></br>
      <div >
        <table border="1" bgcolor="pink" class="center" >
          <tr>
            <th>Task Name  </th>
            <th>Task Duration</th>
          </tr>
          <tr>
            <td>
             
              {list.map((item) => (
                <div>{item}</div>
              ))}
            </td>
            <td>
             
              {dtn.map((item) => (
                <div>{item}</div>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
