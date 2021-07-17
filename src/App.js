import { useState } from 'react';
import './App.css';

function App() {

  const [html,sethtml] = useState("");

  const source = html;
  

  const changehtml = (e) => {
    console.log(source);
    sethtml(e.target.value);
  }

  return (
    <div className="App">
      <h1>
        Web Editor
      </h1>
      <div className="tareaheading">
        <p>HTML</p>
        <div className="column">
        <div className="text">
          <textarea rows="50" cols="100" color="#000000" placeholder="Write your code" className="tarea" onChange={changehtml}>

          </textarea>
        </div>
        <div className="view">
          <iframe src={source} style={{height: "500px",width: "500px"}}>

          </iframe>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
